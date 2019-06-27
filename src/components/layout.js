/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import StripeProviderSSR from './StripeProviderSSR'
import Intercom from './Intercom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Notifications from './Notifications/Notifications'
import styles from './layout.module.scss'
import Helmet from 'react-helmet'

const envScript = process.env.NODE_ENV === 'production' && (
  <Helmet>
    <script src='/env.js' />
  </Helmet>
)

const Layout = ({ children, isAccountPage, classes = {} }) => (
  <StripeProviderSSR>
    <Intercom>
      <Notifications>
        <div className={styles.container}>
          {envScript}
          <Header isAccountPage={isAccountPage} />
          <main className={cx(styles.main, classes.main)}>{children}</main>
          <Footer />
        </div>
      </Notifications>
    </Intercom>
  </StripeProviderSSR>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
