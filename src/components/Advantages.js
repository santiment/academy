import React from "react"
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
      "Volume of social mentions",
      "Comprehensive word clouds",
      "Top Social Gainers",
      "Dev Activity measurement",
      "1.7 BN Github events",
      "Hourly updates",
      "Historical data starts from 2009",
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
      <div className={styles.left}>
        <div className={styles.left__top}>
          <Advantage
            advantage={advantages[0]}
            className={styles.advantage_onchain}
          />
          <Advantage advantage={advantages[1]} />
        </div>
        <div className={styles.left__bottom}>
          <Title small className={styles.text}>
            Sounds interesting?
          </Title>
          <Subtitle className={cx(styles.text, styles.text_desc)}>
            Create your custom solutions by using our API and comprehensive set
            of data
          </Subtitle>
          <Button className={styles.btn}>Try free now</Button>
        </div>
      </div>
      <div className={styles.right}>
        <Advantage
          advantage={advantages[2]}
          className={styles.advantage_financial}
        />
        <Advantage advantage={advantages[3]} />
      </div>
    </div>
  </section>
)
