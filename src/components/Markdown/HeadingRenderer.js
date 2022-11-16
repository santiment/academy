import React from 'react'
import PropTypes from 'prop-types'
import { flatten, sluggify } from './utils'
import { usePageHash } from '../../utils/utils'
import Icon from '@santiment-network/ui/Icon'
import styles from './Markdown.module.scss'

const HeadingRenderer = ({ level, children }) => {
  const { scrollToTargetAdjusted } = usePageHash()
  const content = React.Children.toArray(children)
  const text = content.reduce(flatten, '')
  const slug = sluggify(text)

  return React.createElement(`h${level}`, { id: slug }, [
    <a
      href={`#${slug}`}
      onClick={e => scrollToTargetAdjusted(e, slug, true)}
      key={slug}
      className={styles.anchor}
    >
      <Icon type="link" />
    </a>,
    children,
  ])
}

HeadingRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number.isRequired,
}

export default HeadingRenderer
