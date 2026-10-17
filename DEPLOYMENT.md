# Deploying to Hostinger via GitHub

This is a Vite single-page app. It must be **built** (`npm run build`) into `dist/` before it
can be served — raw source has no bundled JavaScript. Who runs that build decides which branch
Hostinger should point at. Pick the option that matches your hPanel screen.

| | Option A — Hostinger builds | Option B — GitHub builds |
|---|---|---|
| Your hPanel shows | Build command / Output directory fields, build logs | Only Repository, Branch, Directory |
| Hostinger branch | **`master`** (source) | **`deploy`** (built files) |
| Builds on | Hostinger | GitHub Actions |

**Deploying `deploy` to a build-enabled panel fails with `package.json file not found`** —
that branch intentionally holds only compiled output. **Deploying `master` to a clone-only
panel serves raw source** and shows a blank page. Match the branch to the mode.

---

## Option A — Hostinger builds from source (recommended when your panel builds)

hPanel → **Websites → (your domain) → Deployments / GIT**:

| Field | Value |
|---|---|
| Repository | `https://github.com/GovindRaj007/Ultra-safe-nets.git` |
| Branch | `master` |
| Install / build command | `npm ci && npm run build` (or just `npm run build` if it installs for you) |
| Output / publish directory | `dist` |
| Node version | 18 or newer (20 preferred) |

The repo pins this: `engines.node` in `package.json` and `.nvmrc` both request Node 20, which
most build platforms honour automatically.

Everything the live site needs is produced into `dist/` by the build, including `.htaccess`,
`robots.txt`, `sitemap.xml` and `favicon.jpg` — they live in `public/` and Vite copies them.

With this option the `deploy` branch and the GitHub Actions workflow are no longer required for
publishing. Keep the workflow anyway if you want: it builds on every push to `master` and fails
loudly if the site is broken, which catches problems before Hostinger tries to deploy them.

---

## Option B — GitHub builds, Hostinger only clones

Use this when hPanel offers no build step.

```
push to master  →  GitHub Actions builds
                →  force-pushes dist/ to the `deploy` branch
                →  Hostinger pulls `deploy` into public_html
```

Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

### 1. Allow Actions to push the deploy branch

GitHub repo → **Settings → Actions → General → Workflow permissions** →
**Read and write permissions** → Save. Without this the build succeeds but the push 403s.

### 2. Create the deploy branch

It runs on every push to `master`, or manually via
**Actions → Build and publish to Hostinger → Run workflow**. Confirm the `deploy` branch has
`index.html` and `.htaccess` at its root.

### 3. Connect Hostinger

| Field | Value |
|---|---|
| Repository | `https://github.com/GovindRaj007/Ultra-safe-nets.git` |
| Branch | `deploy` |
| Directory | `public_html` |

> Directory is relative to your **home directory**, not the web root. Blank clones into `~/`
> and leaves `public_html` empty → **403 Forbidden**. For an addon domain the path is usually
> `domains/<your-domain>/public_html`; hPanel's Website settings show the real document root.

`public_html` must be empty before setup — back it up and clear it first.

### 4. Auto-deployment

Copy the webhook URL from the hPanel GIT screen → GitHub **Settings → Webhooks → Add webhook**
→ Content type `application/json`, "Just the push event". Without it, press **Deploy** in
hPanel after each build.

---

## Routine deployments

Push to `master`. Under Option A Hostinger builds it; under Option B Actions builds and
Hostinger pulls.

## Verify after deploying

```bash
# Home page and a deep SPA route must both return 200 (not 404)
curl -I https://urbansafetygrills.in
curl -I https://urbansafetygrills.in/services/invisible-grills

# Ads landing pages must report noindex
curl -I https://urbansafetygrills.in/invisible-grills-vijayawada-guntur | grep -i x-robots-tag

# Crawler files must be reachable
curl -I https://urbansafetygrills.in/robots.txt
curl -I https://urbansafetygrills.in/sitemap.xml

# Source history must NOT be exposed - expect 403
curl -I https://urbansafetygrills.in/.git/config
```

## Troubleshooting

### Build fails: `package.json file not found`

Hostinger is building, but you pointed it at `deploy`, which holds only compiled output.
Switch the branch to `master` and set the output directory to `dist` (Option A).

Do **not** commit `src/` into `deploy` to satisfy the build — Actions force-overwrites that
branch on every run, so the source would be wiped and the two copies would drift.

### 403 Forbidden on every page

Apache found no readable `index.html` in the document root.

| What `public_html` contains | Cause | Fix |
|---|---|---|
| Empty, files sit in the **home** folder beside it | Directory left blank | Re-create the repo entry with Directory `public_html`, then delete the stray files |
| `src/`, `package.json`, `vite.config.ts` | Serving raw source | Option A: set output directory `dist`. Option B: switch branch to `deploy` |
| Empty, nothing cloned anywhere | Pull never ran, or private-repo auth failed | Press **Deploy** and read the error; for a private repo add Hostinger's SSH key as a GitHub deploy key |
| The correct files | Permissions | Directories `755`, files `644` |

```bash
cd ~/public_html
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

Suspect `.htaccess` only after the above. It denies `.git`, `.github` and specific filenames —
it cannot 403 the home page when a readable `index.html` exists.

### Home page works but other routes 404

`.htaccess` is missing from the web root, or the host has `AllowOverride None`. It is a
dotfile, so file managers hide it by default — enable hidden files before concluding it's gone.

### Build runs out of memory

Vite minifies with terser, which is memory hungry. Locally, close other applications or run
Vite directly to avoid the extra npm process:

```bash
node node_modules/vite/bin/vite.js build
```

If it happens on Hostinger, switch `build.minify` in `vite.config.ts` from `"terser"` to
`"esbuild"` — much lighter, slightly larger output.

## Environment variables

**This project currently uses none.** Nothing in `src/` reads `import.meta.env`, so the build
needs no secrets. `.env.example` is unused boilerplate, and the Google Tag Manager container
ID (`GTM-PPSPSLT2`) is hardcoded in `index.html`.

If you add one later:

1. Name it with a `VITE_` prefix, or Vite will not expose it to the browser.
2. Option A: add it in hPanel's environment-variables section. Option B: add it in GitHub under
   **Settings → Secrets and variables → Actions** and pass it to the build step:
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_SOMETHING: ${{ secrets.VITE_SOMETHING }}
   ```

`VITE_` values are **compiled into the public JavaScript bundle**. Never put an API key or
password in one. `.env` files are git-ignored, so real values never reach the repository.

## Manual fallback

```bash
npm run build
# upload the CONTENTS of dist/ into public_html, including the .htaccess dotfile
```

Most file managers hide dotfiles — if `.htaccess` is missed, every route except `/` 404s.
