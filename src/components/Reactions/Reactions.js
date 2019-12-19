import React from "react"
import cx from "classnames"
import GA from "react-ga"
import styles from "./Reactions.module.scss"

const REACTIONS = [
  { type: "like", icon: "😃" },
  { type: "netral", icon: "😐" },
  { type: "bad", icon: "😟" },
]

const sendGA = ({ type, article }) => {
  GA.event({
    category: "Reaction",
    action: `${type} reaction for '${article}' article"`,
  })
  console.log(article, type)
}

const Reactions = ({ article }) => (
  <div className={styles.wrapper}>
    <h4 className={styles.text}>Was this article helpful?</h4>
    <div className={styles.reactions}>
      {REACTIONS.map(({ icon, type }) => (
        <div
          key={type}
          className={cx(styles.reaction)}
          onCLick={() => sendGA({ type, article })}
        >
          {icon}
        </div>

      ))}
    </div>
  </div>
)

export default Reactions
