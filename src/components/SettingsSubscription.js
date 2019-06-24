import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import Label from '@santiment-network/ui/Label'
import PricingTable from './Pricing/PricingTable'
import Settings from './Settings'
import styles from './SettingsSubscription.module.scss'

const SettingsAPIKeys = ({ apikeys = [], generateAPIKey, revokeAPIKey }) => (
  <Settings id='subscription' header='Subscription'>
    <PricingTable classes={styles} />
  </Settings>
)

export default SettingsAPIKeys
