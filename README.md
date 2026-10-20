# roysijnesael.github.io

My personal site, built with [Next.js](https://nextjs.org/) and deployed as a
static site to [GitHub Pages](https://pages.github.com/).

Live at <https://roysijnesael.github.io>.

## Local development

Install dependencies and start the dev server:

```shell
npm install
npm run dev
```

The site is available at <http://localhost:3000>.

## Building

The site is a static export (`output: "export"` in `next.config.ts`); the
build writes plain HTML, CSS and JS to `out/`:

```shell
npm run build
```

To preview the exported site locally:

```shell
npm run preview
```

## Structure

- `app/layout.tsx` — shared header, footer and metadata
- `app/page.tsx` — homepage
- `app/about/page.tsx` — about page
- `app/not-found.tsx` — 404 page
- `app/globals.css` — styles
- `.github/workflows/pages.yml` — build and deploy workflow

Pushing to `main` triggers a build and deploy to GitHub Pages.

## Notes

GitHub Pages only serves static files, so this project avoids server-side
features: no route handlers, middleware, ISR or server actions. Images use the
unoptimized loader, and `trailingSlash` is enabled so pages resolve as
directories.
