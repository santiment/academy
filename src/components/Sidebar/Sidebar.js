import React from "react"
import cx from "classnames"
import { Link } from "gatsby"
import SidebarCategory from './SidebarCategory'
import { CATEGORIES, GETTING_STARTED } from "../../docs/navigation"
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
          <h3 className={styles.heading}>{GETTING_STARTED.title}</h3>
          <li>
            <ul className={styles.articles}>
              {(GETTING_STARTED.articles || []).map(article => (
                <li>
                  <Link
                    to={`${titleToSlug(article)}/`}
                    className={cx(styles.article,isArticleActive(active,GETTING_STARTED.title,article) && styles.article__active)}
                  >
                    {article}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <h3 className={styles.heading}>Resources</h3>
          {CATEGORIES.map(category => <SidebarCategory {...category} active={active} />)}
        </ul>
      </div>
      <div className={styles.empty} />
    </section>
  )
}

export default Sidebar
