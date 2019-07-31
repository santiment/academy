import React from 'react'
import { Link } from 'gatsby'
import Title from '../Title/Title'
import Button from '@santiment-network/ui/Button'
import styles from './ReadyToStart.module.scss'

function onGetAccessClick() {
  window.gtag('event', 'login_action_call', {
    location: '"Ready to start?" section',
    text: 'Get access',
  })
}

export default () => (
  <section className={styles.wrapper}>
    <div>
      <Title>Ready to get started?</Title>
      <p className={styles.text}>
        Click below to access the Santiment API or join the Discord
        <br className={styles.br} />
        channel to share your solutions with the world
      </p>
      <Button
        as={Link}
        to='/account'
        variant='fill'
        accent='blue'
        className={styles.btn}
        onClick={onGetAccessClick}
      >
        Get access
      </Button>
    </div>
  </section>
)
