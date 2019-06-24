import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import { Link } from 'gatsby'
import Button from '@santiment-network/ui/Button'
import cx from 'classnames'
import PaymentDialog from '../PaymentDialog'
import styles from './PricingDetails.module.scss'
import prices from './prices'
import cardStyles from './index.module.scss'

const table = {
  columns: ['', 'Free', 'Basic', 'Pro', 'Premium', 'Corporate'],
  rows: [
    {
      group: 'Financial data',
      data: [
        { name: 'Open/High/Low/Close' },
        {
          name: 'Price-volume difference indicator',
        },
      ],
    },
    {
      group: 'On-chain data',
      data: [
        { name: 'Open/High/Low/Close' },
        {
          name: 'Network growth',
        },

        { name: 'Token age consumed' },
        { name: 'Average token age consumed' },
        { name: 'Exchange flow' },
        { name: 'Total ERC20 exchange funds flow' },
        { name: 'Transaction volume' },
        { name: 'Total circulation (beta)' },
        { name: 'Velocity of tokens (beta)' },
        { name: 'ETH gas used' },
        { name: 'Distribution between mining pools' },
        { name: 'Top holders percent of total supply' },
        { name: 'Percent of total supply on exchanges' },
        { name: 'Realized value', checks: [false, false, true, true, true] },
        { name: 'MVRV ratio', checks: [false, false, true, true, true] },
        { name: 'NVT', checks: [false, false, true, true, true] },
        {
          name: 'Daily active deposits',
          checks: [false, false, true, true, true],
        },
      ],
    },
    {
      group: 'Social data',
      data: [
        { name: 'Dev activity' },
        { name: 'Topic search' },
        { name: 'Relative social dominance' },
        { name: 'Total social volume' },
      ],
    },
  ],
}

const all = [true, true, true, true, true]

export default ({ isLoggedIn }) => (
  <table className={styles.table}>
    <tbody>
      <tr className={styles.headers}>
        {table.columns.map((column, y) => (
          <th className={styles.head} key={y}>
            {column}
          </th>
        ))}
      </tr>
      {table.rows.map((row, i) => (
        <React.Fragment key={i}>
          <tr>
            <td className={cx(styles.group, styles.cell)}>{row.group}</td>
            <td className={styles.cell} />
            <td className={styles.cell} />
            <td className={styles.cell} />
            <td className={styles.cell} />
            <td className={styles.cell} />
          </tr>
          {row.data.map(({ name, checks }) => (
            <tr key={name}>
              <td className={cx(styles.cell, styles.feature__title)}>{name}</td>
              {(checks || all).map((check, y) => (
                <td key={y} className={cx(styles.cell, styles.feature__cell)}>
                  {check && (
                    <Icon
                      className={styles.feature__check}
                      type='checkmark-round'
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </React.Fragment>
      ))}

      <tr>
        <td />
        <td className={styles.link}>
          <Button
            as={Link}
            to='/account'
            className={cardStyles.link}
            border
            fluid
            accent='blue'
          >
            Current plan
          </Button>
        </td>
        <td className={styles.link}>
          <PaymentDialog
            label='Upgrade now'
            isLoggedIn={isLoggedIn}
            price={prices.ESSENTIAL.price}
            title={prices.ESSENTIAL.title}
          />
        </td>
        <td className={styles.link}>
          <PaymentDialog
            label='Upgrade now'
            isLoggedIn={isLoggedIn}
            price={prices.PRO.price}
            title={prices.PRO.title}
          />
        </td>
        <td className={styles.link}>
          <PaymentDialog
            label='Upgrade now'
            isLoggedIn={isLoggedIn}
            price={prices.PREMIUM.price}
            title={prices.PREMIUM.title}
          />
        </td>
        <td className={styles.link}>
          <PaymentDialog label='Contact us' />
        </td>
      </tr>
    </tbody>
  </table>
)
