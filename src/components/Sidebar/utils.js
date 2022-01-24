import { titleToSlug } from "../../utils/docs"

export const isCategoryActive = (active = [], category) =>
  active[0] === titleToSlug(category)
export const isArticleActive = (active = [], category, article) => {
  return (
    (category ? isCategoryActive(active, category) : true) &&
    decodeURIComponent(active[category ? 1 : 0]) === titleToSlug(article)
  )
}
