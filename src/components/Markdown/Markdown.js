import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import HeadingRenderer from './HeadingRenderer'
import CodeBlockRenderer from './CodeBlockRenderer'
import styles from './Markdown.module.scss'

const Markdown = ({markdown}) => (
  <ReactMarkdown
  	className={styles.wrapper}
    source={markdown}
    escapeHtml={false}
    renderers={{ heading: HeadingRenderer, code: CodeBlockRenderer }}
  />
);

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Markdown;
