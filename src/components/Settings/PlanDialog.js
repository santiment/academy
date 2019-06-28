import React from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import PricingTable from '../Pricing/PricingTable'

const PlanDialog = ({ subscription }) => {
  return (
    <Dialog
      title='Existing plans'
      trigger={
        <Button accent='blue' variant='fill'>
          {subscription ? 'Change' : 'Upgrade'} plan
        </Button>
      }
    >
      <Dialog.ScrollContent>
        <PricingTable />
      </Dialog.ScrollContent>
    </Dialog>
  )
}

export default PlanDialog
