import React from 'react'
import styles from './Resource.module.scss'

const Resource = ({ title, children }) => (
  <div className={styles.resource}>
    {title && <h6 className={styles.header}>{title}</h6>}
    {children}
  </div>
)

export default Resource
