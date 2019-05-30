import React from "react"
import Title from "./Title"
import Subtitle from "./Subtitle"
import Features from "./Features"
import styles from "./WhySantiment.module.scss"

const whys = [
  {
    title: "Direct",
    desc:
      "On-chain data is collected directly from running nodes, not 3rd parties, making it faster and more reliable, by eliminating another potential point of failure.",
  },
  {
    title: "Flexible",
    desc:
      "Use GraphQL for freedom and flexibility, or SanPy, our custom Python wrapper that is ideal for data scientists. Our SanSDK in GitHub includes examples for Ruby, R and more soon!",
  },
  {
    title: "Reliable",
    desc:
      "The SanAPI is SSL-encrypted (signed API requests, generated API Key) and low-latency. Our robust CDN connects you to the API server closest to you.",
  },
]

export default () => (
  <section>
    <Title>Why Santiment API?</Title>
    <Subtitle className={styles.subtitle}>
      Average response time is <br /> Transactions are added in less than 5
      minutes
    </Subtitle>

    <ul className={styles.whys}>
      {whys.map(({ title, desc }) => (
        <li className={styles.why} key={title}>
          <div className={styles.why__img} />
          <Title className={styles.why__title} small>
            {title}
          </Title>
          <Subtitle>{desc}</Subtitle>
        </li>
      ))}
    </ul>
  </section>
)
