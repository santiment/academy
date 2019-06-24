import React, { useState } from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import Title from '../Title'
import Features from '../Features'
import PricingTable from './PricingTable.js'
import PricingDetailsToggle from './PricingDetailsToggle.js'
import Pipedrive from '../Pipedrive'
import styles from './index.module.scss'

function useToggle() {
  const [toggled, newToggle] = useState(false)
  function setToggle() {
    newToggle(state => !state)
  }
  return [toggled, setToggle]
}

export default () => {
  const [toggled, setToggle] = useToggle()
  return (
    <section id='pricing'>
      <Title className={styles.title}>
        Choose the right plan
        <br className={styles.br} />
        for your aims
      </Title>
      <PricingTable />
      <PricingDetailsToggle />
    </section>
  )
}
