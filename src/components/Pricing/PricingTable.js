import React from 'react'
import { Query } from 'react-apollo'
import cx from 'classnames'
import RadioBtns from '@santiment-network/ui/RadioBtns'
import Label from '@santiment-network/ui/Label'
import { CURRENT_USER_QUERY } from '../../gql/user'
import Features from '../Features/Features'
import PricingDetailsToggle from './PricingDetailsToggle.js'
import PlanRestrictBtn from './PlanRestrictBtn'
import { PLANS_QUERY } from '../../gql/plans'
import PLANS from './prices'
import {
  findNeuroPlan,
  getCurrentNeuroSubscription,
  formatPrice,
} from '../../utils/plans'
import styles from './index.module.scss'

const toggleCardDetails = ({ currentTarget }) =>
  currentTarget.classList.toggle(styles.card_opened)

const billingOptions = [
  {
    index: 'year',
    content: (
      <>
        Bill yearly <Label accent='waterloo'>(save 10%)</Label>
      </>
    ),
  },
  { index: 'month', content: 'Bill monthly' },
]

export default ({ classes = {}, onDialogClose }) => {
  const [billing, setBilling] = React.useState('year')
  return (
    <>
      <div className={cx(styles.billing, classes.billing)}>
        <RadioBtns
          options={billingOptions}
          defaultSelectedIndex='year'
          labelOnRight
          onSelect={res => setBilling(res)}
          className={styles.bill}
        />
      </div>
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { currentUser } }) => {
          const subscription = getCurrentNeuroSubscription(currentUser)
          const userPlan = subscription && subscription.plan.id
          const isSubscriptionCanceled =
            subscription && subscription.cancelAtPeriodEnd
          return (
            <Query query={PLANS_QUERY}>
              {({ data: { productsWithPlans = [] } }) => {
                const neuro = productsWithPlans.find(findNeuroPlan)
                if (!neuro) {
                  return null
                }

                return (
                  <>
                    <div className={styles.cards}>
                      {neuro.plans
                        .filter(
                          ({ name, interval }) =>
                            interval === billing || name === 'FREE',
                        )
                        .map(({ id, name, amount }) => {
                          const card = PLANS[name]
                          const sameAsUserPlan = id === userPlan
                          const [price, priceType] = formatPrice(
                            amount,
                            name,
                            billing,
                          )
                          return (
                            <div
                              className={cx(
                                styles.card,
                                classes.card,
                                card.isPopular && styles.card_popular,
                                sameAsUserPlan && styles.card_active,
                              )}
                              key={card.title}
                              onClick={toggleCardDetails}
                            >
                              <div className={styles.card__top}>
                                <h3 className={styles.card__title}>
                                  {card.title}
                                  {card.isPopular && (
                                    <span className={styles.popular}>
                                      Popular
                                    </span>
                                  )}
                                </h3>
                                <svg
                                  width='15'
                                  height='8'
                                  viewBox='0 0 15 8'
                                  className={styles.card__arrow}
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M14.313 0.754539C14.5867 1.06549 14.5564 1.5394 14.2455 1.81304L7.99546 7.31304C7.71218 7.56233 7.2878 7.56233 7.00452 7.31304L0.754519 1.81304C0.443563 1.5394 0.413314 1.06549 0.686955 0.754538C0.960596 0.443582 1.43451 0.413333 1.74546 0.686974L7.49999 5.75096L13.2545 0.686974C13.5655 0.413333 14.0394 0.443583 14.313 0.754539Z'
                                  />
                                </svg>
                              </div>
                              <div className={styles.desc}>{card.desc}</div>
                              <div className={styles.details}>
                                <div className={styles.price}>
                                  {price}
                                  <span className={styles.price__type}>
                                    {priceType}
                                  </span>
                                </div>
                                <div className={styles.discount}>
                                  {card.discount}
                                </div>
                                {!currentUser ||
                                sameAsUserPlan ||
                                isSubscriptionCanceled ? (
                                  <PlanRestrictBtn
                                    sameAsUserPlan={sameAsUserPlan}
                                    isSubscriptionCanceled={
                                      isSubscriptionCanceled
                                    }
                                  />
                                ) : (
                                  <card.Component
                                    title={card.title}
                                    label={card.link}
                                    price={price}
                                    billing={billing}
                                    planId={+id}
                                    subscription={subscription}
                                    onDialogClose={onDialogClose}
                                  />
                                )}
                                <Features
                                  data={card.features}
                                  classes={styles}
                                />
                              </div>
                            </div>
                          )
                        })}
                    </div>
                    <PricingDetailsToggle
                      isLoggedIn={currentUser}
                      plans={neuro.plans}
                      userPlan={userPlan}
                      billing={billing}
                    />
                  </>
                )
              }}
            </Query>
          )
        }}
      </Query>
    </>
  )
}
