import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../pages/account'

const updateIntercom = () => {
  /* if (process.env.NODE_ENV === 'production') { */
  window.Intercom('update')
  /* } */
}

const Intercom = ({ children }) => {
  updateIntercom()
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser = {} }, loading }) => {
        if (!loading) {
          window.Intercom('boot', {
            app_id: 'cyjjko9u',
            email: currentUser.email,
            name: currentUser.username,
          })
        }

        return children
      }}
    </Query>
  )
}

export default Intercom
