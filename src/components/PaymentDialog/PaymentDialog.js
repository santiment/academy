import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import Panel from '@santiment-network/ui/Panel/Panel'
import { Elements, injectStripe } from 'react-stripe-elements'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { NotificationsContext } from '../Notifications/Notifications'
import Loader from '../Loader/Loader'
import { SUBSCRIBE_MUTATION } from '../../gql/plans'
import { CURRENT_USER_QUERY } from '../../gql/user'
import styles from './PaymentDialog.module.scss'
import sharedStyles from '../Pricing/index.module.scss'

function useFormLoading() {
  const [loading, setLoading] = useState(false)
  function toggleLoading() {
    setLoading(state => !state)
  }
  return [loading, toggleLoading]
}

function updateCache(cache, { data: { subscribe } }) {
  const { currentUser } = cache.readQuery({ query: CURRENT_USER_QUERY })

  let subscriptions = currentUser.subscriptions
    ? [subscribe, ...currentUser.subscriptions]
    : [subscribe]

  cache.writeQuery({
    query: CURRENT_USER_QUERY,
    data: { currentUser: { ...currentUser, subscriptions } },
  })
}

const Form = props => <Panel as='form' {...props} />

const getTokenDataByForm = form => {
  const res = {}
  new FormData(form).forEach((value, key) => {
    if (key === 'name') {
      return
    }
    res[key] = value
  })
  return res
}

const PaymentDialog = ({
  title,
  billing,
  label,
  src,
  price,
  planId,
  stripe,
  disabled,
}) => {
  const [loading, toggleLoading] = useFormLoading()
  const [paymentVisible, setPaymentVisiblity] = useState(false)

  function hidePayment() {
    setPaymentVisiblity(false)
  }

  function showPayment() {
    setPaymentVisiblity(true)
  }

  return (
    <>
      <Button
        className={sharedStyles.link}
        fluid
        border
        accent='blue'
        disabled={disabled}
        onClick={showPayment}
      >
        {label}
      </Button>

      <NotificationsContext.Consumer>
        {({ add: addNot }) => (
          <Mutation mutation={SUBSCRIBE_MUTATION} update={updateCache}>
            {(subscribe, { called, error, data }) => {
              return (
                <Dialog
                  title={`Payment for the "${title}" plan (${price}/${billing})`}
                  classes={{ dialog: sharedStyles.dialog }}
                  open={paymentVisible}
                  onClose={hidePayment}
                  as={Form}
                  modalProps={{
                    onSubmit: e => {
                      e.preventDefault()

                      if (loading) return
                      toggleLoading()

                      const form = e.currentTarget
                      const tokenData = getTokenDataByForm(form)

                      stripe
                        .createToken({ name: form.name.value }, tokenData)
                        .then(({ token, error }) => {
                          if (error) {
                            return Promise.reject(error)
                          }
                          return subscribe({
                            variables: { cardToken: token.id, planId },
                          })
                        })
                        .then(() => {
                          addNot({
                            variant: 'success',
                            title: `You have successfully upgraded to the "${title}" plan!`,
                            dismissAfter: 90000,
                          })
                        })
                        .catch(e => {
                          addNot({
                            variant: 'error',
                            title: `Error during the payment`,
                            description: e.message,
                            dismissAfter: 90000,
                          })
                          toggleLoading()
                        })
                    },
                  }}
                >
                  {loading && (
                    <div className={styles.loader}>
                      <Loader />
                    </div>
                  )}
                  <Dialog.ScrollContent withPadding>
                    <CheckoutForm plan={title} />
                  </Dialog.ScrollContent>
                  <Dialog.Actions>
                    <Dialog.Cancel
                      className={sharedStyles.action_cancel}
                      onClick={hidePayment}
                    >
                      Close
                    </Dialog.Cancel>
                    <Dialog.Approve
                      variant='fill'
                      accent='blue'
                      disabled={loading}
                      className={sharedStyles.action}
                      type='submit'
                    >
                      Pay
                    </Dialog.Approve>
                  </Dialog.Actions>
                </Dialog>
              )
            }}
          </Mutation>
        )}
      </NotificationsContext.Consumer>
    </>
  )
}

const InjectedForm = injectStripe(PaymentDialog)

export default props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
)
