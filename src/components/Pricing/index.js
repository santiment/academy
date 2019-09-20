import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Title from '../Title/Title'
import PricingTable from './PricingTable.js'
import styles from './index.module.scss'

export default injectIntl(({ intl }) => {
  return (
    <section id='pricing'>
      <Title className={styles.title}>
        {intl.formatMessage({ id: 'pricing.title.top' })}
        <br className={styles.br} />{' '}
        {intl.formatMessage({ id: 'pricing.title.bottom' })}
      </Title>
      <PricingTable />
    </section>
  )
})
