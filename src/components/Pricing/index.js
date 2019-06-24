import React from 'react'
import Title from '../Title'
import PricingTable from './PricingTable.js'
import styles from './index.module.scss'

export default () => {
  return (
    <section id='pricing'>
      <Title className={styles.title}>
        Choose the right plan
        <br className={styles.br} />
        for your aims
      </Title>
      <PricingTable />
    </section>
  )
}
