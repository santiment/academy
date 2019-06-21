import React from 'react'
import cx from 'classnames'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from 'react-stripe-elements'
import vars from '@santiment-network/ui/variables.scss'
import CVCExplanation from './CVCExplanation'
import styles from './CheckoutForm.module.scss'

const style = {
  base: {
    fontSize: '14px',
    color: vars.mirage,
    fontFamily: 'Rubik, sans-serif',
    '::placeholder': {
      color: vars.casper,
    },
  },
  invalid: {
    color: vars.persimmon,
  },
}

const CheckoutForm = ({ stripe, plan }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Card number
        <CardNumberElement style={style} />
      </label>
      <div className={styles.bottom}>
        <label className={styles.label}>
          Expiration date
          <CardExpiryElement style={style} />
        </label>
        <label className={cx(styles.label, styles.label_cvc)}>
          CVC
          <CVCExplanation />
          <CardCVCElement style={style} />
        </label>
      </div>
    </div>
  )
}

export default CheckoutForm
