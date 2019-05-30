import React from "react"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import Title from "../Title"
import Features from "../Features"
import styles from "./index.module.scss"

const prices = [
  {
    title: "Free",
    desc: "For individuals just getting started with crypto",
    price: "$0",
    priceType: "",
    discount: "Free forever",
    link: "Your current plan",
    features: [
      "Historical data access to last 3 months",
      `20 API calls / minute
5k API calls / month`,
      <>
        Standard metrics <span className={styles.ast}>*</span>
      </>,

      <>
        Attribution required <span className={styles.ast}>**</span>
      </>,
    ],
  },
  {
    title: "Basic",
    desc: "For traders, developers, investors and side projects",
    price: "$119",
    priceType: "/mo",
    discount: "20% off with 200 SAN",
    link: "Upgrade now",
    features: [
      "Historical data access to last 6 months",
      `60 API calls / minute
      10k API calls / month`,
      <>
        Standard metrics <span className={styles.ast}>*</span>
      </>,
      "No attribution",
    ],
  },
  {
    title: "Pro",
    desc: "For traders, developers, investors and side projects",
    price: "$359",
    priceType: "/mo",
    discount: "20% off with 1000 SAN",
    link: "Upgrade now",
    features: [
      "Historical data access to last 18 months",
      `120 API calls / minute
      150k API calls / month`,
      <>
        Advanced metrics <span className={styles.ast}>*</span>
      </>,
      "No attribution",
    ],
  },
  {
    title: "Premium",
    desc: "For traders, developers, investors and side projects",
    price: "$719",
    priceType: "/mo",
    discount: "20% off with 1000 SAN",
    link: "Upgrade now",
    features: [
      "Unlimited historical data access",
      `180 API calls / min
500k API calls / month`,
      <>
        Advanced metrics <span className={styles.ast}>*</span>
      </>,
      "No attribution",
    ],
  },
  {
    title: "Custom",
    desc: "For organizations that need advanced data and support",
    price: "Custom",
    priceType: "",
    discount: "Based on your needs",
    link: "Contact sales",
    features: [
      "Unlimited historical data access",
      `Custom development
      Custom reports`,
      <>
        Advanced metrics <span className={styles.ast}>*</span>
      </>,
      "White-label options",
    ],
  },
]

export default () => {
  return (
    <section id="pricing">
      <Title className={styles.title}>
        Choose the right plan
        <br />
        for your aims
      </Title>
      <div className={styles.cards}>
        {prices.map(card => (
          <div className={styles.card} key={card.title}>
            <h3 className={styles.title}>{card.title}</h3>
            <div className={styles.desc} />
            <div className={styles.price}>
              {card.price}
              <span className={styles.price__type}>{card.priceType}</span>
            </div>
            <div className={styles.discount}>{card.discount}</div>
            <Link className={styles.link} to="/">
              {card.link}
            </Link>
            <Features data={card.features} classes={styles} />
          </div>
        ))}
      </div>
      <label htmlFor="detailed-pricing" className={styles.more}>
        <Icon type="plus-round-small" />
        See full feature table
      </label>
      <input
        id="detailed-pricing"
        type="checkbox"
        className={styles.checkbox}
      />
      <div className={styles.detailed}>Detailed pricing</div>
    </section>
  )
}
