import React, {useState} from 'react'
import PropTypes from 'prop-types'
import copy from 'copy-to-clipboard'
import cx from 'classnames'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Icon from '@santiment-network/ui/Icon'
import { foundation } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './Markdown.module.scss'

const CodeBlockRenderer = ({language, value}) => {
  const [copiedShown, setCopiedShown] = useState(false)

  function showCopiedTooltip() {
    setCopiedShown(true)
    setTimeout(() => setCopiedShown(false), 1000)
  }

  const onCopy = () => {
    copy(value)
    showCopiedTooltip()
  }

  return (
    <div className={styles.codeWrapper}>
    <div className={cx(styles.copy, copiedShown && styles.copied)} onClick={onCopy}>
      <Icon type="copy" />
    </div>
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
    </div>
  )
}

CodeBlockRenderer.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  }

CodeBlockRenderer.defaultProps = {
    language: null,
  }

export default CodeBlockRenderer
