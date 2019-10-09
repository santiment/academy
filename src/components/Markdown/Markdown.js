import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import MathJax from "@matejmazur/react-mathjax"
import HeadingRenderer from './HeadingRenderer'
import CodeBlockRenderer from './CodeBlockRenderer'
import {replaceCheckMarkstoCustom} from './utils'
import styles from './Markdown.module.scss'
const RemarkMathPlugin = require("remark-math");

const Markdown = ({markdown, ...rest}) => (
<MathJax.Context input="tex">
  <ReactMarkdown
  	{...rest}
  	className={styles.wrapper}
    source={replaceCheckMarkstoCustom(markdown)}
    escapeHtml={false}
    plugins={[RemarkMathPlugin]}
    renderers={{
    	heading: HeadingRenderer,
    	code: CodeBlockRenderer,
    	math: props =>
        <MathJax.Node>{props.value}</MathJax.Node>,
      inlineMath: props =>
        <MathJax.Node inline={true}>{props.value}</MathJax.Node>
    }}
  />
</MathJax.Context>
)

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Markdown;
