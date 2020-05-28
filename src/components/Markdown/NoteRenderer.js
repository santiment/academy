import React from "react"
import cx from "classnames"
import { flatten } from "./utils"
import styles from "./Markdown.module.scss"

const TYPES = ["ORANGE_TYPE", "RED_TYPE"]

const TYPES_STYLES = {
  "ORANGE_TYPE": styles.blockquote__warning,
  "RED_TYPE": styles.blockquote__error,
}

const NoteRenderer = ({ children }) => {
  let content = React.Children.toArray(children)
  const text = content.reduce(flatten, "")

  const hasSpecialType = TYPES.find(type => text.includes(type))
  if (hasSpecialType) {
    content = content[0].props.children.slice(1)
  }

  return (
    <blockquote
      className={cx(
        styles.blockquote,
        hasSpecialType && TYPES_STYLES[hasSpecialType]
      )}
    >
      {content}
    </blockquote>
  )
}

export default NoteRenderer

// .map(node => node.replace(hasSpecialType, ''))
