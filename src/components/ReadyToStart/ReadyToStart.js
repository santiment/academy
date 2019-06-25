import React from 'react'
import { Link } from 'gatsby'
import Title from '../Title/Title'
import Button from '@santiment-network/ui/Button'
import styles from './ReadyToStart.module.scss'

export default () => (
  <section className={styles.wrapper}>
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
    >
      Get access
    </Button>
  </section>
)
