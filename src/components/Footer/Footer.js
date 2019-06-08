import React from "react"
import cx from "classnames"
import styles from "./Footer.module.scss"

const categories = [
  {
    title: "Products",
    links: [
      {
        children: "Social trends",
        href: "https://app.santiment.net/labs/trends",
      },
      { children: "Social movers", href: "" },
      {
        children: "Eth spent",
        href: "https://app.santiment.net/projects/ethereum",
      },
      {
        children: "Historical balance",
        href: "https://app.santiment.net/labs/balance",
      },
      { children: "Charts", href: "" },
      { children: "Sheets", href: "https://santiment.net/sansheets/" },
    ],
  },
  {
    title: "Company",
    links: [
      { children: "About us", href: "https://santiment.net/about-santiment/" },
      { children: "Pricing", href: "https://santiment.net/pricing/" },
      { children: "Customers", href: "" },
      { children: "Roadmap", href: "https://app.santiment.net/roadmap" },
      { children: "Team", href: "https://santiment.net/about-santiment/team/" },
      { children: "Jobs", href: "https://santiment.net/about-santiment/jobs/" },
      {
        children: "Contact us",
        href: "https://santiment.net/about-santiment/contact/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { children: "Getting started", href: "https://app.santiment.net/" },
      { children: "Docs", href: "" },
      { children: "API", href: "https://santiment.net/sanapi/" },
      { children: "Blog", href: "https://santiment.net/blog/" },
      { children: "Source code", href: "" },
      {
        children: "But SAN",
        href: "https://santiment.net/about-santiment/how-to-buy-san/",
      },
      { children: "Press", href: "" },
    ],
  },
  {
    title: "Social",
    links: [
      { children: "Discord", href: "https://discord.gg/6fMxk82" },
      { children: "Telegram", href: "https://t.me/santiment_network" },
      { children: "Twitter", href: "https://twitter.com/santimentfeed" },
      {
        children: "Youtube",
        href: "https://www.youtube.com/channel/UCSzP_Z3MrygWlbLMyrNmMkg",
      },
      { children: "LinkedIn", href: "" },
      { children: "Medium", href: "https://medium.com/santiment" },
      { children: "Reddit", href: "https://reddit.com/r/santiment" },
    ],
  },
]

const Footer = () => (
  <footer>
    <div className={styles.top}>
      <ul className={styles.categories}>
        {categories.map(({ title, links }) => (
          <li key={title} className={styles.category}>
            <h4 className={styles.category__title}>{title}</h4>
            {links.map((link, i) => (
              <a
                key={i}
                target="_blank"
                {...link}
                className={cx(styles.text, styles.category__item)}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.bottom}>
      <div>
        <a
          target="_blank"
          href="https://santiment.net/terms-conditions/"
          className={cx(styles.text, styles.link)}
        >
          Terms
        </a>
        <a target="_blank" href="" className={cx(styles.text, styles.link)}>
          Privacy
        </a>
        <a target="_blank" href="" className={cx(styles.text, styles.link)}>
          Security
        </a>
        <a target="_blank" href="" className={cx(styles.text, styles.link)}>
          Sitemap
        </a>
      </div>
      <div className={cx(styles.text, styles.rights)}>
        &copy; 2019 Santiment Inc. All rights reserved
      </div>
    </div>
  </footer>
)

export default Footer
