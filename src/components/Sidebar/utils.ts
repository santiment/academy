import { titleToSlug } from '../../utils/docs'

export const isCategoryActive = (active: any[] = [], category: any) =>
  active[0] === titleToSlug(category)

export const isArticleActive = (active: any = [], category: any, article: any) => {
  return (
    (category ? isCategoryActive(active, category) : true) &&
    decodeURIComponent(active[category ? 1 : 0]) === titleToSlug(article)
  )
}
