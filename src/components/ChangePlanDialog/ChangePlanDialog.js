import React from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import sharedStyles from '../Pricing/index.module.scss'
import { formatPrice } from '../../utils/plans'
import { getDateFormats } from '../../utils/dates'
import PLANS from '../Pricing/prices'

const ChangePlanDialog = ({
  subscription: {
    currentPeriodEnd,
    plan: { amount, name, interval },
  },
  title,
  price,
  billing,
}) => {
  const [oldPrice] = formatPrice(amount)
  const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
  const date = `${MMMM} ${DD}, ${YYYY}`

  return (
    <Dialog
      trigger={
        <Button fluid className={sharedStyles.link} border accent='blue'>
          Change to this plan
        </Button>
      }
      title='Plan change'
    >
      <Dialog.ScrollContent withPadding>
        Your current plan ({PLANS[name].title} {oldPrice}/{interval}) is active
        until {date}.
        <br />
        Are you sure you want to change to the {title} plan ({price}/{billing})
        on {date}?
      </Dialog.ScrollContent>
      <Dialog.Actions>
        <Dialog.Cancel>Cancel</Dialog.Cancel>
        <Dialog.Approve accent='blue'>Confirm change</Dialog.Approve>
      </Dialog.Actions>
    </Dialog>
  )
}

export default ChangePlanDialog
