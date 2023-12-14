import React from "react"
import cx from "classnames"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/Search/Search"
import Category from "../components/Category/Category"
import SocialBanner from "../components/Banner/SocialBanner"
import { REFERENCES, GUIDES } from "../docs/navigation"
import GettingStarted from "../components/GettingStarted/GettingStarted"
import styles from "./index.module.scss"

const IndexPage = ({ pageContext }) => (
  <Layout pageContext={pageContext} fixedHeader={false}>
    <SEO title="Crypto Academy: Learn How to Analyze Cryptocurrency Market" />
    <section className={styles.wrapper}>
      <Search />
      <div className="container">
        <GettingStarted className={styles.startBlock} />
        <h4 className={styles.title}>Guides</h4>
        <div className={styles.blocks}>
          {GUIDES.map(({ title, ...rest }) => (
            <Category key={title} title={title} {...rest} />
          ))}
        </div>
        <h4 className={styles.title}>References</h4>
        <div className={cx(styles.blocks, styles.wide)}>
          {REFERENCES.map(({ title, ...rest }) => (
            <Category
              wide
              key={title}
              title={title}
              {...rest}
              maxWidth="295px"
            />
          ))}
        </div>
        <SocialBanner />
      </div>
    </section>
  </Layout>
)

export default IndexPage
