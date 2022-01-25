import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'
import { sluggify } from '../Markdown/utils'
import { scrollToTargetHander } from '../../utils/utils'
import cx from 'classnames'
import styles from './ArticleHeadings.module.scss'

const ArrowRight = () => (
  <svg
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.12324 0.170741C8.94139 0.378553 8.96244 0.694435 9.17025 0.876284L12.7413 4.0012L9.17025 7.12613C8.96244 7.30797 8.94139 7.62386 9.12324 7.83167C9.30509 8.03948 9.62097 8.06053 9.82878 7.87868L13.8299 4.37748C13.9384 4.28254 14.0006 4.14538 14.0006 4.0012C14.0006 3.85703 13.9384 3.71987 13.8299 3.62493L9.82878 0.12373C9.62097 -0.0581183 9.30509 -0.0370707 9.12324 0.170741Z"
      fill="#14C393"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-4.17087e-09 4C-1.86736e-09 3.72386 0.223858 3.5 0.5 3.5L12.4959 3.5C12.7721 3.5 12.9959 3.72386 12.9959 4C12.9959 4.27614 12.7721 4.5 12.4959 4.5L0.5 4.5C0.223858 4.5 -6.47437e-09 4.27614 -4.17087e-09 4Z"
      fill="#14C393"
    />
  </svg>
)

const TOPICS = {
  sanbase: { href: 'https://app.santiment.net/', title: 'Sanbase' },
  sanapi: { href: 'https://api.santiment.net/', title: 'Sanapi' },
  sansheets: { href: 'https://sheets.santiment.net/', title: 'Sansheets' },
}

const ArticleHeadings = ({ list = [], crumbs = [] }) => {
  const {hash} = useLocation()
  const [pageHash, setPageHash] = useState()
  useEffect(() => {
    setPageHash(hash)
    const hashChangeHandler = ({detail}) => setPageHash(detail)
    window.addEventListener('hashScrollChanged', hashChangeHandler, false)
    return () => window.removeEventListener('hashScrollChanged', hashChangeHandler, false)
  }, [])
  const topic = crumbs.length > 1 && crumbs[1].crumbLabel
  const appLink = topic && TOPICS[topic]

  return (
    <ul className={styles.list}>
      {appLink && (
        <li className={styles.appLink}>
          <a href={appLink.href} target="_blank" rel="noreferrer">
            Go to {appLink.title} <ArrowRight />
          </a>
        </li>
      )}
      {list.map(({ value, depth }, idx) => {
        const slug = sluggify(value)
        return (
          <li
            className={cx(
              styles.item,
              pageHash === `#${slug}` && styles.current,
              idx === 0 && (appLink ? styles.mt50 : styles.mt170)
            )}
            key={idx}
          >
            <a
              href={`#${slug}`}
              onClick={e => {
                e.preventDefault()
                scrollToTargetHander(slug)
              }}
              className={cx(
                styles.heading,
                depth === 2 && styles.second,
                depth === 3 && styles.third
              )}
            >
              {value}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default ArticleHeadings
