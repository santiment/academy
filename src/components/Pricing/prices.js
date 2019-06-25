import React from 'react'
import Button from '@santiment-network/ui/Button'
import PaymentDialogBtn from '../PaymentDialog'
import PipedriveDialogBtn from '../Pipedrive/Pipedrive'
import styles from './index.module.scss'

export default {
  FREE: {
    title: 'Free',
    desc: 'For individuals just getting started with crypto',
    price: '$0',
    priceType: '',
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
    price: '$119',
    priceType: '/mo',
    discount: '20% off with 200 SAN',
    link: 'Upgrade now',
    Component: PaymentDialogBtn,
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
    price: '$359',
    priceType: '/mo',
    discount: '20% off with 1000 SAN',
    Component: PaymentDialogBtn,
    link: 'Upgrade now',
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
    price: '$719',
    priceType: '/mo',
    discount: '20% off with 1000 SAN',
    Component: PaymentDialogBtn,
    link: 'Upgrade now',
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
    price: 'Custom',
    priceType: '',
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
