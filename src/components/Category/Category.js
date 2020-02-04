import React from "react"
import { Link } from "gatsby"
import { titleToSlug } from "../../utils/docs"
import styles from "./Category.module.scss"

const Category = ({ wide, title, description, icon }) => {
  const slug = titleToSlug(title)
  return wide ? (
    <Link to={`/${slug}/`} className={styles.block}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.length}>{description}</p>
    </Link>
  ) : (
    <Link to={`/${slug}/`} className={styles.block}>
      <div className={styles.icon}>
        <img src={icon} alt={title} />
      </div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.length}>{description}</p>
      </div>
    </Link>
  )
}

export default Category
