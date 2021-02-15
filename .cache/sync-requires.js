const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/brian/Personal-Site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/brian/Personal-Site/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/brian/Personal-Site/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/brian/Personal-Site/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/brian/Personal-Site/src/pages/using-typescript.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/brian/Personal-Site/src/templates/blog-post.js")))
}

