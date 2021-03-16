import React, { useRef, useEffect } from "react"
import cx from 'classnames'
import { Link } from 'gatsby'
import { InputWithIcon as Input } from "@santiment-network/ui/Input"
import { isSSR } from '../../utils/utils'
import styles from "./Search.module.scss"

const SUGGESTIONS = [{
  label: "Trending words",
  link: "/metrics/emerging-trends/"
},
{
  label: "Social volume",
  link: "/metrics/social-volume/"
},
{
  label: "MVRV",
  link: "/metrics/mvrv-ratio/"
},
{
  label: "Metrics",
  link: "/metrics/"
}]

const Search = ({ small }) => {
  useEffect(() => {
        if (isSSR) return;

        window.docsearch({
          apiKey: "93cdd643257923145fa8093e68b5c453", // required
          indexName: "santiment_academy", // required
          inputSelector: "#search", // required
        });
    }, []);

  const inputEl = useRef(null)

  // const onSuggestionClick = value => {
  //   if (inputEl) {
  //   	inputEl.current.value = value
  //   }
  // }


  return small ? (
    <div className={cx(styles.wrapper, small && styles.wrapper__small)}>
    <Input
        id='search'
        placeholder='Search docs'
        icon='search'
        forwardedRef={inputEl}
        iconPosition='left'
        iconClassName={styles.icon}
        inputClassName={styles.input}
      />
    </div>
    ) : (
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
        {SUGGESTIONS.map(({link, label}) =>
          <Link to={link} key={label} className={styles.word}>
            {label}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Search
