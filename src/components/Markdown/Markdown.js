import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import TeX from '@matejmazur/react-katex'
import 'katex/dist/katex.min.css'
import HeadingRenderer from './HeadingRenderer'
import CodeBlockRenderer from './CodeBlockRenderer'
import TextRenderer from './TextRenderer'
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
    	math: props =>
        <TeX block>{props.value}</TeX>,
      inlineMath: props =>
        <TeX>{props.value}</TeX>
    }}
  />
)

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Markdown;
