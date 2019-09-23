import React, { useState } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import Icon from '@santiment-network/ui/Icon'
import Panel from '@santiment-network/ui/Panel/Panel'
import { Elements, injectStripe } from 'react-stripe-elements'
import IconLock from './IconLock'
import IconDollar from './IconDollar'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { NotificationsContext } from '../Notifications/Notifications'
import Loader from '../Loader/Loader'
import { SUBSCRIBE_MUTATION } from '../../gql/plans'
import { CURRENT_USER_QUERY } from '../../gql/user'
import { getBilling } from '../../utils/plans'
import { formatError, contactAction } from '../../utils/notifications'
import { getDateFormats } from '../../utils/dates'
import { tr, trStr } from '../../utils/translate'
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
    if (key === 'name' || key === 'coupon') {
      return
    }
    res[key] = value
  })
  return res
}

const YEAR_MULT_DIV = [1, 12]
const MONTH_MULT_DIV = [12, 1]
const getPrices = (amount, billing) => {
  const [mult, div] = billing === 'year' ? YEAR_MULT_DIV : MONTH_MULT_DIV
  return [
    `$${parseInt((amount * mult) / 100, 10)}`,
    `$${parseInt(amount / (100 * div), 10)}`,
  ]
}

const NEXT_DATE_GET_SET_MONTH = ['setMonth', 'getMonth']
const NEXT_DATE_GET_SET_YEAR = ['setFullYear', 'getFullYear']
const getNextPaymentDates = billing => {
  const [setter, getter] =
    billing === 'year' ? NEXT_DATE_GET_SET_YEAR : NEXT_DATE_GET_SET_MONTH

  const date = new Date()
  date[setter](date[getter]() + 1)

  const { DD, MM, YY } = getDateFormats(date)

  return `${DD}/${MM}/${YY}`
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
                        value: price / 100,
                        items: title,
                      })

                      const form = e.currentTarget
                      const tokenData = getTokenDataByForm(form)
                      const {
                        coupon: { value: coupon },
                      } = form

                      stripe
                        .createToken({ name: form.name.value }, tokenData)
                        .then(({ token, error }) => {
                          if (error) {
                            return Promise.reject(error)
                          }
                          const variables = { cardToken: token.id, planId }

                          if (coupon) {
                            variables.coupon = coupon
                          }

                          return subscribe({
                            variables,
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
                            value: price / 100,
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
                  {false && loading && (
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
                          <b className={styles.plan__year}>{yearPrice}</b> /{' '}
                          {trStr(intl, 'billing.year')}
                        </div>
                        <div>
                          <b className={styles.plan__month}>{monthPrice}</b> /
                          {trStr(intl, 'billing.month')}
                        </div>
                      </div>
                    </div>

                    <CheckoutForm plan={title} />

                    <Dialog.Approve
                      variant='fill'
                      accent='blue'
                      isLoading={loading}
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
                      <b> {getNextPaymentDates(billing)}</b>
                    </h5>
                  </Dialog.ScrollContent>
                  <div className={styles.bottom}>
                    <div className={styles.bottom__info}>
                      <IconLock /> Fully secured checkout
                    </div>
                    <div className={styles.bottom__info}>
                      <IconDollar /> 30 day money back guarantee
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
