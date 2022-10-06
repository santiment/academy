import React from 'react'
import cx from 'classnames'
import styles from './Notebox.module.scss'

function getBoxIcon(type) {
  switch (type) {
    case 'hand':
      return '👋'
    case 'pin':
      return '📌'
    default:
      return '⚠️'
  }
}

const Notebox = ({ type = 'note', children }) => (
  <div
    className={cx(
      styles.noteBox,
      type === 'pin' && styles.pin,
      type === 'note' && styles.note,
      type === 'hand' && styles.hand
    )}
  >
    <div className={styles.boxIcon}>{getBoxIcon(type)}</div>
    {children}
  </div>
)

export default Notebox
