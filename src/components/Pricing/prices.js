import React from 'react'
import Button from '@santiment-network/ui/Button'
import PaymentDialog from '../PaymentDialog/PaymentDialog'
import ChangePlanDialog from '../ChangePlanDialog/ChangePlanDialog'
import PipedriveDialogBtn from '../Pipedrive/Pipedrive'
import { tr, trStr } from '../../utils/translate'
import styles from './index.module.scss'

const PlanActionDialog = props =>
  props.subscription ? (
    <ChangePlanDialog {...props} />
  ) : (
    <PaymentDialog {...props} />
  )

export default {
  FREE: {
    discount: 'price.bill_discount.free',
    link: 'Upgrade now',
    Component: () => (
      <Button accent='blue' border fluid className={styles.link} disabled>
        {tr('cta.default_plan')}
      </Button>
    ),
    features: [
      'HDA',

      intl => (
        <>
          20 {trStr(intl, 'plan.feature.AC')}
          <br />
          1k {trStr(intl, 'plan.feature.AC')}
        </>
      ),
      <>
        {tr('plan.feature.SM')} <span className={styles.ast}>*</span>
      </>,
      <>
        {tr('plan.free.feature.AR')} <span className={styles.ast}>**</span>
      </>,
    ],
  },
  ESSENTIAL: {
    link: 'Upgrade now',
    Component: PlanActionDialog,
    features: [
      'HDA',
      intl => (
        <>
          60 {trStr(intl, 'plan.feature.AC')}
          <br />
          10k {trStr(intl, 'plan.feature.AC')}
        </>
      ),
      <>
        {tr('plan.feature.SM')} <span className={styles.ast}>**</span>
      </>,
      tr('plan.feature.NA'),
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
          120 {trStr(intl, 'plan.feature.AC')}
          <br />
          150k {trStr(intl, 'plan.feature.AC')}
        </>
      ),
      <>
        {tr('plan.feature.AM')} <span className={styles.ast}>*</span>
      </>,
      tr('plan.feature.NA'),
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
          180 {trStr(intl, 'plan.feature.AC')}
          <br />
          500k {trStr(intl, 'plan.feature.AC')}
        </>
      ),
      <>
        {tr('plan.feature.AM')} <span className={styles.ast}>*</span>
      </>,
      tr('plan.feature.NA'),
    ],
  },
  CUSTOM: {
    discount: 'price.bill_discount.custom',
    link: 'cta.contact',
    Component: props => (
      <PipedriveDialogBtn
        {...props}
        title='Enterprise plan Pipedrive form'
        src='https://pipedrivewebforms.com/form/0527db4d781f7c4c0760b7bc7a58549c4144829'
      />
    ),
    features: [
      'HDA',
      intl => `${trStr(intl, 'plan.custom.feature.CDCR.top')}
        ${trStr(intl, 'plan.custom.feature.CDCR.bottom')}`,

      <>
        {tr('plan.feature.AM')} <span className={styles.ast}>*</span>
      </>,
      'WLO',
    ],
  },
}
