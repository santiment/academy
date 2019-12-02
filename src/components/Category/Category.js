import React from "react"
import Icon from "@santiment-network/ui/Icon"
import { Link } from "gatsby"
import { titleToSlug } from "../../utils/docs"
import { getCategoryIcon } from "./utils.js"
import styles from "./Category.module.scss"

const Category = ({ title, description }) => {
  const { color, fill } = getCategoryIcon(title)
  return (
    <Link to={`/${titleToSlug(title)}`} className={styles.block}>
      <div
        className={styles.icon}
        style={{ "--color": `${color}`, "--fill": `${fill}` }}
      >
        <Icon type='words-list' />
      </div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.length}>{description}</p>
      </div>
    </Link>
  )
}

export default Category
