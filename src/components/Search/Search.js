import React, { useRef } from "react"
import { InputWithIcon as Input } from "@santiment-network/ui/Input"
import styles from "./Search.module.scss"

const SUGGESTIONS = [
  "Tokens",
  "Sansheets",
  "Metrics",
  "API key",
  " Social data",
]

const Search = () => {
  const inputEl = useRef(null)

  const onSuggestionClick = value => {
    if (inputEl) {
    	inputEl.current.value = value
    	// inputEl.current.focus()
    }
  }


  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Santiment Academy</h3>
      <Input
        id='search'
        placeholder='Search docs, articles, video tutorials...'
        icon='search'
        forwardedRef={inputEl}
        iconPosition='left'
        iconClassName={styles.icon}
        inputClassName={styles.input}
      />
      <div className={styles.suggestions}>
        <span className={styles.group}>Popular searches:</span>
        {SUGGESTIONS.map(item =>
          <span key={item} className={styles.word} onClick={() => onSuggestionClick(item)}>
            {item}
          </span>
        )}
      </div>
    </div>
  )
}

export default Search
