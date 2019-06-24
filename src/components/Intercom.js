import React from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../pages/account'

const updateIntercom = () => {
  if (typeof window !== 'undefined') {
    window.Intercom('update')
  }
}

const Intercom = ({ children }) => {
  updateIntercom()
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser }, loading }) => {
        if (!loading) {
          const { email, username: name } = currentUser || {}
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
