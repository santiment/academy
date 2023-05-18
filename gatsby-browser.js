/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export { wrapRootElement } from "./src/apollo/wrap-root-element"

const scrollTo = id => () => {
  try {
    const el = document.querySelector(id)
    if (el) return window.scrollTo(0, el.offsetTop - 90)
  } catch (e) {
    console.log(e)
  }

  return false
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash.replace("/", "")), 10)
  }
}
