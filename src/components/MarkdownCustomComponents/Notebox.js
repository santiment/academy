import React from 'react'
import cx from 'classnames'
import styles from './Notebox.module.scss'

const ICONS = {
  hand: '👋',
  pin: '📌',
  note: '⚠️',
}

const Notebox = ({ type = 'note', children }) => {
  const ICON = ICONS[type] ?? '⚠️'

  return (
    <div
      className={cx(
        styles.noteBox,
        type === 'pin' && styles.pin,
        type === 'note' && styles.note,
        type === 'hand' && styles.hand
      )}
    >
      <div className={styles.boxIcon}>{ICON}</div>
      {children}
    </div>
  )
}

export default Notebox
