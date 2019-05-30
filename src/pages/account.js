import React from "react"
import { navigate } from "gatsby"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Layout from "../components/layout"
import SettingsAPIKeys from "../components/SettingsAPIKeys"

export const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      id
      email
      username
      privacyPolicyAccepted
      apikeys
    }
  }
`

export default () => (
  <Layout>
    <Query query={CURRENT_USER_QUERY}>
      {({ loading = true, data }) => {
        if (loading) {
          return "loading..."
        }
        if (data && !data.currentUser) {
          navigate("/login")
          return null
        }
        return <SettingsAPIKeys {...data.currentUser} />
      }}
    </Query>
  </Layout>
)
