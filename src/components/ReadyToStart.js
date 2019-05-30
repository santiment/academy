import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import styles from "./ReadyToStart.module.scss"

export default () => (
  <section className={styles.wrapper}>
    <Title>Ready to get started?</Title>
    <p className={styles.text}>
      Click below to access the Santiment API or join the Discord
      <br />
      channel to share your solutions with the world
    </p>
    <Link to="/account" className={styles.btn}>
      Get access
    </Link>
  </section>
)
