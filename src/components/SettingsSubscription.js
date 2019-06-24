import React from 'react'
import PricingTable from './Pricing/PricingTable'
import Settings from './Settings'
import styles from './SettingsSubscription.module.scss'

const SettingsAPIKeys = ({ apikeys = [], generateAPIKey, revokeAPIKey }) => (
  <Settings id='subscription' header='Subscription' classes={styles}>
    <PricingTable classes={styles} />
  </Settings>
)

export default SettingsAPIKeys
