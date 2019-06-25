import React from "react"
import cx from "classnames"
import styles from "./Title.module.scss"

export default ({ children, small, className }) => (
  <h2 className={cx(className, styles.title, small && styles.small)}>
    {children}
  </h2>
)
