import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import Panel from '@santiment-network/ui/Panel/Panel'
import Loader from './Loader/Loader'
import { Elements, injectStripe } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import PendingDots from './PendingDots/PendingDots'
import { SUBSCRIBE_MUTATION } from '../gql/plans'
import { CURRENT_USER_QUERY } from '../gql/user'
import styles from './Pricing/index.module.scss'
import stylesDialog from './PaymentDialog.module.scss'

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
        className={styles.link}
        fluid
        border
        accent='blue'
        disabled={disabled}
        onClick={showPayment}
      >
        {label}
      </Button>

      <Mutation mutation={SUBSCRIBE_MUTATION} update={updateCache}>
        {(subscribe, { called, error, data }) => {
          return (
            <Dialog
              title={`Payment for "${title}" plan (${price}/month)`}
              classes={{ dialog: styles.dialog }}
              open={paymentVisible}
              onClose={hidePayment}
              as={Form}
              modalProps={{
                onSubmit: e => {
                  e.preventDefault()

                  if (loading) return

                  const form = e.currentTarget
                  const tokenData = getTokenDataByForm(form)

                  toggleLoading()
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
                    .then(console.log)
                    .catch(e => {
                      alert(JSON.stringify(e))
                      toggleLoading()
                    })
                },
              }}
            >
              {loading && (
                <div className={stylesDialog.loader}>
                  <Loader />
                </div>
              )}
              <Dialog.ScrollContent withPadding>
                <CheckoutForm plan={title} />
              </Dialog.ScrollContent>
              <Dialog.Actions>
                <Dialog.Cancel
                  className={styles.action_cancel}
                  onClick={hidePayment}
                >
                  Close
                </Dialog.Cancel>
                <Dialog.Approve
                  variant='fill'
                  accent='blue'
                  disabled={loading}
                  className={styles.action}
                  type='submit'
                >
                  Pay
                </Dialog.Approve>
              </Dialog.Actions>
            </Dialog>
          )
        }}
      </Mutation>
    </>
  )
}

const InjectedForm = injectStripe(PaymentDialog)

export default props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
)
