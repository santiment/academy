import React, { useRef, useEffect } from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import { InputWithIcon as Input } from '@santiment-network/ui/Input'
import { isSSR } from '../../utils/utils'
import Girl from './girl.png'
import Man from './man.png'
import styles from './Search.module.scss'

const SUGGESTIONS = [
  {
    label: 'Trending words',
    link: '/metrics/emerging-trends/',
  },
  {
    label: 'Social volume',
    link: '/metrics/social-volume/',
  },
  {
    label: 'MVRV',
    link: '/metrics/mvrv/',
  },
  {
    label: 'Metrics',
    link: '/metrics/',
  },
]

const Search = ({ small }) => {
  useEffect(() => {
    if (isSSR) return

    if (window.docsearch) {
      window.docsearch({
        appId: 'ZVVHPHW3IV',
        apiKey: '712c7a00cdc130f6828b671dac8ad35f', // required
        indexName: 'santiment_academy', // required
        inputSelector: '#search', // required
      })
    }
  }, [])

  const inputEl = useRef(null)

  // const onSuggestionClick = value => {
  //   if (inputEl) {
  //   	inputEl.current.value = value
  //   }
  // }

  return small ? (
    <div className={cx(styles.wrapper, small && styles.wrapper__small)}>
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
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.illustrations}>
        <img src={Girl} alt="girl" width="605px" className={styles.girl} />
        <img src={Man} alt="man" width="655px" className={styles.man} />
      </div>
      <h3 className={styles.heading}>Santiment Academy</h3>
      <Input
        id="search"
        placeholder="Search docs, articles, video tutorials..."
        icon="search"
        forwardedRef={inputEl}
        iconPosition="left"
        iconClassName={styles.icon}
        inputClassName={styles.input}
      />
      <div className={styles.suggestions}>
        <span className={styles.group}>Popular searches:</span>
        {SUGGESTIONS.map(({ link, label }) => (
          <Link to={link} key={label} className={styles.word}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search
