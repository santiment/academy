import React from 'react'
import { Link } from 'gatsby'
import Button from '@santiment-network/ui/Button'
import styles from './index.module.scss'

const PlanRestrictBtn = ({ sameAsUserPlan, isSubscriptionCanceled }) => {
  const props = sameAsUserPlan
    ? { children: 'Your current plan', disabled: true }
    : isSubscriptionCanceled
    ? { children: 'Subscription canceled', disabled: true }
    : { children: 'Upgrade now', as: Link, to: '/account' }
  return (
    <Button fluid accent='blue' border className={styles.link} {...props} />
  )
}

export default PlanRestrictBtn
