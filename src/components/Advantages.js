import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import Button from "@santiment-network/ui/Button"
import Title from "./Title"
import Subtitle from "./Subtitle"
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
      "Telegram, Twitter, Reddit and more",
      "Data from private trader chats",
      "Volume of social mentions",
      "Social mentions for crypto projects",
      "Comprehensive word clouds",
      "Top Social Gainers",
      "Sentiment score",
      "# of project's Twitter followers",
    ],
  },
  {
    type: "Financial",
    title: "1200+ projects",
    features: [
      "Price",
      "Volume",
      "Market Cap",
      "Open, Close, High, Low",
      "227 exchange wallets",
    ],
  },
  {
    type: "Developer activity",
    title: "4.5 TB of processed data",
    features: [
      "Github data for 970+ projects",
      "1.7 BN Github events",
      "New way of measuring Dev Activity",
      "Hourly updates",
      "Historical data starts from 2013",
    ],
  },
]

const Advantage = ({ className, advantage: { type, title, features } }) => (
  <div className={cx(styles.advantage, className)}>
    <h4 className={styles.advantage__type}>{type}</h4>
    <Title className={styles.advantage__title}>{title}</Title>
    <Features data={features} classes={styles} />
  </div>
)

export default () => (
  <section>
    <div className={styles.advantages}>
      <Advantage
        advantage={advantages[0]}
        className={styles.advantage_onchain}
      />
      <Advantage
        advantage={advantages[1]}
        className={styles.advantage_social}
      />
      <div className={styles.interest}>
        <Title small className={cx(styles.text, styles.interest__title)}>
          Sounds interesting?
        </Title>
        <Subtitle className={cx(styles.text, styles.interest__text)}>
          Create your custom solutions by using our API and comprehensive set of
          data
        </Subtitle>
        <Button
          as={Link}
          to="/account"
          variant="fill"
          accent="blue"
          className={styles.btn}
        >
          Try free now
        </Button>
      </div>
      <Advantage
        advantage={advantages[2]}
        className={styles.advantage_financial}
      />
      <Advantage
        advantage={advantages[3]}
        className={styles.advantage_developer}
      />
    </div>
  </section>
)
