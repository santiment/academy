import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { foundation } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './Markdown.module.scss'

class CodeBlockRenderer extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  }

  static defaultProps = {
    language: null,
  }

  render() {
    const { language, value } = this.props;

    return (
      <SyntaxHighlighter
        language={language}
        style={foundation}
        showLineNumbers={true}
        lineNumberContainerStyle={{padding: '10px', background: 'var(--athens)', borderRight: '1px solid var(--porcelain)'}}
        lineNumberStyle={{color: 'var(--casper)'}}
        className={styles.codeBlock}
        >
        {value}
      </SyntaxHighlighter>
    )
  }
}

export default CodeBlockRenderer
