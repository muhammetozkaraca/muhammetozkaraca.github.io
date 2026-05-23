# Build the site, then restructure top-level pages into folders
# so URLs are extensionless (e.g. /research instead of /research.html).
# Also drop a .nojekyll file so GitHub Pages serves files as-is.
# Run this instead of rmarkdown::render_site().

rmarkdown::render_site()

out_dir <- "docs"

pretty_pages <- c("research", "teaching")
for (page in pretty_pages) {
  src <- file.path(out_dir, paste0(page, ".html"))
  dest_dir <- file.path(out_dir, page)
  if (file.exists(src)) {
    dir.create(dest_dir, showWarnings = FALSE)
    file.rename(src, file.path(dest_dir, "index.html"))
  }
}

file.create(file.path(out_dir, ".nojekyll"))
