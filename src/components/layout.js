/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import styles from "./layout.module.scss"

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
