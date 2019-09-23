import React, { useState } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import Icon from '@santiment-network/ui/Icon'
import Panel from '@santiment-network/ui/Panel/Panel'
import { Elements, injectStripe } from 'react-stripe-elements'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { NotificationsContext } from '../Notifications/Notifications'
import Loader from '../Loader/Loader'
import { SUBSCRIBE_MUTATION } from '../../gql/plans'
import { CURRENT_USER_QUERY } from '../../gql/user'
import { getBilling } from '../../utils/plans'
import { formatError, contactAction } from '../../utils/notifications'
import { tr } from '../../utils/translate'
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

const getPrices = (amount, billing) => {
  const [mult, div] = billing === 'year' ? [1, 12] : [12, 1]
  return [
    `$${parseInt((amount * mult) / 100, 10)}`,
    `$${parseInt(amount / (100 * div), 10)}`,
  ]
}

const PaymentDialog = ({
  intl,
  title,
  billing,
  label,
  src,
  price,
  planId,
  stripe,
  disabled,
  onDialogClose = () => {},
}) => {
  const [loading, toggleLoading] = useFormLoading()
  const [paymentVisible, setPaymentVisiblity] = useState(false)
  const [yearPrice, monthPrice] = getPrices(price, billing)
  console.log({ title, price, billing, yearPrice, monthPrice })

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
        {tr('cta.upgrade_now')}
      </Button>

      <NotificationsContext.Consumer>
        {({ add: addNot }) => (
          <Mutation mutation={SUBSCRIBE_MUTATION} update={updateCache}>
            {(subscribe, { called, error, data }) => {
              return (
                <Dialog
                  title='Payment details'
                  classes={styles}
                  open={paymentVisible}
                  onClose={hidePayment}
                  as={Form}
                  modalProps={{
                    onSubmit: e => {
                      e.preventDefault()

                      if (loading) return
                      toggleLoading()

                      window.gtag('event', 'begin_checkout', {
                        currency: 'USD',
                        value: price.slice(1),
                        items: title,
                      })

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
                            dismissAfter: 5000,
                          })

                          window.gtag('event', 'purchase', {
                            currency: 'USD',
                            value: price.slice(1),
                            items: title,
                          })

                          onDialogClose()
                          return getBilling()
                        })
                        .catch(e => {
                          addNot({
                            variant: 'error',
                            title: `Error during the payment`,
                            description: formatError(e.message),
                            dismissAfter: 5000,
                            actions: contactAction,
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
                  <Dialog.ScrollContent className={styles.content}>
                    <div className={styles.plan}>
                      <div className={styles.plan__left}>
                        <Icon type='checkmark' className={styles.plan__check} />
                        {title} {billing}ly
                      </div>
                      <div className={styles.plan__right}>
                        <div>
                          <b className={styles.plan__year}>{yearPrice}</b> /
                          year
                        </div>
                        <div>
                          <b className={styles.plan__month}>{monthPrice}</b> /
                          month
                        </div>
                      </div>
                    </div>

                    <CheckoutForm plan={title} />

                    <Dialog.Approve
                      variant='fill'
                      accent='blue'
                      disabled={loading}
                      loading={loading}
                      type='submit'
                      className={styles.btn}
                    >
                      Go {title.toUpperCase()} now
                    </Dialog.Approve>
                    <h5 className={styles.expl}>
                      Your card will be charged
                      <b> {billing === 'year' ? yearPrice : monthPrice} </b>
                      every {billing} until you decide to downgrade or
                      unsubscribe. Next billing date will be
                      <b> 19/09/20</b>
                    </h5>
                  </Dialog.ScrollContent>
                  <div className={styles.bottom}>
                    <div className={styles.bottom__info}>
                      Fully secured checkout
                    </div>
                    <div className={styles.bottom__info}>
                      30 day money back guarantee
                    </div>
                  </div>
                </Dialog>
              )
            }}
          </Mutation>
        )}
      </NotificationsContext.Consumer>
    </>
  )
}

const InjectedForm = injectIntl(injectStripe(PaymentDialog))

export default props => (
  <Elements>
    <InjectedForm {...props} />
  </Elements>
)
