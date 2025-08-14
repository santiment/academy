import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import SidebarCategory from './SidebarCategory'
import {
  GUIDES,
  REFERENCES,
  RESOURCES,
  GETTING_STARTED,
} from '../../docs/navigation'
import { titleToSlug } from '../../utils/docs'
import { isArticleActive } from './utils'
import styles from './Sidebar.module.scss'

const Sidebar = ({ className }) => {
  let active = []
  if (typeof window !== 'undefined') {
    active = window.location.pathname.split('/').slice(1)
  }

  return (
    <section className={cx(styles.wrapper, className)}>
      <div className={styles.content}>
        <ul className={styles.list}>
          <h3 className={styles.heading}>{GETTING_STARTED.title}</h3>
          <li>
            <ul className={styles.blocks}>
              {(GETTING_STARTED.articles || []).map(article => (
                <li
                  className={cx(
                    styles.block,
                    isArticleActive(active, null, article) &&
                      styles.block__active
                  )}
                  key={article}
                >
                  <Link to={`/${titleToSlug(article)}/`}>{article}</Link>
                </li>
              ))}
            </ul>
          </li>
          <h3 className={styles.heading}>Guides</h3>
          {GUIDES.map((category, idx) => (
            <SidebarCategory {...category} active={active} key={idx} />
          ))}
          <h3 className={styles.heading}>Resources</h3>
          {REFERENCES.map((category, idx) => (
            <SidebarCategory {...category} active={active} key={idx} />
          ))}
        </ul>
      </div>
      <div className={styles.empty} />
    </section>
  )
}

export default Sidebar
