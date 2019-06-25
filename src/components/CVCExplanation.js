import React from 'react'
import cx from 'classnames'
import Tooltip from '@santiment-network/ui/Tooltip'
import Icon from '@santiment-network/ui/Icon'
import Panel from '@santiment-network/ui/Panel/Panel'
import styles from './CheckoutForm/CheckoutForm.module.scss'

const Trigger = ({ isActive, ...props }) => (
  <Icon
    type='help-round'
    className={cx(styles.icon, isActive && styles.icon_active)}
    {...props}
  />
)

const CVCExplanation = () => {
  return (
    <Tooltip
      className={styles.tooltip}
      passOpenStateAs='isActive'
      trigger={<Trigger />}
    >
      <Panel className={styles.tooltip__content} variant='tooltip'>
        <p className={styles.tooltip__text}>
          Your security code is a 3 or 4 digit code on your credit card,
          separate from the 16-digit card number.
        </p>
        <div className={styles.cards}>
          <div className={styles.visual}>
            <h4 className={styles.title}>Visa & MasterCard</h4>
            <div className={styles.card}>
              <div className={styles.magnet} />
              <div className={styles.block}>
                <span className={styles.cvc}>123</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <h4 className={styles.title}>American Express</h4>
            <div className={cx(styles.card, styles.card_american)}>
              <div className={styles.card__bank}>American Express</div>
              <div>
                <div className={styles.number}>
                  0123 456789 01234
                  <span className={cx(styles.cvc, styles.cvc_american)}>
                    1234
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </Tooltip>
  )
}

export default CVCExplanation
