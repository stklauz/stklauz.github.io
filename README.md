# stklauz.github.io

Personal website for **Cláudia Carvalho (Klauz)**, built with [Hugo](https://gohugo.io/) using the `lemon` theme.

The site source lives in this repo (content + config + theme). The generated static site is built into `public/` and deployed to GitHub Pages.

## Tech stack

- **Static site generator**: Hugo
- **Theme**: `lemon`
- **Hosting / deploy**: GitHub Pages via GitHub Actions (`.github/workflows/gh-pages.yml`)

## Repo structure (high level)

- `config.toml`: site configuration (base URL, menus, theme settings, params)
- `content/`: pages and posts written in Markdown
- `themes/`: Hugo themes (the `lemon` theme is committed in this repo)
- `static/`: static assets copied as-is (images, icons, etc.), if present
- `public/`: build output (generated)

## Prerequisites

- **Hugo** installed locally.
  - Verify with:

```bash
hugo version
```

## Develop locally

Run the local dev server:

```bash
hugo server -D
```

- The `-D` flag includes draft content.
- Hugo will watch for changes and live-reload.

## Updating the theme / CSS (common gotcha)

Hugo copies theme assets from `themes/lemon/static/` into `public/` during a build.

- **Edit source files**: change CSS in `themes/lemon/static/...` (or `static/...`), not in `public/`.
- **Rebuild / preview**:

```bash
# preview with live reload
hugo server -D

# or build output into public/
hugo --minify
```

- **If you don’t see changes**: do a hard refresh / clear cache (the browser may be serving an older cached CSS file).

## Build

Build the production site into `public/`:

```bash
hugo --minify
```

To confirm the output locally, you can serve `public/` with any static server (or just run `hugo server`).

## Write content

Most work happens in `content/`.

Common workflows:

```bash
# new post (adjust section/name as you prefer)
hugo new content/posts/my-post.md
```

Then edit the Markdown file and preview with `hugo server -D`.

## Deploy (GitHub Pages)

Deployment is automated:

- On every push to `main`, GitHub Actions runs `hugo --minify` and publishes `./public` to GitHub Pages.
- Workflow file: `.github/workflows/gh-pages.yml`

If you’re changing the theme, it lives in `themes/lemon`—commit those changes like any other file in this repo.

## Notes

- `package.json` is not used for building the site (Hugo is the build tool). If you add frontend tooling later, update this README accordingly.
