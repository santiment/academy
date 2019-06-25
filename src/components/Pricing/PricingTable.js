import React from 'react'
import { Query } from 'react-apollo'
import cx from 'classnames'
import gql from 'graphql-tag'
import { Link } from 'gatsby'
import Button from '@santiment-network/ui/Button'
import { CURRENT_USER_QUERY } from '../../pages/account'
import Features from '../Features'
import PaymentDialog from '../PaymentDialog'
import PricingDetailsToggle from './PricingDetailsToggle.js'
import PipedriveBtn from '../Pipedrive/Pipedrive'
import prices from './prices'
import styles from './index.module.scss'

const PLANS_QUERY = gql`
  query productsWithPlans {
    productsWithPlans {
      name
      plans {
        id
        name
        amount
        interval
      }
    }
  }
`

const PlanRestrictBtn = ({ sameAsUserPlan }) => {
  const props = sameAsUserPlan
    ? { children: 'Your current plan', disabled: true }
    : { children: 'Upgrade now', as: Link, to: '/account' }
  return (
    <Button fluid accent='blue' border className={styles.link} {...props} />
  )
}

function toggleCardDetails({ currentTarget }) {
  currentTarget.classList.toggle(styles.card_opened)
}

const findNeuroPlan = ({ name }) => name === 'SANapi'

function getCurrentNeuroSubscription(user) {
  if (!user) return
  const { subscriptions: subs } = user

  if (subs.length === 0) return
  return subs.find(
    ({
      plan: {
        product: { name },
      },
    }) => name === 'SANapi',
  ).plan.id
}

export default ({ classes = {} }) => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data: { currentUser } }) => {
        const userPlan = getCurrentNeuroSubscription(currentUser)
        return (
          <>
            <Query query={PLANS_QUERY}>
              {({ data: { productsWithPlans = [] } }) => {
                const neuro = productsWithPlans.find(findNeuroPlan)
                if (!neuro) {
                  return null
                }

                return (
                  <div className={styles.cards}>
                    {neuro.plans
                      .filter(({ interval }) => interval === 'month')
                      .map(({ id, name }) => {
                        const card = prices[name]
                        const sameAsUserPlan = id === userPlan
                        return (
                          <div
                            className={cx(
                              styles.card,
                              classes.card,
                              card.isPopular && styles.card_popular,
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
                                {card.price}
                                <span className={styles.price__type}>
                                  {card.priceType}
                                </span>
                              </div>
                              <div className={styles.discount}>
                                {card.discount}
                              </div>
                              {!currentUser || sameAsUserPlan ? (
                                <PlanRestrictBtn
                                  sameAsUserPlan={sameAsUserPlan}
                                />
                              ) : (
                                <card.Component
                                  title={card.title}
                                  label={card.link}
                                  price={card.price}
                                  planId={+id}
                                />
                              )}
                              <Features data={card.features} classes={styles} />
                            </div>
                          </div>
                        )
                      })}
                  </div>
                )
              }}
            </Query>
            <PricingDetailsToggle isLoggedIn={currentUser} />
          </>
        )
      }}
    </Query>
  )
}
