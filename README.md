# muhammetozkaraca.github.io

Personal academic website. Built with R Markdown; deployed via GitHub Pages.

Live at <https://muhammetozkaraca.github.io/>.

## Build

From R, in this folder:

```r
source("build.R")
```

Rendered output goes to `docs/`, which is what GitHub Pages serves
(configured under repo Settings → Pages → "Deploy from a branch" →
`main` / `/docs`).

## Local preview

```r
servr::httd("docs")
```

Or from a terminal:

```
python3 -m http.server --directory docs
```
