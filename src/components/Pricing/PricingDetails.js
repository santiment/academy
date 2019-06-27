import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import { Link } from 'gatsby'
import Button from '@santiment-network/ui/Button'
import cx from 'classnames'
import styles from './PricingDetails.module.scss'
import PLANS from './prices'
import DETAILS from './details'
import { formatPrice } from './utils'
import cardStyles from './index.module.scss'

const PlanRestrictBtn = ({ sameAsUserPlan }) => {
  const props = sameAsUserPlan
    ? { children: 'Your current plan', disabled: true }
    : { children: 'Upgrade now', as: Link, to: '/account' }
  return (
    <Button fluid accent='blue' border className={cardStyles.link} {...props} />
  )
}

const all = [true, true, true, true, true]

export default ({ isLoggedIn, billing, userPlan, plans }) => (
  <table className={styles.table}>
    <tbody>
      <tr className={styles.headers}>
        {DETAILS.columns.map((column, y) => (
          <th className={styles.head} key={y}>
            {column}
          </th>
        ))}
      </tr>
      {DETAILS.rows.map((row, i) => (
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
        {plans
          .filter(
            ({ interval, name }) => interval === billing || name === 'FREE',
          )
          .map(({ id, name, amount }) => {
            const plan = PLANS[name]
            const sameAsUserPlan = id === userPlan
            const [price] = formatPrice(amount)

            return (
              <td key={id} className={styles.link}>
                {!isLoggedIn || sameAsUserPlan ? (
                  <PlanRestrictBtn sameAsUserPlan={sameAsUserPlan} />
                ) : (
                  <plan.Component
                    title={plan.title}
                    label={plan.link}
                    price={price}
                    planId={+id}
                    billing={billing}
                  />
                )}
              </td>
            )
          })}
      </tr>
    </tbody>
  </table>
)
