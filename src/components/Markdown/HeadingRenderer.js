import React from 'react'
import PropTypes from 'prop-types'
import { flatten } from './utils'
import Icon from '@santiment-network/ui/Icon'
import styles from './Markdown.module.scss'

const HeadingRenderer = ({level, children}) => {
  const content = React.Children.toArray(children);
  const text = content.reduce(flatten, "");
  const slug = text.replace(/\W/g, "");

  return React.createElement(`h${level}`, { id: slug }, [
    level === 2 ?
    (<a href={`#${slug}`} key={slug} className={styles.anchor}>
      <Icon type="link" />
    </a>) : '',
    children
  ]);
};

HeadingRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number.isRequired
};

export default HeadingRenderer
