import React, { useState } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import { Mutation } from 'react-apollo'
import { NotificationsContext } from '../Notifications/Notifications'
import { UPDATE_SUBSCRIPTION_MUTATION } from '../../gql/plans'
import PLANS from '../Pricing/prices'
import { formatPrice, getBilling } from '../../utils/plans'
import { getDateFormats } from '../../utils/dates'
import { formatError, contactAction } from '../../utils/notifications'
import sharedStyles from '../Pricing/index.module.scss'
import dialogStyles from '../Dialog.module.scss'

const ChangePlanDialog = ({
  intl,
  subscription: {
    id,
    currentPeriodEnd,
    plan: { amount, name, interval },
  },
  title,
  price,
  billing,
  planId,
  onDialogClose = () => {},
}) => {
  const [dialogVisible, setDialogVisibility] = useState(false)

  const [oldPrice] = formatPrice(amount, null, null)
  const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
  const date = `${MMMM} ${DD}, ${YYYY}`

  function showDialog() {
    setDialogVisibility(true)
  }

  function hideDialog() {
    setDialogVisibility(false)
  }
  return (
    <NotificationsContext.Consumer>
      {({ add: addNot }) => (
        <Mutation mutation={UPDATE_SUBSCRIPTION_MUTATION}>
          {(updateSubscription, { loading }) => (
            <Dialog
              open={dialogVisible}
              onClose={hideDialog}
              trigger={
                <Button
                  fluid
                  className={sharedStyles.link}
                  border
                  accent='blue'
                  onClick={showDialog}
                >
                  {intl.formatMessage({ id: 'cta.change_plan' })}
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
                <Dialog.Cancel
                  onClick={hideDialog}
                  className={dialogStyles.cancel}
                >
                  Cancel
                </Dialog.Cancel>
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
                          dismissAfter: 5000,
                        }),
                      )
                      .then(onDialogClose)
                      .then(getBilling)
                      .catch(e =>
                        addNot({
                          variant: 'error',
                          title: `Error during the plan change`,
                          description: formatError(e.message),
                          dismissAfter: 5000,
                          actions: contactAction,
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

export default injectIntl(ChangePlanDialog)
