import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Button from '@santiment-network/ui/Button'
import Title from '../Title/Title'
import Subtitle from '../Subtitle/Subtitle'
import Features from '../Features/Features'
import styles from './Advantages.module.scss'

const advantages = [
  {
    type: 'onchain',
    title: intl => (
      <>
        {intl.formatMessage({ id: 'advantage.onchain.title.upper' })}
        <br />
        {intl.formatMessage({ id: 'advantage.onchain.title.bottom' })}
      </>
    ),
    features: ['TAC', 'EIO', 'TCV', 'DAA', 'NG', 'TOP', 'RMN', 'TTH', 'EMM'],
  },
  {
    type: 'social',
    title: intl => (
      <>
        {intl.formatMessage({ id: 'advantage.social.title.upper' })}
        <br />
        {intl.formatMessage({ id: 'advantage.social.title.bottom' })}
      </>
    ),
    features: [
      'DFFAC',
      'TTR',
      'DFPTC',
      'VOSM',
      'SMFCP',
      'CWC',
      'TSG',
      'SC',
      'PTF',
    ],
  },
  {
    type: 'fin',
    title: intl => intl.formatMessage({ id: 'advantage.fin.title' }),
    features: ['P', 'V', 'MC', 'OCHL', 'EW'],
  },
  {
    type: 'dev',
    title: intl => intl.formatMessage({ id: 'advantage.dev.title' }),
    features: ['GD', 'GE', 'DA', 'HU', 'HD'],
  },
]

const Advantage = ({
  intl,
  className,
  advantage: { type, title, features },
}) => {
  const beg = `advantage.${type}`
  return (
    <div className={cx(styles.advantage, className)}>
      <h4 className={styles.advantage__type}>
        {intl.formatMessage({ id: beg + '.type' })}
      </h4>
      <Title className={styles.advantage__title}>{title(intl)}</Title>
      <Features
        intl={intl}
        intlId={beg + '.feature.'}
        data={features}
        classes={styles}
      />
    </div>
  )
}

export default injectIntl(({ intl }) => (
  <section>
    <div className={styles.advantages}>
      <Advantage
        intl={intl}
        advantage={advantages[0]}
        className={styles.advantage_onchain}
      />
      <Advantage
        intl={intl}
        advantage={advantages[1]}
        className={styles.advantage_social}
      />
      <div className={styles.interest}>
        <Title small className={cx(styles.text, styles.interest__title)}>
          {intl.formatMessage({ id: 'advantages.interest' })}
        </Title>
        <Subtitle className={cx(styles.text, styles.interest__text)}>
          {intl.formatMessage({ id: 'advantages.expl' })}
        </Subtitle>
        <Button
          as={Link}
          to='/account'
          variant='fill'
          accent='blue'
          className={styles.btn}
        >
          {intl.formatMessage({ id: 'advantages.try_free' })}
        </Button>
      </div>
      <Advantage
        intl={intl}
        advantage={advantages[2]}
        className={styles.advantage_financial}
      />
      <Advantage
        intl={intl}
        advantage={advantages[3]}
        className={styles.advantage_developer}
      />
    </div>
  </section>
))
