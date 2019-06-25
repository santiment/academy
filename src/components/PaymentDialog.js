import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import { Elements, injectStripe } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import { SUBSCRIBE_MUTATION } from '../gql/plans'
import styles from './Pricing/index.module.scss'

function useFormLoading() {
  const [loading, setLoading] = useState(false)
  function toggleLoading() {
    setLoading(state => !state)
  }
  return [loading, toggleLoading]
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
      <Dialog
        title={`Payment for "${title}" plan (${price}/month)`}
        classes={{ dialog: styles.dialog }}
        open={paymentVisible}
        onClose={hidePayment}
      >
        <Mutation mutation={SUBSCRIBE_MUTATION}>
          {(subscribe, { called, error, data }) => {
            return (
              <>
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
                    onClick={() => {
                      toggleLoading()
                      stripe
                        .createToken({ name: 'Test name' })
                        .then(({ token, error }) => {
                          if (error) {
                            return Promise.reject(error)
                          }
                          return subscribe({
                            variables: { cardToken: token.id, planId },
                          })
                        })
                        .then(console.log)
                        .then(toggleLoading)
                        .catch(alert)
                    }}
                  >
                    Pay
                  </Dialog.Approve>
                </Dialog.Actions>
              </>
            )
          }}
        </Mutation>
      </Dialog>
    </>
  )
}

const InjectedForm = injectStripe(PaymentDialog)

export default props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
)
