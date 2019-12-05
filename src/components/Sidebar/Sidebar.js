import React from "react"
import cx from "classnames"
import { Link } from "gatsby"
import { CATEGORIES } from "../../docs/navigation"
import { titleToSlug } from "../../utils/docs"
import styles from "./Sidebar.module.scss"

const isCategoryActive = (active = [], category) =>
  active[0] === titleToSlug(category)
const isArticleActive = (active = [], category, article) =>
  isCategoryActive(active, category) && active[1] === titleToSlug(article)

const Sidebar = ({ className }) => {
  let active = []
  if (typeof window !== "undefined") {
    active = window.location.pathname.split("/").slice(1)
  }

  return (
    <section className={cx(styles.wrapper, className)}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {CATEGORIES.map(({ title, articles }) => (
            <li className={styles.category__wrapper}>
              <Link
                to={`/${titleToSlug(title)}/`}
                className={cx(
                  styles.category,
                  isCategoryActive(active, title) && styles.category__active
                )}
              >
                {title}
              </Link>
              {isCategoryActive(active, title) && (
                <ul className={styles.articles}>
                  {(articles || []).map(article => (
                    <li>
                      <Link
                        to={`/${titleToSlug(title)}/${titleToSlug(article)}/`}
                        className={cx(
                          styles.article,
                          isArticleActive(active, title, article) &&
                            styles.article__active
                        )}
                      >
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.empty} />
    </section>
  )
}

export default Sidebar
