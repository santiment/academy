import React, { useState } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Input from '@santiment-network/ui/Input'
import Icon from '@santiment-network/ui/Icon'
import { CardElement } from 'react-stripe-elements'
import vars from '@santiment-network/ui/variables.scss'
import { tr, trStr } from '../../utils/translate'
import visaSrc from './visa.png'
import mastercardSrc from './mastercard.png'
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

const CheckoutForm = ({ intl, stripe, plan }) => {
  const [visible, setVisible] = useState()

  function onToggleClick() {
    setVisible(!visible)
  }

  return (
    <>
      <div className={styles.top}>
        Card information
        <div className={styles.top__cards}>
          <img alt='visa' src={visaSrc} className={styles.top__visa} />
          <img alt='mastercard' src={mastercardSrc} />
        </div>
      </div>
      <div className={styles.form}>
        <label className={cx(styles.label, styles.label_card)}>
          {tr('payment.full_name')}
          <Input
            className={styles.input}
            placeholder='John Doe'
            required
            name='name'
          />
        </label>

        <label className={cx(styles.label, styles.label_card)}>
          {tr('payment.card_details')}
          <CardElement style={style} />
        </label>

        <label className={cx(styles.label, styles.label_card)}>
          {tr('payment.country')}
          <Input className={styles.input} placeholder='USA' required />
        </label>
      </div>

      <div className={styles.toggle} onClick={onToggleClick}>
        <Icon type={visible ? 'subtract-round' : 'plus-round-small'} /> Add{' '}
        {tr('payment.bill_address')}
      </div>
      {visible && (
        <div className={styles.form}>
          <label className={cx(styles.label, styles.label_card)}>
            {tr('payment.street')}
            <Input
              className={styles.input}
              placeholder='670 Glen Creek St.'
              name='address_line1'
            />
          </label>
          <label className={cx(styles.label, styles.label_card)}>
            {tr('payment.city')}
            <Input
              className={styles.input}
              placeholder='Seattle'
              name='address_city'
            />
          </label>
          <label className={cx(styles.label, styles.label_card)}>
            {tr('payment.state')}
            <Input
              className={styles.input}
              placeholder='Washington'
              name='address_state'
            />
          </label>
        </div>
      )}
    </>
  )
}

export default injectIntl(CheckoutForm)
