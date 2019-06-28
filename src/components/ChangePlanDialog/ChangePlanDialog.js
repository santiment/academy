import React from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import sharedStyles from '../Pricing/index.module.scss'

const ChangePlanDialog = ({ subscription }) => {
  return (
    <Dialog
      trigger={
        <Button fluid className={sharedStyles.link} border accent='blue'>
          Change to this plan
        </Button>
      }
      title='Plan change'
    >
      test
    </Dialog>
  )
}

export default ChangePlanDialog
