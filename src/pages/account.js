import React from "react"
import { navigate } from "gatsby"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import Layout from "../components/layout"
import SettingsAPIKeys from "../components/SettingsAPIKeys"
import GDPR from "../components/GDPR"

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

const GENERATE_APIKEY_MUTATION = gql`
  mutation {
    apikeysMutation: generateApikey {
      apikeys
    }
  }
`

const REVOKE_APIKEY_MUTATION = gql`
  mutation revokeApikey($apikey: String!) {
    apikeysMutation: revokeApikey(apikey: $apikey) {
      apikeys
    }
  }
`

const GDPR_MUTATION = gql`
  mutation updateTermsAndConditions($privacyPolicyAccepted: Boolean!) {
    updateTermsAndConditions(privacyPolicyAccepted: $privacyPolicyAccepted) {
      id
      privacyPolicyAccepted
    }
  }
`

const updateCache = (
  cache,
  {
    data: {
      apikeysMutation: { apikeys },
    },
  }
) => {
  const { currentUser } = cache.readQuery({ query: CURRENT_USER_QUERY })
  cache.writeQuery({
    query: CURRENT_USER_QUERY,
    data: { currentUser: { ...currentUser, apikeys } },
  })
}

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

        if (!data.currentUser.privacyPolicyAccepted) {
          return (
            <Mutation mutation={GDPR_MUTATION}>
              {(
                togglePrivacyPolicy,
                {
                  data: {
                    updateTermsAndConditions: { privacyPolicyAccepted } = {},
                  } = {},
                }
              ) => (
                <GDPR
                  togglePrivacyPolicy={togglePrivacyPolicy}
                  privacyPolicyAccepted={privacyPolicyAccepted}
                />
              )}
            </Mutation>
          )
        }

        return (
          <Mutation mutation={GENERATE_APIKEY_MUTATION} update={updateCache}>
            {(generateAPIKey, { data: apikeyData }) => (
              <Mutation mutation={REVOKE_APIKEY_MUTATION} update={updateCache}>
                {(revokeAPIKey, { data: apikeys }) => (
                  <SettingsAPIKeys
                    revokeAPIKey={revokeAPIKey}
                    generateAPIKey={generateAPIKey}
                    apikeys={data.currentUser.apikeys}
                  />
                )}
              </Mutation>
            )}
          </Mutation>
        )
      }}
    </Query>
  </Layout>
)
