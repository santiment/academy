import React, { useState } from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import { titleToSlug } from '../../utils/docs'
import styles from './Category.module.scss'

const Category = ({ wide, title, description, icon: Icon, maxWidth }) => {
  const [isHover, setIsHover] = useState(false)
  const slug = titleToSlug(title)

  const setHover = () => {
    if (!isHover) {
      setIsHover(true)
    }
  }

  const removeHover = () => {
    if (isHover) {
      setIsHover(false)
    }
  }

  return (
    <Link
      to={`/${slug}/`}
      className={cx(styles.block, wide && styles.wide)}
      onTouchStart={setHover}
      onMouseEnter={setHover}
      onTouchEnd={removeHover}
      onTouchCancel={removeHover}
      onMouseLeave={removeHover}
    >
      <div className={styles.icon}>
        <Icon withColor={isHover} />
      </div>
      <div style={{maxWidth: maxWidth}}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.length}>{description}</p>
      </div>
    </Link>
  )
}

export default Category
