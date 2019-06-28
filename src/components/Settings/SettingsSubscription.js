import React from 'react'
import Label from '@santiment-network/ui/Label'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import Panel from '@santiment-network/ui/Panel/Panel'
import PricingTable from '../Pricing/PricingTable'
import Settings from './Settings'
import PLANS from '../Pricing/prices'
import { formatPrice } from '../../utils/plans'
import { getDateFormats } from '../../utils/dates'
import styles from './SettingsSubscription.module.scss'

const PERIOD_END_ACTION = {
  false: 'renew',
  true: 'cancel',
}

const PlanText = ({ subscription }) => {
  if (subscription) {
    const {
      currentPeriodEnd,
      cancelAtPeriodEnd,
      plan: { amount, name, interval },
    } = subscription

    const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
    const [price] = formatPrice(amount, name)

    return (
      <>
        <div className={styles.title}>{PLANS[name].title} Plan</div>
        <div className={styles.desc}>
          {price} per {interval}.{' '}
          <Button accent='blue' className={styles.btn}>
            Change billing period
          </Button>
        </div>
        <div className={styles.desc}>
          Will automatically {PERIOD_END_ACTION[cancelAtPeriodEnd]} on {MMMM}{' '}
          {DD}, {YYYY}
        </div>
      </>
    )
  }

  return (
    <>
      <div className={styles.title}>Free Plan</div>
      <div className={styles.desc}>
        You can see data{' '}
        <Button accent='blue' className={styles.btn}>
          generated 24h ago.
        </Button>
      </div>
      <div className={styles.desc}>Upgrade your plan to get more abilities</div>
    </>
  )
}

const SettingsAPIKeys = ({ subscription }) => {
  return (
    <Settings id='subscription' header='Subscription'>
      <Settings.Row>
        <Panel className={styles.plan}>
          <div>
            <PlanText subscription={subscription} />
          </div>
          <Button accent='blue' variant='fill'>
            {subscription ? 'Change' : 'Upgrade'} plan
          </Button>
        </Panel>
      </Settings.Row>
      {subscription && (
        <Settings.Row>
          <div>
            <div>Cancel subscription</div>

            <Label accent='waterloo'>
              If you cancel your subscription, you will not be able to see the
              most recent data
            </Label>
          </div>
          <Dialog
            title='Subscription cancelling'
            trigger={<Button accent='blue'>Cancel subscription</Button>}
          >
            <Dialog.ScrollContent withPadding>123</Dialog.ScrollContent>
            <Dialog.Actions>
              <Dialog.Cancel>Cancel</Dialog.Cancel>
              <Dialog.Approve accent='blue'>
                Confirm cancellation
              </Dialog.Approve>
            </Dialog.Actions>
          </Dialog>
        </Settings.Row>
      )}
    </Settings>
  )
}

export default SettingsAPIKeys
