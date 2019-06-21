import React, { useState } from 'react'
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

const Pipedrive = ({ title, label, src, stripe }) => {
  const [loading, toggleLoading] = useFormLoading()

  return (
    <Dialog
      title='Payment'
      classes={{ dialog: styles.dialog }}
      trigger={
        <Button className={styles.link} fluid border accent='blue'>
          {label}
        </Button>
      }
    >
      <Mutation mutation={SUBSCRIBE_MUTATION}>
        {(subscribe, { called, loading, error, data }) => {
          return (
            <>
              <Dialog.ScrollContent withPadding>
                <CheckoutForm plan={title} />
              </Dialog.ScrollContent>
              <Dialog.Actions>
                <Dialog.Cancel className={styles.action_cancel}>
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
                          variables: { cardToken: token.id, planId: 5 },
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
  )
}

const InjectedForm = injectStripe(Pipedrive)

export default props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
)
