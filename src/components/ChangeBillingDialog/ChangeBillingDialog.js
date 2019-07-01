import React from 'react'
import { Query, Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Panel from '@santiment-network/ui/Panel/Panel'
import Dialog from '@santiment-network/ui/Dialog'
import { formatPrice, findNeuroPlan } from '../../utils/plans'
import { getDateFormats } from '../../utils/dates'
import { PLANS_QUERY, UPDATE_SUBSCRIPTION_MUTATION } from '../../gql/plans'
import PLANS from '../Pricing/prices'
import styles from './ChangeBillingDialog.module.scss'
import sharedStyles from '../Settings/SettingsSubscription.module.scss'

const ChangeBillingDialog = ({
  subscription: {
    id,
    currentPeriodEnd,
    plan: { amount, name: oldName, interval: oldInterval },
  },
}) => {
  const [oldPrice] = formatPrice(amount)
  const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
  const date = `${MMMM} ${DD}, ${YYYY}`

  const monthToYear = amount * 12
  const [monthToYearPrice] = formatPrice(monthToYear)

  return (
    <Mutation mutation={UPDATE_SUBSCRIPTION_MUTATION}>
      {(updateSubscription, { loading: updateLoading }) => (
        <Query query={PLANS_QUERY}>
          {({ data: { productsWithPlans = [] }, loading }) => {
            let newPrice = 0
            let yearBillSave = 0
            let newPlanId

            if (!loading) {
              const neuro = productsWithPlans.find(findNeuroPlan) || []
              const { amount, interval, id: newId } = neuro.plans.find(
                ({ name, interval }) =>
                  name === oldName && interval !== oldInterval,
              )
              newPlanId = newId
              newPrice = formatPrice(amount)[0]
              yearBillSave = formatPrice((monthToYear - amount) / 12)[0]
            }

            return (
              <Dialog
                title='Change billing periond'
                trigger={
                  <Button className={sharedStyles.btn} accent='blue'>
                    Change billing period
                  </Button>
                }
              >
                <Dialog.ScrollContent className={styles.content}>
                  {['month', 'year'].map(bill => (
                    <Panel key={bill} className={styles.card}>
                      <div className={styles.row}>
                        <h2 className={styles.billing}>{bill}ly billing</h2>
                        <h3 className={styles.price}>
                          {bill === oldInterval ? oldPrice : newPrice}
                          <span className={styles.price__type}>/{bill}</span>
                        </h3>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.desc}>
                          {PLANS[oldName].title} Plan is{' '}
                          {bill === oldInterval ? oldPrice : newPrice} per{' '}
                          {bill}.
                          <br />
                          You will{' '}
                          {bill === 'year' ? (
                            <>
                              save{' '}
                              <span className={styles.save}>
                                {yearBillSave}
                              </span>{' '}
                              per month
                            </>
                          ) : (
                            `spend ${monthToYearPrice} per year.`
                          )}
                        </div>
                        <Button
                          border
                          accent='blue'
                          disabled={oldInterval === bill}
                          isLoading={oldInterval !== bill && updateLoading}
                          onClick={() =>
                            updateSubscription({
                              variables: {
                                subscriptionId: +id,
                                planId: +newPlanId,
                              },
                            })
                          }
                        >
                          {oldInterval === bill
                            ? 'Current plan'
                            : `Change to ${bill}ly`}
                        </Button>
                      </div>
                    </Panel>
                  ))}
                  <div className={styles.desc}>
                    Your {PLANS[oldName].title} Plan will renew on {date}.
                  </div>
                </Dialog.ScrollContent>
              </Dialog>
            )
          }}
        </Query>
      )}
    </Mutation>
  )
}

export default ChangeBillingDialog
