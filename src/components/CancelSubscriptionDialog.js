import React from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import { Mutation } from 'react-apollo'
import { NotificationsContext } from './Notifications/Notifications'
import { formatPrice } from '../utils/plans'
import { getDateFormats } from '../utils/dates'
import { CANCEL_SUBSCRIPTION_MUTATION } from '../gql/plans'
import { CURRENT_USER_QUERY } from '../gql/user'
import PLANS from './Pricing/prices'
import dialogStyles from './Dialog.module.scss'

const createCacheUpdate = subsId =>
  function updateCache(cache, { data: { cancelSubscription } }) {
    const { currentUser } = cache.readQuery({ query: CURRENT_USER_QUERY })

    const canceled = currentUser.subscriptions.find(({ id }) => id === subsId)

    canceled.cancelAtPeriodEnd = cancelSubscription.isScheduledForCancellation
    canceled.currentPeriodEnd = cancelSubscription.scheduledForCancellationAt

    cache.writeQuery({
      query: CURRENT_USER_QUERY,
      data: { currentUser: { ...currentUser } },
    })
  }

const CancelPlanDialog = ({
  subscription: {
    id,
    currentPeriodEnd,
    plan: { amount, name, interval },
  },
}) => {
  const [oldPrice] = formatPrice(amount)
  const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
  const date = `${MMMM} ${DD}, ${YYYY}`

  return (
    <NotificationsContext.Consumer>
      {({ add: addNot }) => (
        <Mutation
          mutation={CANCEL_SUBSCRIPTION_MUTATION}
          update={createCacheUpdate(id)}
        >
          {(cancelSubscription, { loading }) => (
            <Dialog
              title='Subscription cancelling'
              trigger={<Button accent='blue'>Cancel subscription</Button>}
            >
              <Dialog.ScrollContent withPadding>
                Are you sure you want to cancel you subscription?
                <br />
                Your current plan ({PLANS[name].title} {oldPrice}/{interval})
                will be active until {date}.
              </Dialog.ScrollContent>
              <Dialog.Actions>
                <Dialog.Cancel className={dialogStyles.cancel}>
                  Cancel
                </Dialog.Cancel>
                <Dialog.Approve
                  accent='blue'
                  isLoading={loading}
                  onClick={() =>
                    cancelSubscription({
                      variables: { subscriptionId: +id },
                    })
                      .then(() =>
                        addNot({
                          variant: 'success',
                          title: `You have successfully canceled your subscription.`,
                          description: 'We will miss you!',
                          dismissAfter: 90000,
                        }),
                      )
                      .catch(e =>
                        addNot({
                          variant: 'error',
                          title: `Error during the cancellation`,
                          description: e.message,
                          dismissAfter: 90000,
                        }),
                      )
                  }
                >
                  Confirm cancellation
                </Dialog.Approve>
              </Dialog.Actions>
            </Dialog>
          )}
        </Mutation>
      )}
    </NotificationsContext.Consumer>
  )
}

export default CancelPlanDialog
