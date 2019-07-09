import React from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import PricingTable from './Pricing/PricingTable'
import styles from './PlansTableDialog.module.scss'

const PlanDialog = ({ subscription }) => {
  return (
    <Dialog
      title='Existing plans'
      classes={styles}
      trigger={
        <Button accent='blue' variant='fill'>
          {subscription ? 'Change' : 'Upgrade'} plan
        </Button>
      }
    >
      <Dialog.ScrollContent>
        <PricingTable classes={styles} />
      </Dialog.ScrollContent>
    </Dialog>
  )
}

export default PlanDialog
