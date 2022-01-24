import React, { useState, useEffect } from "react"
import cx from "classnames"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import { titleToSlug } from "../../utils/docs"
import { isCategoryActive, isArticleActive } from "./utils"
import styles from "./Sidebar.module.scss"

const SidebarCategory = ({ active, title, articles = [] }) => {
  const isActive = isCategoryActive(active, title)
  const [isOpen, setIsOpen] = useState(isActive)
  const [render, setRender] = useState(false)
  useEffect(() => setRender(true), [])
  return (
    render && (
      <li
        className={cx(
          styles.category__wrapper,
          isOpen && styles.category__opened
        )}
      >
        <div
          className={cx(styles.category, isActive && styles.category__active)}
        >
          <Link
            to={`/${titleToSlug(title)}/`}
            className={cx(styles.category__title)}
          >
            {title}
          </Link>
          {articles.length > 0 && (
            <Icon
              type="arrow-right"
              className={styles.arrow}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        <ul className={styles.articles}>
          {articles.map((article, idx) => {
            const slugTitle = article.slug || article
            const linkTitle = article.title || article
            return (
              <li key={idx}>
                <Link
                  to={`/${titleToSlug(title)}/${titleToSlug(slugTitle)}/`}
                  className={cx(
                    styles.article,
                    isArticleActive(active, title, slugTitle) &&
                      styles.article__active
                  )}
                >
                  {linkTitle}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    )
  )
}

export default SidebarCategory
