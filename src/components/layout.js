import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import GoogleAnalytics from 'react-ga'
import Intercom from './Intercom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Notifications from './Notifications/Notifications'
import CookiePopup from './CookiePopup/CookiePopup'
import styles from './layout.module.scss'
import Helmet from 'react-helmet'

if (process.env.NODE_ENV === 'production') {
  GoogleAnalytics.initialize('UA-100571693-8')
} else {
  GoogleAnalytics.initialize('UA-100571693-8', { testMode: true })
}

const envScript = process.env.NODE_ENV === 'production' && (
  <Helmet>
    <script src='/env.js' />
  </Helmet>
)

const Layout = ({ children, isShowSidebar, classes = {} }) => (
    <Intercom>
      <Notifications>
        <div className={cx(styles.container, isShowSidebar && styles.withSidebar)}>
          {envScript}
          <Header className={styles.header} />
          {isShowSidebar && <Sidebar className={styles.sidebar} />}
            <main className={cx(styles.main, classes.main)}>
              {children}
              <Footer className={isShowSidebar && styles.footer} />
            </main>
        </div>
      </Notifications>
      <CookiePopup />
    </Intercom>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
