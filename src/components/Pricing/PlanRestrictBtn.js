import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Button from '@santiment-network/ui/Button'
import styles from './index.module.scss'

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: 'Plan Card',
    text: 'Upgrade now',
  })
}

const PlanRestrictBtn = ({ intl, sameAsUserPlan, isSubscriptionCanceled }) => {
  const props = sameAsUserPlan
    ? { children: 'your_plan', disabled: true }
    : isSubscriptionCanceled
    ? { children: 'upgrade_now', as: Link, to: '/account#subscription?renew' }
    : {
        children: 'upgrade_now',
        as: Link,
        to: '/account',
        onClick: onGetAccessClick,
      }
  const { children, ...rest } = props
  return (
    <Button fluid accent='blue' border className={styles.link} {...rest}>
      {intl.formatMessage({ id: `cta.${children}` })}
    </Button>
  )
}

export default injectIntl(PlanRestrictBtn)
