import React, { useState } from 'react'
import { Link } from 'gatsby'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import cx from 'classnames'
import { Elements, injectStripe } from 'react-stripe-elements'
import Loader from './Loader'
import CheckoutForm from './CheckoutForm'
import styles from './Pricing/index.module.scss'

const SUBSCRIBE_MUTATION = gql`
  mutation subscribe($cardToken: String!, $planId: Int!) {
    subscribe(cardToken: $cardToken, planId: $planId) {
      plan {
        id
        name
      }
    }
  }
`

function useFormLoading() {
  const [loading, setLoading] = useState(true)
  function toggleLoading() {
    setLoading(state => !state)
  }
  return [loading, toggleLoading]
}

const Pipedrive = ({
  title,
  label,
  src,
  price,
  planId,
  stripe,
  disabled,
  isLoggedIn,
}) => {
  const [loading, toggleLoading] = useFormLoading()
  const [paymentVisible, setPaymentVisiblity] = useState(false)

  function hidePayment() {
    setPaymentVisiblity(false)
  }

  function showPayment() {
    setPaymentVisiblity(true)
  }

  const anonProps = { onClick: undefined, as: Link, to: '/account' }

  return (
    <>
      <Button
        className={styles.link}
        fluid
        border
        accent='blue'
        disabled={disabled}
        onClick={showPayment}
        {...anonProps}
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
          {(subscribe, { called, loading, error, data }) => {
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

const InjectedForm = injectStripe(Pipedrive)

export default props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
)
