import React from 'react'
import Button from '@santiment-network/ui/Button'
import PaymentDialog from '../PaymentDialog/PaymentDialog'
import ChangePlanDialog from '../ChangePlanDialog/ChangePlanDialog'
import PipedriveDialogBtn from '../Pipedrive/Pipedrive'
import styles from './index.module.scss'

const PlanActionDialog = props =>
  props.subscription ? (
    <ChangePlanDialog {...props} />
  ) : (
    <PaymentDialog {...props} />
  )

export default {
  FREE: {
    discount: 'Free forever',
    link: 'Upgrade now',
    Component: () => (
      <Button accent='blue' border fluid className={styles.link} disabled>
        Default plan
      </Button>
    ),
    features: [
      'HDA',
      intl => (
        <>
          20 {intl.formatMessage({ id: 'plan.feature.AC' })}
          <br />
          1k {intl.formatMessage({ id: 'plan.feature.AC' })}
        </>
      ),
      intl => (
        <>
          {intl.formatMessage({ id: 'plan.feature.SM' })}{' '}
          <span className={styles.ast}>*</span>
        </>
      ),

      intl => (
        <>
          {intl.formatMessage({ id: 'plan.free.feature.AR' })}{' '}
          <span className={styles.ast}>**</span>
        </>
      ),
    ],
  },
  ESSENTIAL: {
    link: 'Upgrade now',
    Component: PlanActionDialog,
    features: [
      'HDA',
      intl => (
        <>
          60 {intl.formatMessage({ id: 'plan.feature.AC' })}
          <br />
          10k {intl.formatMessage({ id: 'plan.feature.AC' })}
        </>
      ),
      intl => (
        <>
          {intl.formatMessage({ id: 'plan.feature.SM' })}{' '}
          <span className={styles.ast}>**</span>
        </>
      ),
      intl => intl.formatMessage({ id: 'plan.feature.NA' }),
    ],
  },
  PRO: {
    isPopular: true,
    Component: PlanActionDialog,
    link: 'Upgrade now',
    features: [
      'HDA',
      intl => (
        <>
          120 {intl.formatMessage({ id: 'plan.feature.AC' })}
          <br />
          150k {intl.formatMessage({ id: 'plan.feature.AC' })}
        </>
      ),
      intl => (
        <>
          {intl.formatMessage({ id: 'plan.feature.AM' })}{' '}
          <span className={styles.ast}>*</span>
        </>
      ),
      intl => intl.formatMessage({ id: 'plan.feature.NA' }),
    ],
  },
  PREMIUM: {
    desc: '',
    Component: PlanActionDialog,
    link: 'Upgrade now',
    features: [
      'HDA',
      intl => (
        <>
          180 {intl.formatMessage({ id: 'plan.feature.AC' })}
          <br />
          500k {intl.formatMessage({ id: 'plan.feature.AC' })}
        </>
      ),
      intl => (
        <>
          {intl.formatMessage({ id: 'plan.feature.AM' })}{' '}
          <span className={styles.ast}>*</span>
        </>
      ),
      intl => intl.formatMessage({ id: 'plan.feature.NA' }),
    ],
  },
  CUSTOM: {
    discount: 'Based on your needs',
    link: 'Contact us',
    Component: props => (
      <PipedriveDialogBtn
        {...props}
        title='Enterprise plan Pipedrive form'
        src='https://pipedrivewebforms.com/form/0527db4d781f7c4c0760b7bc7a58549c4144829'
      />
    ),
    features: [
      'HDA',
      intl => `${intl.formatMessage({ id: 'plan.custom.feature.CDCR.top' })}
      ${intl.formatMessage({ id: 'plan.custom.feature.CDCR.bottom' })}`,
      intl => (
        <>
          {intl.formatMessage({ id: 'plan.feature.AM' })}{' '}
          <span className={styles.ast}>*</span>
        </>
      ),
      'WLO',
    ],
  },
}
