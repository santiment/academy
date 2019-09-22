import React from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import { trStr } from '../../utils/translate'
import styles from './Features.module.scss'

export default ({ intl, intlId, data, classes = {} }) => (
  <ul className={cx(styles.features, classes.features)}>
    {data.map((feature, i) => (
      <li key={i} className={cx(styles.feature, classes.feature)}>
        <Icon
          type='checkmark'
          className={cx(styles.feature__icon, classes.feature__icon)}
        />
        {typeof feature === 'object'
          ? feature
          : typeof feature === 'function'
          ? feature(intl)
          : trStr(intl, intlId + feature)}
      </li>
    ))}
  </ul>
)
