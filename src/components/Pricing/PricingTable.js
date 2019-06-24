import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import Button from '@santiment-network/ui/Button'
import Features from '../Features'
import Pipedrive from '../Pipedrive'
import styles from './index.module.scss'

const prices = [
  {
    title: 'Free',
    desc: 'For individuals just getting started with crypto',
    price: '$0',
    priceType: '',
    discount: 'Free forever',
    link: 'Your current plan',
    pipedrive:
      'https://pipedrivewebforms.com/form/1b8273966098dc4746bb0b4e63d4ac9a4144829',
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
  {
    title: 'Basic',
    desc: 'For traders, developers, investors and side projects',
    price: '$119',
    priceType: '/mo',
    discount: '20% off with 200 SAN',
    link: 'Upgrade now',
    pipedrive:
      'https://pipedrivewebforms.com/form/bf289352f9c4b07a996b454353fd4dff4144829',
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
  {
    title: 'Pro',
    isPopular: true,
    desc: 'For traders, developers, investors and side projects',
    price: '$359',
    priceType: '/mo',
    discount: '20% off with 1000 SAN',
    link: 'Upgrade now',
    pipedrive:
      'https://pipedrivewebforms.com/form/2562e7ee67e1191d6d6ae934eb8ec1194144829',
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
  {
    title: 'Premium',
    desc: 'For traders, developers, investors and side projects',
    price: '$719',
    priceType: '/mo',
    discount: '20% off with 1000 SAN',
    link: 'Upgrade now',
    pipedrive:
      'https://pipedrivewebforms.com/form/e4053d472913f8b7963b269fb0370f3a4144829',
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
  {
    title: 'Enterprise',
    desc: 'For organizations that need advanced data and support',
    price: 'Custom',
    priceType: '',
    discount: 'Based on your needs',
    link: 'Contact us',
    pipedrive:
      'https://pipedrivewebforms.com/form/0527db4d781f7c4c0760b7bc7a58549c4144829',
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
]

function toggleCardDetails({ currentTarget }) {
  currentTarget.classList.toggle(styles.card_opened)
}

export default ({ classes = {} }) => {
  return (
    <div className={styles.cards}>
      {prices.map(card => (
        <div
          className={cx(
            styles.card,
            classes.card,
            card.isPopular && styles.card_popular,
          )}
          key={card.title}
          onClick={toggleCardDetails}
        >
          <div className={styles.card__top}>
            <h3 className={styles.card__title}>
              {card.title}
              {card.isPopular && (
                <span className={styles.popular}>Popular</span>
              )}
            </h3>
            <svg
              width='15'
              height='8'
              viewBox='0 0 15 8'
              className={styles.card__arrow}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.313 0.754539C14.5867 1.06549 14.5564 1.5394 14.2455 1.81304L7.99546 7.31304C7.71218 7.56233 7.2878 7.56233 7.00452 7.31304L0.754519 1.81304C0.443563 1.5394 0.413314 1.06549 0.686955 0.754538C0.960596 0.443582 1.43451 0.413333 1.74546 0.686974L7.49999 5.75096L13.2545 0.686974C13.5655 0.413333 14.0394 0.443583 14.313 0.754539Z'
              />
            </svg>
          </div>
          <div className={styles.desc}>{card.desc}</div>
          <div className={styles.details}>
            <div className={styles.price}>
              {card.price}
              <span className={styles.price__type}>{card.priceType}</span>
            </div>
            <div className={styles.discount}>{card.discount}</div>
            {card.title === 'Free' ? (
              <Button
                as={Link}
                to='/account'
                fluid
                accent='blue'
                border
                className={styles.link}
              >
                {card.link}
              </Button>
            ) : (
              <Pipedrive
                title={card.title}
                label={card.link}
                src={card.pipedrive}
              />
            )}
            <Features data={card.features} classes={styles} />
          </div>
        </div>
      ))}
    </div>
  )
}
