import React from 'react'
import cx from 'classnames'
import Label from '@santiment-network/ui/Label'
import { Query } from 'react-apollo'
import Settings from './Settings'
import { USER_PAYMENTS } from '../../gql/user'
import { getDateFormats } from '../../utils/dates'
import { formatPrice } from '../../utils/plans'
import styles from './SettingsBilling.module.scss'

const BillingTable = ({ payments }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.head}>
          <th className={cx(styles.cell, styles.cell_head)}>Date</th>
          <th className={cx(styles.cell, styles.cell_head)}>Description</th>
          <th className={cx(styles.cell, styles.cell_head)}>Amount</th>
          <th className={cx(styles.cell, styles.cell_head)} />
        </tr>
        {payments.map(({ amount, createdAt, receiptUrl, description }) => {
          const { MMMM, DD, YYYY } = getDateFormats(new Date(createdAt))
          const [price] = formatPrice(amount)
          return (
            <tr key={createdAt} className={styles.row}>
              <td className={styles.cell}>
                {MMMM} {DD}, {YYYY}
              </td>
              <td className={styles.cell}>{description}</td>
              <td className={styles.cell}>{price}</td>
              <td className={cx(styles.cell, styles.cell_invoice)}>
                <a href={receiptUrl} target='_blank' rel='noopener noreferrer'>
                  Invoice
                </a>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const SettingsBilling = () => {
  return (
    <Query query={USER_PAYMENTS}>
      {({ data: { payments = [] } }) => {
        return (
          payments.length > 0 && (
            <Settings id='billing' header='Billing'>
              <Settings.Row className={styles.row}>
                <div>
                  Billing history
                  <br />
                  <Label accent='waterloo'>
                    History for all payments made on your SANbase account
                  </Label>
                </div>
                <BillingTable payments={payments} />
              </Settings.Row>
            </Settings>
          )
        )
      }}
    </Query>
  )
}

export default SettingsBilling
