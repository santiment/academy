import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import HeadingRenderer from './HeadingRenderer'
import CodeBlockRenderer from './CodeBlockRenderer'
import TextRenderer from './TextRenderer'
import {MathRenderer, MathBlockRenderer} from './MathRenderer'
import {replaceCheckMarkstoCustom} from './utils'
import styles from './Markdown.module.scss'
const RemarkMathPlugin = require("remark-math");

const Markdown = ({markdown, ...rest}) => (
  <ReactMarkdown
  	{...rest}
  	className={styles.wrapper}
    source={markdown}
    escapeHtml={false}
    plugins={[RemarkMathPlugin]}
    renderers={{
    	text: TextRenderer,
    	heading: HeadingRenderer,
    	code: CodeBlockRenderer,
    	math: MathBlockRenderer,
      inlineMath: MathRenderer
    }}
  />
)

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Markdown;
