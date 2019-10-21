import React from "react"
import cx from "classnames"
import { Link } from "gatsby"
import { CATEGORIES, GETTING_STARTED } from "../../docs/navigation"
import { titleToSlug } from "../../utils/docs"
import styles from "./Sidebar.module.scss"

const isBlockActive = (active, category, block) =>
  active[0] === titleToSlug(category) && active[1] === titleToSlug(block)
const isArticleActive = (active, category, block, article) =>
  isBlockActive(active, category, block) && active[2] === titleToSlug(article)

const Sidebar = ({ className }) => {
  let active
  if (typeof window !== 'undefined') {
    active = window.location.pathname.split("/").slice(1)
  }

  return (
    <section className={cx(styles.wrapper, className)}>
      <ul className={styles.list}>
        <li className={styles.category__wrapper}>
          <span className={styles.category}>{GETTING_STARTED.title}</span>
          <ul className={styles.blocks}>
            {GETTING_STARTED.blocks.map(({ title }) => (
              <li>
                <Link
                  to={`/${titleToSlug(title)}`}
                  className={cx(
                    styles.block,
                    active[0] === titleToSlug(title) &&
                      styles.block__active
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        {CATEGORIES.map(category => (
          <li className={styles.category__wrapper}>
            <span className={styles.category}>{category.title}</span>
            <ul className={styles.blocks}>
              {category.blocks.map(({ title, articles }) => (
                <li>
                  {articles.length ? (
                    <Link
                      to={`/${titleToSlug(category.title)}/${titleToSlug(
                        title
                      )}`}
                      className={cx(
                        styles.block,
                        isBlockActive(active, category.title, title) &&
                          styles.block__active
                      )}
                    >
                      {title}
                    </Link>
                  ) : (
                    <span className={cx(styles.block, styles.block__disabled)}>
                      {title}
                    </span>
                  )}
                  {isBlockActive(active, category.title, title) && articles.length > 0 && (
                    <ul className={styles.articles}>
                      {articles.map(article => (
                        <li>
                          <Link
                            to={`/${titleToSlug(category.title)}/${titleToSlug(
                              title
                            )}/${titleToSlug(article)}`}
                            className={cx(
                              styles.article,
                              isArticleActive(
                                active,
                                category.title,
                                title,
                                article
                              ) && styles.article__active
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
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Sidebar
