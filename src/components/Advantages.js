import React from "react"
import Title from "./Title"
import Features from "./Features"
import styles from "./Advantages.module.scss"

const advantages = [
  {
    type: "On-chain",
    title: (
      <>
        4.0+ TB of
        <br />
        on-chain data
      </>
    ),
    features: [
      "Token Age Consumed",
      "Exchange Inflow/Outflow",
      "Token Circulation/Velocity",
      "Daily Active Addresses",
      "Network Growth",
      "Top 100 transactions",
      "RV, MVRV, NVT",
      "Top Token Holders",
      "Eth Mining Metrics",
    ],
  },
  {
    type: "Social",
    title: (
      <>
        200+ GB
        <br />
        of text data
      </>
    ),
    features: [
      "Data from forums and chats",
      "Telegram, Reddit, Discord, Twitter",
      "Volume of social mentions",
      "Comprehensive word clouds",
      "Top Social Gainers",
      "Dev Activity measurement",
      "1.7 BN Github events",
      "Hourly updates",
      "Historical data starts from 2013",
    ],
  },
  {
    type: "Financial",
    title: (
      <>
        1200+
        <br />
        projects
      </>
    ),
    features: [
      "Price",
      "Volume",
      "Market Cap",
      "Open, Close, High, Low",
      "227 exchange wallets",
    ],
  },
]

export default () => (
  <section>
    <ul className={styles.advantages}>
      {advantages.map(({ type, title, features }) => (
        <li key={type} className={styles.advantage}>
          <h4 className={styles.advantage__type}>{type}</h4>
          <Title className={styles.advantage__title}>{title}</Title>
          <Features data={features} classes={styles} />
        </li>
      ))}
    </ul>
  </section>
)
