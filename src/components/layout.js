import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'
import cx from 'classnames'
import GoogleAnalytics from 'react-ga'
import Helmet from 'react-helmet'
import { startResponsiveController } from 'webkit/responsive'
import { mapSizesToProps } from '../utils/sizes'
import CookiesPopup from 'webkit/ui/CookiesPopup.svelte'
import Dialogs from 'webkit/ui/Dialog/Dialogs.svelte'
import Intercom from './Intercom'
import IntercomWidget from '../components/IntercomWidget'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Notifications from './Notifications/Notifications'
import styles from './layout.module.scss'
import 'webkit/styles/main.css'

if (typeof window !== 'undefined') {
  startResponsiveController()
}

if (process.env.NODE_ENV === 'production') {
  GoogleAnalytics.initialize('UA-100571693-14')
  GoogleAnalytics.initialize('G-H53MB0V33X')
} else {
  GoogleAnalytics.initialize('UA-100571693-14', { testMode: true })
}

const envScript = process.env.NODE_ENV === 'production' && (
  <Helmet>
    <script src="/env.js" />
  </Helmet>
)

const Layout = ({
  children,
  isShowSidebar,
  fixedHeader,
  classes = {},
  pageContext,
  isDesktop,
}) => {
  useEffect(() => {
    const cookies = new CookiesPopup({ target: document.body })
    const dialogs = new Dialogs({ target: document.body })
    return () => {
      cookies.$destroy()
      dialogs.$destroy()
    }
  }, [])

  return (
    <Intercom>
      <Notifications>
        <div
          className={cx(styles.container, isShowSidebar && styles.withSidebar)}
        >
          {envScript}
          <Header fixedHeader={fixedHeader} isShowSidebar={isShowSidebar} />
          {isShowSidebar ? (
            <>
              <Sidebar pageContext={pageContext} />
              <div className={styles.wrapper}>
                <div className={styles.empty} />
                <div className={styles.content}>
                  <main className={cx(styles.main, classes.main)}>
                    {children}
                  </main>
                  <Footer isMinified={true} />
                </div>
              </div>
            </>
          ) : (
            <>
              <main className={cx(styles.main, classes.main)}>{children}</main>
              <Footer />
            </>
          )}
        </div>
      </Notifications>
      {isShowSidebar && <IntercomWidget isDesktop={isDesktop} />}
    </Intercom>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withSizes(mapSizesToProps)(Layout)
