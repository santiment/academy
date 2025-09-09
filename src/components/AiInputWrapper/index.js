import React from "react"
import cx from "classnames"
import styles from "./AiInputWrapper.module.scss"
import logo from "./tutle-waving.svg"

const AiInputWrapper = () => {
  return (
    <div className={cx(styles.container)}>
      <img class={cx(styles.turtle)} src={logo} alt="" />

      <ai-input></ai-input>
    </div>
  )
}

export default AiInputWrapper
