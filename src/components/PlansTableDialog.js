import React, { useState } from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import PricingTable from './Pricing/PricingTable'
import styles from './PlansTableDialog.module.scss'

const PlanDialog = ({ subscription }) => {
  const [opened, setOpened] = useState(false)

  function closeDialog() {
    setOpened(false)
  }

  function openDialog() {
    setOpened(true)
  }

  return (
    <Dialog
      open={opened}
      title='Existing plans'
      classes={styles}
      onClose={closeDialog}
      trigger={
        <Button accent='blue' variant='fill' onClick={openDialog}>
          {subscription ? 'Change' : 'Upgrade'} plan
        </Button>
      }
    >
      <Dialog.ScrollContent>
        <PricingTable classes={styles} onDialogClose={closeDialog} />
      </Dialog.ScrollContent>
    </Dialog>
  )
}

export default PlanDialog
