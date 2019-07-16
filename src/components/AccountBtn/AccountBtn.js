import React from 'react'
import { Link } from 'gatsby'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './AccountBtn.module.scss'

const btnProps = {
  false: {
    accent: 'blue',
    border: true,
    className: styles.login,
    children: 'Sign up',
  },
  true: { className: styles.account, children: <Icon type='profile' /> },
}

const AccountBtn = ({ isAccountPage }) => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } = {} }) => {
        return (
          <Button
            as={Link}
            to='/account'
            variant='flat'
            isActive={isAccountPage}
            {...btnProps[Boolean(currentUser)]}
          />
        )
      }}
    </Query>
  )
}

export default AccountBtn
