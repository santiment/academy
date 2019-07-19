import React from 'react'
import { replace } from 'gatsby'
import { Query, Mutation } from 'react-apollo'
import { Link } from 'gatsby'
import Tabs from '@santiment-network/ui/Tabs'
import {
  CURRENT_USER_QUERY,
  GENERATE_APIKEY_MUTATION,
  REVOKE_APIKEY_MUTATION,
  GDPR_MUTATION,
} from '../gql/user'
import Layout from '../components/layout'
import SettingsAPIKeys from '../components/Settings/SettingsAPIKeys'
import SettingsSubscription from '../components/Settings/SettingsSubscription'
import SettingsBilling from '../components/Settings/SettingsBilling'
import SettingsLogout from '../components/Settings/SettingsLogout'
import GDPR from '../components/GDPR/GDPR'
import { getCurrentNeuroSubscription } from '../utils/plans'
import styles from './account.module.scss'

const updateCache = (
  cache,
  {
    data: {
      apikeysMutation: { apikeys },
    },
  },
) => {
  const { currentUser } = cache.readQuery({ query: CURRENT_USER_QUERY })
  cache.writeQuery({
    query: CURRENT_USER_QUERY,
    data: { currentUser: { ...currentUser, apikeys } },
  })
}

const tabs = [
  {
    index: 1,
    content: (
      <Link className={styles.tab} to='/account#api-keys'>
        API keys
      </Link>
    ),
  },
  {
    index: 2,
    content: (
      <Link className={styles.tab} to='/account#subscription'>
        Subscription
      </Link>
    ),
  },
  {
    index: 3,
    content: (
      <Link className={styles.tab} to='/account#billing'>
        Billing
      </Link>
    ),
  },
  {
    index: 4,
    content: (
      <Link className={styles.tab} to='/account#logout'>
        Logout
      </Link>
    ),
  },
]

export default () => (
  <Layout isAccountPage classes={styles}>
    <Query query={CURRENT_USER_QUERY}>
      {({ loading = true, data }) => {
        if (loading) {
          return null
        }

        if (data && !data.currentUser) {
          replace('/login/email')
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
                },
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
          <>
            <h1 className={styles.title}>Account Settings</h1>
            <Tabs
              className={styles.tabs}
              options={tabs}
              defaultSelectedIndex={1}
              selectedClassName={styles.tab_selected}
            />
            <Mutation mutation={GENERATE_APIKEY_MUTATION} update={updateCache}>
              {(generateAPIKey, { data: apikeyData }) => (
                <Mutation
                  mutation={REVOKE_APIKEY_MUTATION}
                  update={updateCache}
                >
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
            <SettingsSubscription
              subscription={getCurrentNeuroSubscription(data.currentUser)}
            />
            <SettingsBilling />
            <SettingsLogout />
          </>
        )
      }}
    </Query>
  </Layout>
)
