/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import StripeProviderSSR from './StripeProviderSSR'
import Intercom from './Intercom'
import Footer from './Footer/Footer.js'
import styles from './layout.module.scss'
import Helmet from 'react-helmet'

const envScript = process.env.NODE_ENV === 'production' && (
  <Helmet>
    <script src='/env.js' />
  </Helmet>
)

const Layout = ({ children, isAccountPage }) => (
  <StripeProviderSSR>
  <Intercom>
    <div className={styles.container}>
      {envScript}
      <Header isAccountPage={isAccountPage} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </Intercom>
  </StripeProviderSSR>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
