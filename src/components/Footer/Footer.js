import React from 'react'
import cx from 'classnames'
import { getDateFormats } from '../../utils/dates'
import styles from './Footer.module.scss'


const categories = [
  {
    title: 'Labs',
    links: [
      {
        children: 'Social trends',
        href: 'https://app.santiment.net/labs/trends',
      },
      {
        children: 'Eth spent',
        href: 'https://app.santiment.net/projects/ethereum',
      },
      {
        children: 'Historical balance',
        href: 'https://app.santiment.net/labs/balance',
      },
      { children: 'Charts', href: 'https://data.santiment.net' },
      { children: 'Sheets', href: 'https://santiment.net/sansheets/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { children: 'About us', href: 'https://santiment.net/about-santiment/' },
      { children: 'Customers', href: 'https://santiment.net/customers/' },
      { children: 'Team', href: 'https://santiment.net/about-santiment/team/' },
      { children: 'Jobs', href: 'https://santiment.net/about-santiment/jobs/' },
      {
        children: 'Contact us',
        href: 'https://santiment.net/about-santiment/contact/',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      { children: 'API', href: 'https://api.santiment.net/graphiql' },
      { children: 'Blog', href: 'https://santiment.net/blog/' },
      { children: 'Source code', href: 'https://github.com/santiment/' },
      {
        children: 'Buy SAN',
        href:
          'https://academy.santiment.net/san-tokens/buy-san-tokens-using-bancor/',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      { children: 'Discord', href: 'https://santiment.net/discord' },
      { children: 'Telegram', href: 'https://t.me/santiment_network' },
      { children: 'Twitter', href: 'https://twitter.com/santimentfeed' },
      {
        children: 'Youtube',
        href: 'https://www.youtube.com/channel/UCSzP_Z3MrygWlbLMyrNmMkg',
      },
      {
        children: 'LinkedIn',
        href: 'https://www.linkedin.com/company/santiment',
      },
      { children: 'Medium', href: 'https://medium.com/santiment' },
      { children: 'Reddit', href: 'https://reddit.com/r/santiment' },
    ],
  },
]

const Footer = ({ className, isMinified }) => {
  const {YYYY: currentYear} = getDateFormats(new Date())

  return (
    <footer className={cx(styles.footer, className)}>
      {!isMinified && (<div className={cx(styles.top, 'container')}>
        <ul className={styles.categories}>
          {categories.map(({ title, links }) => (
            <li key={title} className={styles.category}>
              <h4 className={styles.category__title}>
                {title}
              </h4>
              {links.map(({ children, href }, i) => (
                <a
                  key={i}
                  target='_blank'
                  rel='noopener noreferrer'
                  children={children}
                  href={href}
                  className={cx(styles.text, styles.category__item)}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>)}
      <div className={cx(styles.bottomWrapper, isMinified && styles.minified)}>
        <div className={cx(styles.bottom, 'container')}>
          <div>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://santiment.net/terms-conditions/'
            className={cx(styles.text, styles.link)}
          >
            Terms
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://app.santiment.net/privacy-policy'
            className={cx(styles.text, styles.link)}
          >
            Privacy
          </a>
        </div>
        <div className={cx(styles.text, styles.rights)}>
          © {currentYear} Santiment Inc. All rights reserved
        </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
