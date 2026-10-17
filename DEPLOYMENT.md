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
| Directory | *leave blank* (= `public_html`) |

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
