import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import GoogleAnalytics from "react-ga"
import Intercom from "./Intercom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar/Sidebar"
import Notifications from "./Notifications/Notifications"
import CookiePopup from "./CookiePopup/CookiePopup"
import styles from "./layout.module.scss"
import Helmet from "react-helmet"

if (process.env.NODE_ENV === "production") {
  GoogleAnalytics.initialize("UA-100571693-14")
} else {
  GoogleAnalytics.initialize("UA-100571693-14", { testMode: true })
}

const envScript = process.env.NODE_ENV === "production" && (
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
}) => (
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
    <CookiePopup />
  </Intercom>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
