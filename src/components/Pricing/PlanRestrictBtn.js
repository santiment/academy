import React from 'react'
import { Link } from 'gatsby'
import Button from '@santiment-network/ui/Button'
import styles from './index.module.scss'

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: 'Plan Card',
    text: 'Upgrade now',
  })
}

const PlanRestrictBtn = ({ sameAsUserPlan, isSubscriptionCanceled }) => {
  const props = sameAsUserPlan
    ? { children: 'Your current plan', disabled: true }
    : isSubscriptionCanceled
    ? { children: 'Upgrade now', as: Link, to: '/account#subscription?renew' }
    : {
        children: 'Upgrade now',
        as: Link,
        to: '/account',
        onClick: onGetAccessClick,
      }
  return (
    <Button fluid accent='blue' border className={styles.link} {...props} />
  )
}

export default PlanRestrictBtn
