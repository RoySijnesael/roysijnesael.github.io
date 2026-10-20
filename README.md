# roysijnesael.github.io

My personal site, built with [Jekyll](https://jekyllrb.com/) and deployed to
[GitHub Pages](https://pages.github.com/) with GitHub Actions.

Live at <https://roysijnesael.github.io>.

## Local development

The site uses Ruby (3.1–3.3; Jekyll's `eventmachine` dependency does not build
on Ruby 3.4). Install the dependencies once:

```shell
bundle install
```

Then start the local server:

```shell
bundle exec jekyll serve
```

The site is available at <http://localhost:4000>.

Alternatively, build without installing Ruby locally using Docker:

```shell
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll:4 \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

## Editing

- `_config.yml` — site title, description, theme and URL
- `index.md` — homepage
- `about.md` — about page
- `.github/workflows/pages.yml` — the deploy workflow

Pushing to `main` triggers a build and deploy to GitHub Pages.
