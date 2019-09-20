import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
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
    children: intl =>
      intl.formatMessage({
        id: 'cta.sign_up',
      }),
    onClick: () => {
      window.gtag('event', 'login_action_call', {
        location: 'Navbar',
        text: 'Sign up',
      })
    },
  },
  true: { className: styles.account, children: <Icon type='profile' /> },
}

const AccountBtn = ({ intl, isAccountPage }) => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } = {} }) => {
        const { children, ...props } = btnProps[Boolean(currentUser)]
        return (
          <Button
            as={Link}
            to='/account'
            variant='flat'
            isActive={isAccountPage}
            {...props}
          >
            {typeof children === 'function' ? children(intl) : children}
          </Button>
        )
      }}
    </Query>
  )
}

export default injectIntl(AccountBtn)
