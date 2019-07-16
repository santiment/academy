import React from 'react'
import Label from '@santiment-network/ui/Label'
import Button from '@santiment-network/ui/Button'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Settings from './Settings'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './SettingsAPIKeys.module.scss'

export const LOGOUT_MUTATION = gql`
  mutation logout {
    logout {
      success
    }
  }
`

function updateCache(cache) {
  cache.writeQuery({
    query: CURRENT_USER_QUERY,
    data: { currentUser: null },
  })
}

const SettingsAPIKeys = ({ apikeys = [], generateAPIKey, revokeAPIKey }) => (
  <Settings id='logout' header='Logout'>
    <Settings.Row>
      <div className={styles.setting__left}>
        <Label className={styles.setting__description} accent='waterloo'>
          In order to logout press the "Logout" button
        </Label>
      </div>
      <Mutation mutation={LOGOUT_MUTATION} update={updateCache}>
        {(logout, { loading }) => (
          <Button
            variant='fill'
            accent='blue'
            isLoading={loading}
            onClick={logout}
          >
            Logout
          </Button>
        )}
      </Mutation>
    </Settings.Row>
  </Settings>
)

export default SettingsAPIKeys
