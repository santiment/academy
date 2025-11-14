import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Emoji from 'react-emoji-render'
import Icon from '@santiment-network/ui/Icon'
import styles from './Markdown.module.scss'

const TextRenderer = ({ value }) => {
  if (value === '❌' || value === ':x:') {
    return (
      <div className={cx(styles.cross, styles.icon)}>
        <Icon type="close-medium" />
      </div>
    )
  }

  if (value === ':white_check_mark:' || value === '✔') {
    return (
      <div className={cx(styles.checkmark, styles.icon)}>
        <Icon type="checkmark" />
      </div>
    )
  }

  return <Emoji text={value} />
}

TextRenderer.propTypes = {
  value: PropTypes.string.isRequired,
}

export default TextRenderer
