import React, { useRef, useEffect } from "react"
import cx from "classnames"
import { InputWithIcon as Input } from "@santiment-network/ui/Input"
import { isSSR } from "../../utils/utils"
import styles from "./Search.module.scss"

const Search = () => {
  useEffect(() => {
    if (isSSR) return

    if (window.docsearch) {
      window.docsearch({
        appId: "ZVVHPHW3IV",
        apiKey: "712c7a00cdc130f6828b671dac8ad35f", // required
        indexName: "santiment_academy", // required
        inputSelector: "#search", // required
      })
    }
  }, [])

  const inputEl = useRef(null)

  return (
    <div className={cx(styles.wrapper, styles.wrapper__small)}>
      <Input
        id="search"
        placeholder="Search docs"
        icon="search"
        forwardedRef={inputEl}
        iconPosition="left"
        iconClassName={styles.icon}
        inputClassName={styles.input}
      />
    </div>
  )
}

export default Search
