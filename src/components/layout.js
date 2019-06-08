/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./Footer/Footer.js"
import styles from "./layout.module.scss"

const Layout = ({ children, isAccountPage }) => (
  <div className={styles.container}>
    <Header isAccountPage={isAccountPage} />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
