import React from "react"
import { Link } from "gatsby"
import cx from 'classnames'
import { titleToSlug } from "../../utils/docs"
import styles from "./Category.module.scss"

const Category = ({ wide, title, description, icon: Icon }) => {
  const slug = titleToSlug(title)
  return (
    <Link to={`/${slug}/`} className={cx(styles.block, wide && styles.wide)}>
      <div className={cx(styles.icon)}>
        <Icon />
      </div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.length}>{description}</p>
      </div>
    </Link>
  )
}

export default Category
