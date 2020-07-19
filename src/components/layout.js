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
  GoogleAnalytics.initialize('UA-100571693-14')
} else {
  GoogleAnalytics.initialize('UA-100571693-14', { testMode: true })
}

const envScript = process.env.NODE_ENV === 'production' && (
  <Helmet>
    <script src='/env.js' />
  </Helmet>
)

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]',{
        speed: 800,
        speedAsDuration: true,
        easing: 'easeInOutCubic',
        offset: () => 95,
    })
}

const Layout = ({ children, isShowSidebar, classes = {}, pageContext }) => (
    <Intercom>
      <Notifications>
        <div className={cx(styles.container, isShowSidebar && styles.withSidebar)}>
          {envScript}
          <Header className={styles.header} isShowSidebar={isShowSidebar} />
          {isShowSidebar ? (
            <>
            <Sidebar className={styles.sidebar} pageContext={pageContext} />
                <div className={styles.wrapper}>
                  <div className={styles.empty}/>
                  <div className={styles.content}>
                    <main className={cx(styles.main, classes.main)}>
                      {children}
                    </main>
                    <Footer className={styles.footer} isMinified={true} />
                  </div>
                </div>
                </>
              ) : (
              <>
              <main className={cx(styles.main, classes.main)}>
                  {children}
              </main>
              <Footer className={styles.footer} />
              </>
              )}
        </div>
      </Notifications>
      <CookiePopup />
    </Intercom>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
