import React from "react"
import cx from "classnames"
import styles from "./Details.module.scss"

const Details = ({ children }) => {
  return <details>{children}</details>
}

export const Summary = ({ children }) => <summary>{children}</summary>

export default Details
