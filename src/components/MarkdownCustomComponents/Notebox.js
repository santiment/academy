import React from 'react'
import cx from 'classnames'
import styles from './Notebox.module.scss'

const Notebox = ({ type = 'note', children }) => (
  <div
    className={cx(
      styles.noteBox,
      type === 'pin' && styles.pin,
      type === 'note' && styles.note
    )}
  >
    <div className={styles.boxIcon}>{type === 'pin' ? '📌' : '⚠️'}</div>
    {children}
  </div>
)

export default Notebox
