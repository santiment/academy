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
  (category ? isCategoryActive(active, category) : true) && active[category ? 1 : 0] === titleToSlug(article)

const Sidebar = ({ className }) => {
  let active = []
  if (typeof window !== "undefined") {
    active = window.location.pathname.split("/").slice(1)
  }
    console.log(active)

  return (
    <section className={cx(styles.wrapper, className)}>
      <div className={styles.content}>
        <ul className={styles.list}>
          <h3 className={styles.heading}>{GETTING_STARTED.title}</h3>
          <li>
            <ul className={styles.blocks}>
              {(GETTING_STARTED.articles || []).map(article => (
                <li className={cx(styles.block,isArticleActive(active, null ,article) && styles.block__active)}>
                  <Link to={`/${titleToSlug(article)}/`}>
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
