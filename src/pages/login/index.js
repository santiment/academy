import React from "react"
import { Link, replace } from "gatsby"
import cx from "classnames"
import { Query } from "react-apollo"
import Icon from "@santiment-network/ui/Icon"
import Panel from "@santiment-network/ui/Panel/Panel"
import Layout from "../../components/layout"
import { CURRENT_USER_QUERY } from "../account"
import styles from "./index.module.scss"

export default () => (
  <Layout>
    <Query query={CURRENT_USER_QUERY} fetchPolicy="network-only">
      {({ loading = true, data }) => {
        if (!loading && data && data.currentUser) {
          replace("/account")
          return null
        }
        return (
          <Panel className={styles.wrapper}>
            <h2 className={styles.title}>Log in your account with</h2>
            <div className={styles.options}>
              <Link
                to="/login/email"
                className={cx(styles.btn, styles.btn_email)}
              >
                <Icon type="envelope" className={styles.btn__icon} />
                Email
              </Link>
            </div>
          </Panel>
        )
      }}
    </Query>
  </Layout>
)
