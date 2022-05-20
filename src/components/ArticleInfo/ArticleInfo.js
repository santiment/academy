import React from 'react'
import cx from 'classnames'
import { getDateFormats } from '../../utils/dates'
import { PEOPLE } from './../../docs/people'
import logo from '../../images/logos/logo-sanbase.svg'
import styles from './ArticleInfo.module.scss'

const DEFAULT_NAME = 'Santiment Team'

const ArticleInfo = ({ title, author, date }) => {
  const name = author || DEFAULT_NAME
  const { description, imageUrl } = PEOPLE[name.toLowerCase()] || {}

  let dateString = undefined
  if (date) {
    const { DD, MMM, YYYY } = getDateFormats(new Date(date))
    dateString = `${MMM} ${DD}, ${YYYY}`
  }

  return (
    <section className={styles.block}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.info}>
        <div className={cx(styles.imageWrapper, !imageUrl && styles.onlyPhoto)}>
          <img src={imageUrl || logo} alt="author" />
        </div>
        <div>
          <h4 className={styles.author}>{name}</h4>
          <span className={styles.description}>
            {dateString ? dateString : description}
          </span>
        </div>
      </div>
    </section>
  )
}

export default ArticleInfo
