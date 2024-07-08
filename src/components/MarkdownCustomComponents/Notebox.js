import React from 'react'
import cx from 'classnames'
import styles from './Notebox.module.scss'

const ICONS = {
  hand: '👋',
  pin: '📌',
  note: '⚠️',
  none: '',
  openBook: '📖 ',
  exclamation: '❗',
  pointRight: '👉'
}

const Notebox = ({ type = 'note', children }) => {
  const icon = ICONS[type] ?? '⚠️'
  const style = styles[type] ?? styles.note

  return (
    <div className={cx(styles.noteBox, style)}>
      <div className={styles.boxIcon}>{icon}</div>
      {children}
    </div>
  )
}

export default Notebox
