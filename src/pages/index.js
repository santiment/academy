import React from "react"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from "../components/Pricing"
import WhySantiment from "../components/WhySantiment"
import UseCases from "../components/UseCases"
import FAQ from "../components/FAQ"
import ReadyToStart from "../components/ReadyToStart"
import styles from "./index.module.scss"

const code = `#keyword[import] san

daa #keyword[=] san.get(
\t"daily_active_addresses/santiment",
\t#keyword[from_date=]"2018-06-01",
\t#keyword[to_date=]"2018-06-05",
\t#keyword[interval=]"1d"
)

prices #keyword[=] san.get(
\t"prices/santiment",
\t#keyword[from_date=]"2018-06-01",
\t#keyword[to_date=]"2018-06-05",
\t#keyword[interval=]"1d"
)`

const lines = code.split(`\n`).map((line, i) => {
  const formatted = line
    .replace(/#keyword\[(.*)\]/g, '<span class="code__keyword">$1</span>')
    .replace(/\t/g, '<span class="code__tab"></span>')

  return `<span class="code__number">${i + 1}</span>${formatted}`
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>
          Comprehensive
          <span className={styles.title__mark}>crypto API</span>
        </h1>
        <h2 className={styles.desc}>
          Get 100% custom-built and unique terabytes of processed on-chain,
          social, github and fundamental data sets
        </h2>
        <Link to="/" className={styles.access}>
          Get access
        </Link>
        <Link to="/" className={styles.doc}>
          Documentation <Icon type="arrow-right" className={styles.doc__icon} />
        </Link>
      </div>

      <div className={styles.code}>
        <div className={styles.code__header}>
          <div className={styles.code__btn} />
          <div className={styles.code__btn} />
          <div className={styles.code__btn} />
        </div>
        <ol className={styles.source}>
          {lines.map((line, i) => (
            <li
              className={styles.source__line}
              key={i}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </ol>
      </div>
    </section>
    <WhySantiment />
    <UseCases />
    <Pricing />
    <FAQ />
    <ReadyToStart />
  </Layout>
)

export default IndexPage
