import React from "react"
import styles from "./Subtitle.module.scss"

export default ({ children, className, ...props }) => (
  <h3 className={`${styles.subtitle} ${className}`} {...props}>
    {children}
  </h3>
)
