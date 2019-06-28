import React from 'react'
import Button from '@santiment-network/ui/Button'
import PaymentDialog from '../PaymentDialog/PaymentDialog'
import PipedriveDialogBtn from '../Pipedrive/Pipedrive'
import styles from './index.module.scss'

export default {
  FREE: {
    title: 'Free',
    desc: 'For individuals just getting started with crypto',
    discount: 'Free forever',
    link: 'Change to this plan',
    Component: () => (
      <Button accent='blue' border fluid className={styles.link} disabled>
        Default plan
      </Button>
    ),
    features: [
      'Historical data access to last 3 months excluding the last 24 hours',
      <>
        20 API calls / minute
        <br />
        1k API calls / month
      </>,
      <>
        Standard metrics <span className={styles.ast}>*</span>
      </>,

      <>
        Attribution required <span className={styles.ast}>**</span>
      </>,
    ],
  },
  ESSENTIAL: {
    title: 'Basic',
    desc: 'For traders, developers, investors and side projects',
    discount: '20% off with 200 SAN',
    link: 'Change to this plan',
    Component: PaymentDialog,
    features: [
      'Historical data access to last 6 months',
      <>
        60 API calls / minute
        <br />
        10k API calls / month
      </>,
      <>
        Standard metrics <span className={styles.ast}>*</span>
      </>,
      'No attribution',
    ],
  },
  PRO: {
    title: 'Pro',
    isPopular: true,
    desc: 'For traders, developers, investors and side projects',
    discount: '20% off with 1000 SAN',
    Component: PaymentDialog,
    link: 'Change to this plan',
    features: [
      'Historical data access to last 18 months',
      <>
        120 API calls / minute
        <br />
        150k API calls / month
      </>,
      <>
        Advanced metrics <span className={styles.ast}>*</span>
      </>,
      'No attribution',
    ],
  },
  PREMIUM: {
    title: 'Premium',
    desc: 'For traders, developers, investors and side projects',
    discount: '20% off with 1000 SAN',
    Component: PaymentDialog,
    link: 'Change to this plan',
    features: [
      'Unlimited historical data access',
      <>
        180 API calls / min
        <br />
        500k API calls / month
      </>,
      <>
        Advanced metrics <span className={styles.ast}>*</span>
      </>,
      'No attribution',
    ],
  },
  CUSTOM: {
    title: 'Enterprise',
    desc: 'For organizations that need advanced data and support',
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
      'Unlimited historical data access',
      `Custom development
      Custom reports`,
      <>
        Advanced metrics <span className={styles.ast}>*</span>
      </>,
      'White-label options',
    ],
  },
}
