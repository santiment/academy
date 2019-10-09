import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Socials from './../components/Markdown/sources/social_volume_metrics'
import DAA from './../components/Markdown/sources/daily_active_addresses'
import API from './../components/Markdown/sources/api_reference'
import SD from './../components/Markdown/sources/social-data'
import PLANS from './../components/Markdown/sources/access-plans'
import MCA from './../components/Markdown/sources/mean-coin-age'
import STCP from './../components/Markdown/sources/short-term-coin-paths'
import Markdown from './../components/Markdown/Markdown'
import styles from './index.module.scss'

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Academy - Santiment Technical Documentation" />
    <section className={styles.wrapper}>
      {/* <Markdown markdown={Socials} /> */}
      {/* <Markdown markdown={DAA} /> */}
      {/* <Markdown markdown={API} /> */}
      {/* <Markdown markdown={SD} /> */}
      {/* <Markdown markdown={PLANS} /> */}
      <Markdown markdown={MCA} />
      {/* <Markdown markdown={STCP} /> */}
    </section>
  </Layout>
)

export default injectIntl(IndexPage)
