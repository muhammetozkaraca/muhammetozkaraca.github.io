# Build the site, then restructure top-level pages into folders
# so URLs are extensionless (e.g. /research instead of /research.html).
# Also drop a .nojekyll file so GitHub Pages serves files as-is.
# Run this instead of rmarkdown::render_site().

rmarkdown::render_site()

out_dir <- "docs"

pretty_pages <- c("research", "teaching", "resources")
for (page in pretty_pages) {
  src <- file.path(out_dir, paste0(page, ".html"))
  dest_dir <- file.path(out_dir, page)
  if (file.exists(src)) {
    dir.create(dest_dir, showWarnings = FALSE)
    file.rename(src, file.path(dest_dir, "index.html"))
    # pandoc's header-attrs script sits above <base>, so its relative path
    # breaks once the page moves into a folder; make it root-relative.
    moved <- file.path(dest_dir, "index.html")
    html <- readLines(moved, warn = FALSE)
    writeLines(gsub('src="site_libs/', 'src="/site_libs/', html, fixed = TRUE), moved)
  }
}

# Stamp the stylesheet and script links with a short hash of their contents,
# so browsers fetch the new files after each update instead of reusing a
# cached old copy (GitHub Pages lets browsers cache them for 10 minutes).
stamp <- function(f) substr(unname(tools::md5sum(file.path(out_dir, f))), 1, 8)
css_v <- stamp("styles.css")
js_v  <- stamp("site.js")
pages <- c(file.path(out_dir, "index.html"),
           file.path(out_dir, pretty_pages, "index.html"))
for (pg in pages[file.exists(pages)]) {
  html <- readLines(pg, warn = FALSE)
  html <- gsub('href="styles.css"', paste0('href="styles.css?v=', css_v, '"'), html, fixed = TRUE)
  html <- gsub('src="site.js"', paste0('src="site.js?v=', js_v, '"'), html, fixed = TRUE)
  writeLines(html, pg)
}

file.create(file.path(out_dir, ".nojekyll"))
