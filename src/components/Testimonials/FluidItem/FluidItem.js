import React from "react"
import cx from "classnames"
import styles from "./FluidItem.module.scss"

const FluidItem = ({ pic }) => (
    <div
      className={cx(styles.pic, styles[`pic_${pic}`])}
    />
  )

export default FluidItem
