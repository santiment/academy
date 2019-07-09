import React from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import PLANS from '../Pricing/prices'
import styles from './MissYouScreen.module.scss'

const MissYouScreen = ({ closeDialog, nextScreen, name }) => {
  return (
    <Dialog.ScrollContent className={styles.wrapper}>
      <h2 className={styles.title}>We will miss you</h2>
      <p className={styles.text}>
        Are you sure you want to cancel your {PLANS[name].title} plan
        <br />
        and downgrage to a free version of Neuro?
      </p>
      <Button
        variant='fill'
        accent='blue'
        onClick={closeDialog}
        className={styles.btn}
      >
        Keep using Pro plan
      </Button>
      <br />
      <Button accent='blue' onClick={nextScreen}>
        Continue canceling
      </Button>
    </Dialog.ScrollContent>
  )
}

export default MissYouScreen
