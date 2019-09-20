import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Input from '@santiment-network/ui/Input'
import { CardElement } from 'react-stripe-elements'
import vars from '@santiment-network/ui/variables.scss'
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
  return (
    <>
      <label className={cx(styles.label, styles.label_card)}>
        {intl.formatMessage({
          id: 'payment.card_details',
        })}
        <CardElement style={style} />
      </label>

      <label className={styles.label}>
        {intl.formatMessage({
          id: 'payment.bill_address',
        })}
      </label>
      <Input
        className={styles.input}
        placeholder={intl.formatMessage({
          id: 'payment.full_name',
        })}
        required
        name='name'
      />
      <div className={styles.row}>
        <Input
          className={styles.input}
          placeholder={intl.formatMessage({
            id: 'payment.country',
          })}
          required
        />
        <Input
          className={cx(styles.input, styles.input_right)}
          placeholder={intl.formatMessage({
            id: 'payment.city',
          })}
          required
          name='address_city'
        />
      </div>
      <div className={styles.row}>
        <Input
          className={styles.input}
          placeholder={intl.formatMessage({
            id: 'payment.state',
          })}
          required
          name='address_state'
        />
        <Input
          className={cx(styles.input, styles.input_right)}
          placeholder={intl.formatMessage({
            id: 'payment.street',
          })}
          required
          name='address_line1'
        />
      </div>
      <Input
        className={styles.input}
        placeholder={intl.formatMessage({
          id: 'payment.phone',
        })}
        type='tel'
        required
      />
    </>
  )
}

export default injectIntl(CheckoutForm)
