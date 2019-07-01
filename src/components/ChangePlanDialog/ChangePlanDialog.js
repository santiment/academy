import React, { useState } from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import { Mutation } from 'react-apollo'
import { NotificationsContext } from '../Notifications/Notifications'
import sharedStyles from '../Pricing/index.module.scss'
import { formatPrice } from '../../utils/plans'
import { getDateFormats } from '../../utils/dates'
import { UPDATE_SUBSCRIPTION_MUTATION } from '../../gql/plans'
import PLANS from '../Pricing/prices'

const ChangePlanDialog = ({
  subscription: {
    id,
    currentPeriodEnd,
    plan: { amount, name, interval },
  },
  title,
  price,
  billing,
  planId,
}) => {
  const [oldPrice] = formatPrice(amount)
  const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
  const date = `${MMMM} ${DD}, ${YYYY}`

  return (
    <NotificationsContext.Consumer>
      {({ add: addNot }) => (
        <Mutation mutation={UPDATE_SUBSCRIPTION_MUTATION}>
          {(updateSubscription, { loading, error }) => (
            <Dialog
              trigger={
                <Button
                  fluid
                  className={sharedStyles.link}
                  border
                  accent='blue'
                >
                  Change to this plan
                </Button>
              }
              title='Plan change'
            >
              <Dialog.ScrollContent withPadding>
                Your current plan ({PLANS[name].title} {oldPrice}/{interval}) is
                active until {date}.
                <br />
                Are you sure you want to change to the {title} plan ({price}/
                {billing}) on {date}?
              </Dialog.ScrollContent>
              <Dialog.Actions>
                <Dialog.Cancel>Cancel</Dialog.Cancel>
                <Dialog.Approve
                  accent='blue'
                  isLoading={loading}
                  onClick={() =>
                    updateSubscription({
                      variables: { subscriptionId: +id, planId: +planId },
                    })
                      .then(() =>
                        addNot({
                          variant: 'success',
                          title: `You have successfully upgraded to the "${title}" plan!`,
                          dismissAfter: 90000,
                        }),
                      )
                      .catch(e =>
                        addNot({
                          variant: 'error',
                          title: `Error during the plan change`,
                          description: e.message,
                          dismissAfter: 90000,
                        }),
                      )
                  }
                >
                  Confirm change
                </Dialog.Approve>
              </Dialog.Actions>
            </Dialog>
          )}
        </Mutation>
      )}
    </NotificationsContext.Consumer>
  )
}

export default ChangePlanDialog
