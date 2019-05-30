import React from "react"
import Title from "./Title"
import Subtitle from "./Subtitle"
import styles from "./UseCases.module.scss"

const cases = [
  {
    title: "First mover advantage",
    desc:
      "On-chain data is collected directly from running nodes, not 3rd parties, making it faster and more reliable, by eliminating another potential point of failure.",
  },
  {
    title: "Backtesting strategies",
    desc:
      "Use GraphQL for freedom and flexibility, or SanPy, our custom Python wrapper that is ideal for data scientists. Our SanSDK in GitHub includes examples for Ruby, R and more soon!",
  },
  {
    title: "Third-party Integration",
    desc:
      "The SanAPI is SSL-encrypted (signed API requests, generated API Key) and low-latency. Our robust CDN connects you to the API server closest to you.",
  },
]

export default () => (
  <section id="use-cases">
    <Title>Use cases</Title>
    <Subtitle className={styles.subtitle}>
      Santiment is more than just an analytics platform.
      <br />
      With our data, you can predict changes in the market
    </Subtitle>

    <ul className={styles.cases}>
      {cases.map(({ title, desc }) => (
        <li className={styles.case} key={title}>
          <Title small className={styles.case__title}>
            {title}
          </Title>
          <Subtitle className={styles.case__desc}>{desc}</Subtitle>
        </li>
      ))}
    </ul>
  </section>
)
