# Deploying to Hostinger via GitHub

## How it works

Hostinger's Git integration **clones a repository into `public_html` — it never runs a
build**. This project is a Vite app, so its source is not servable as-is. The pipeline is:

```
push to master  →  GitHub Actions builds (npm ci && npm run build)
                →  pushes dist/ to the `deploy` branch
                →  Hostinger pulls `deploy` into public_html
```

- `master` holds the source. `dist/` stays git-ignored there.
- `deploy` holds **only built files** (index.html, assets/, .htaccess, robots.txt,
  sitemap.xml, favicon.jpg). It is force-pushed on every build — never commit to it by hand.
- Workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## One-time setup

### 1. Push this branch

```bash
git add -A
git commit -m "Add Hostinger deployment pipeline"
git push origin master
```

### 2. Allow Actions to push the deploy branch

GitHub repo → **Settings → Actions → General → Workflow permissions** →
select **Read and write permissions** → Save.

Without this the build succeeds but the push to `deploy` fails with a 403.

### 3. Create the deploy branch

The workflow runs automatically on push to `master`. To run it manually:
repo → **Actions → Build and publish to Hostinger → Run workflow**.

Confirm a `deploy` branch now exists and contains `index.html` and `.htaccess` at its root.

### 4. Empty public_html

Hostinger refuses to set up Git into a non-empty directory. In hPanel **File Manager**,
download a backup of the current `public_html`, then delete its contents.

### 5. Connect Hostinger to the repository

hPanel → **Websites → (your domain) → Advanced → GIT → Create new repository**:

| Field | Value |
|---|---|
| Repository | `https://github.com/GovindRaj007/Ultra-safe-nets.git` |
| Branch | `deploy` |
| Directory | `public_html` |

> The Directory field is a path **relative to your home directory**, not to the web root.
> Leaving it blank clones into `~/` and leaves `public_html` empty, which makes every page
> return **403 Forbidden**. If your domain is an addon/secondary domain, the correct path is
> `domains/<your-domain>/public_html` — check the Website's document root in hPanel.

**If the repository is private:** use the SSH URL `git@github.com:GovindRaj007/Ultra-safe-nets.git`,
copy the SSH public key Hostinger shows, and add it in GitHub under
**Settings → Deploy keys → Add deploy key** (read-only access is enough).

### 6. Turn on auto-deployment

In the same hPanel GIT screen, copy the **webhook URL**. In GitHub:
**Settings → Webhooks → Add webhook** → paste the URL, Content type `application/json`,
"Just the push event" → Add.

Hostinger then pulls automatically each time Actions updates `deploy`. Without the webhook
everything still works, you just press **Deploy** in hPanel after each build.

## Routine deployments

Push to `master`. Nothing else. Watch progress under the repo's **Actions** tab.

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

A deep route returning 404 means `.htaccess` did not reach the server, or the host has
`AllowOverride` disabled. The `.git` check matters because Hostinger clones the repository
into the web root; `public/.htaccess` blocks `.git` and `.github`.

## Troubleshooting

### 403 Forbidden on every page

Apache found no readable `index.html` in the document root. Work through these in order.

**1. Are the files in the right place?**
hPanel → **File Manager** → open `public_html`. You should see `index.html`, `assets/`,
`.htaccess`, `robots.txt`, `sitemap.xml` (enable "show hidden files" to see `.htaccess`).

| What you see | Cause | Fix |
|---|---|---|
| `public_html` is empty, and those files sit in the **home** folder next to `public_html` | Directory field was left blank | In hPanel GIT, delete the repository entry and re-create it with Directory `public_html`. Then delete the stray files from the home folder. |
| `public_html` holds `src/`, `package.json`, `vite.config.ts` | Hostinger is pulling `master` instead of the built branch | Re-create the repository entry with Branch `deploy`. Source is not servable — it has no bundled JS. |
| `public_html` is empty and nothing was cloned anywhere | The pull never ran, or failed on a private repo | Press **Deploy** in hPanel and read the error. For a private repo add Hostinger's SSH key as a GitHub deploy key and use the SSH URL. |
| The correct files **are** in `public_html` | Permissions | See step 2. |

**2. Permissions.** Apache needs directories `755` and files `644`. In File Manager check
`index.html`'s permissions, or over SSH:

```bash
cd ~/public_html
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

**3. Wrong document root.** If the site is an addon domain, hPanel's Website settings show its
real document root (often `domains/<domain>/public_html`). The Git Directory must match it.

**4. Only then suspect `.htaccess`.** Temporarily rename it to `.htaccess.off` and reload. If
the 403 disappears, the host likely disallows a directive — restore it and remove rules in
halves to find which. Note that the site **needs** `.htaccess` for routing, so this is only a
diagnostic step, never a fix.

### Home page works but other routes 404

`.htaccess` is missing from the web root, or the host has `AllowOverride None`. The file is a
dotfile, so file managers hide it by default — turn on hidden files before concluding it's absent.

## Environment variables

**This project currently uses none.** Nothing in `src/` reads `import.meta.env`, so the build
needs no secrets. `.env.example` is unused boilerplate, and the Google Tag Manager container
ID (`GTM-PPSPSLT2`) is hardcoded in `index.html`.

If you add one later:

1. Name it with a `VITE_` prefix, or Vite will not expose it to the browser.
2. Add it in GitHub under **Settings → Secrets and variables → Actions**.
3. Pass it to the build step in `deploy.yml`:
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_SOMETHING: ${{ secrets.VITE_SOMETHING }}
   ```

Remember that `VITE_` values are **compiled into the public JavaScript bundle**. Never put an
API key, password or other secret in one. `.env` files are git-ignored, so real values never
reach the repository.

## Manual fallback

If Actions or the webhook is unavailable:

```bash
npm run build
# upload the CONTENTS of dist/ into public_html, including the .htaccess dotfile
```

Most file managers hide dotfiles — if `.htaccess` is missed, every route except `/` 404s.

If `npm run build` crashes with a Node stack trace (exit 134), the machine is out of memory.
Close Chrome tabs, or run Vite directly, which avoids the extra npm process:

```bash
node node_modules/vite/bin/vite.js build
```
