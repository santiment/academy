import React from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../gql/user'

const updateIntercom = () => {
  if (typeof window !== 'undefined') {
    window.Intercom('update')
  }
}

const Intercom = ({ children }) => {
  updateIntercom()
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (!loading && typeof window !== undefined) {
          const { email, username: name } = data.currentUser || {}
          window.Intercom('boot', {
            app_id: 'cyjjko9u',
            email,
            name,
          })
        }

        return children
      }}
    </Query>
  )
}

export default Intercom
