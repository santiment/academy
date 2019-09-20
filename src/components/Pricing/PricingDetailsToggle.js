import React, { useState } from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import PricingDetails from './PricingDetails.js'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

function useToggle() {
  const [toggled, newToggle] = useState(false)
  function setToggle() {
    newToggle(state => !state)
  }
  return [toggled, setToggle]
}

export default props => {
  const [toggled, setToggle] = useToggle()
  return (
    <>
      <div className={styles.more} onClick={setToggle}>
        <Icon type={toggled ? 'subtract-round' : 'plus-round-small'} />
        {tr(`plans.details.${toggled ? 'hide' : 'expand'}`)}
      </div>
      {toggled && (
        <>
          <PricingDetails {...props} />

          <div
            className={cx(styles.more, styles.more_bottom)}
            onClick={setToggle}
          >
            <Icon type='subtract-round' />
            {tr('plans.details.hide')}
          </div>
        </>
      )}
    </>
  )
}
