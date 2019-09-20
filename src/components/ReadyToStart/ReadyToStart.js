import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Title from '../Title/Title'
import Button from '@santiment-network/ui/Button'
import styles from './ReadyToStart.module.scss'

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: '"Ready to start?" section',
    text: 'Get access',
  })
}

export default injectIntl(({ intl }) => (
  <section className={styles.wrapper}>
    <div>
      <Title>{intl.formatMessage({ id: 'ready.title' })}</Title>
      <p className={styles.text}>
        {intl.formatMessage({ id: 'ready.text.top' })}
        <br className={styles.br} />
        {intl.formatMessage({ id: 'ready.text.bottom' })}
      </p>
      <Button
        as={Link}
        to='/account'
        variant='fill'
        accent='blue'
        className={styles.btn}
        onClick={onGetAccessClick}
      >
        {intl.formatMessage({ id: 'ready.btn' })}
      </Button>
    </div>
  </section>
))
