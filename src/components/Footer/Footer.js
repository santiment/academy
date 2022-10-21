import React from 'react'
import cx from 'classnames'
import { Mutation } from 'react-apollo'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import logo from './images/santiment.svg'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import { categories } from './links'
import styles from './Footer.module.scss'

const Footer = ({ isMinified }) => {
  const year = new Date()
  return (
    <footer className={cx(styles.footer, isMinified && styles.footer__mini)}>
      <div className={styles.content}>
        {!isMinified && (
          <div className={styles.top}>
            <div>
              <a href="https://santiment.net/">
                <img src={logo} className={styles.logo} alt="santiment" />
              </a>
              <div className={styles.desc}>
                Behavioral analytics for the crypto market
              </div>
            </div>
            <ul className={styles.categories}>
              {categories.map(({ links }, idx) => (
                <li key={idx} className={styles.category}>
                  {links.map(({ children, href, onClick, name = '' }, i) => (
                    <a
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                      children={name}
                      href={href}
                      onClick={evt => (onClick ? onClick(evt) : null)}
                      className={cx(styles.text, styles.category__item)}
                    />
                  ))}
                </li>
              ))}
            </ul>
            <div className={cx(styles.categories, styles.categories__mobile)}>
              {categories.map(({ links }, idx) => {
                return links.map(
                  ({ children, href, onClick, name = '' }, i) => (
                    <a
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                      children={name}
                      href={href}
                      onClick={evt => (onClick ? onClick(evt) : null)}
                      className={cx(styles.text, styles.category__item)}
                    />
                  )
                )
              })}
            </div>
            <div className={cx(styles.column, styles.column__last)}>
              <div className={styles.subscribe}>
                <h4 className={cx(styles.heading, styles.heading__subscribe)}>
                  Subscribe to the weekly digest!
                </h4>
                <NotificationsContext.Consumer>
                  {({ add: addNot }) => (
                    <Mutation mutation={EMAIL_LOGIN_MUTATION}>
                      {(sendConfirmationEmail, { loading }) => (
                        <form
                          className={styles.form}
                          onSubmit={e => {
                            e.preventDefault()
                            sendConfirmationEmail({
                              variables: {
                                email: e.currentTarget.email.value,
                                subscribeToWeeklyNewsletter: true,
                              },
                            }).then(() => {
                              addNot({
                                type: 'success',
                                title:
                                  'Verification email was sent to the provided email!',
                              })
                            })
                          }}
                        >
                          <Input
                            className={styles.input}
                            type="email"
                            required
                            placeholder={'Enter your email'}
                            name="email"
                          />
                          <Button
                            className={styles.btn}
                            variant="fill"
                            accent="positive"
                            isLoading={loading}
                          >
                            Subscribe
                          </Button>
                        </form>
                      )}
                    </Mutation>
                  )}
                </NotificationsContext.Consumer>
              </div>
            </div>
          </div>
        )}
        <div className={styles.bottom}>
          <div className={cx(styles.text, styles.rights)}>
            © 2016—{year.getFullYear()} Santiment
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://santiment.net/terms/"
              className={cx(styles.text, styles.link)}
            >
              Terms
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://app.santiment.net/privacy-policy"
              className={cx(styles.text, styles.link)}
            >
              Privacy
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.notion.so/santiment/Santiment-Media-ff72838a16164db4b7e90478e18c3776"
              className={cx(styles.text, styles.link)}
            >
              Media Kit
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://status.santiment.net/"
              className={cx(styles.text, styles.link)}
            >
              Status
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://academy.santiment.net/changelog"
              className={cx(styles.text, styles.link)}
            >
              Changelog
            </a>
          </div>
          <div className={styles.social}>
            <a
              className={styles.social__link}
              href="https://santiment.net/discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={cx(styles.social__img, styles.discord)}
                width="20"
                height="15"
              >
                <path
                  fillRule="evenodd"
                  d="M13.63 13.5c.51.64 1.13 1.38 1.13 1.38a6.26 6.26 0 005.24-2.6c-.06-3.47-.9-6.88-2.47-9.98a8.47 8.47 0 00-4.8-1.8l-.25.27a11.4 11.4 0 014.27 2.17 13.96 13.96 0 00-8.9-1.55c-1.34.15-2.65.51-3.89 1.07-.63.28-1 .5-1 .5A11.56 11.56 0 017.44.7L7.28.5a8.47 8.47 0 00-4.81 1.8A22.93 22.93 0 000 12.28a6.2 6.2 0 005.22 2.6l.47-.57.68-.85a5.33 5.33 0 01-3-2.02c.61.4 1.27.75 1.96 1.01.81.32 1.65.57 2.51.74a11.99 11.99 0 006.92-.72 9.8 9.8 0 001.97-1.01 5.4 5.4 0 01-3.1 2.04zm-8.08-6a1.9 1.9 0 011.25-.61 1.81 1.81 0 011.74 1.9 1.82 1.82 0 01-1.74 1.9 1.9 1.9 0 01-1.25-3.2zm6.4-.37a1.9 1.9 0 011.1-.24 1.82 1.82 0 011.74 1.9 1.9 1.9 0 11-2.84-1.66z"
                />
              </svg>
            </a>
            <a
              className={styles.social__link}
              href="https://twitter.com/santimentfeed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={cx(styles.social__img, styles.twitter)}
                width="20"
                height="17"
              >
                <path d="M20 2.38c-.75.37-1.5.5-2.38.62.88-.5 1.5-1.25 1.75-2.25a8.2 8.2 0 01-2.62 1 4.36 4.36 0 00-3-1.25c-2.13 0-4 1.88-4 4.13 0 .37 0 .62.13.87a11.5 11.5 0 01-8.5-4.25C1 1.88.88 2.5.88 3.38a4.1 4.1 0 001.87 3.37c-.63 0-1.25-.25-1.88-.5 0 2 1.38 3.63 3.25 4-.37.13-.75.13-1.12.13-.25 0-.5 0-.75-.13.5 1.63 2 2.88 3.88 2.88A7.95 7.95 0 011 14.87H0a12.2 12.2 0 006.25 1.88c7.5 0 11.63-6.25 11.63-11.63v-.5A7.27 7.27 0 0020 2.38z" />
              </svg>
            </a>
            <a
              className={styles.social__link}
              href="https://github.com/santiment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={cx(styles.social__img, styles.github)}
                width="21"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0A10 10 0 000 10a10.1 10.1 0 006.81 9.5c.5.07.67-.24.67-.48V17.3c-2.76.61-3.37-1.35-3.37-1.35-.43-1.16-1.1-1.47-1.1-1.47-.92-.62.06-.62.06-.62.98.07 1.53 1.05 1.53 1.05.92 1.53 2.33 1.1 2.88.86.07-.68.37-1.1.62-1.35-2.21-.25-4.54-1.1-4.54-4.97 0-1.1.37-1.97 1.04-2.7-.06-.19-.43-1.23.12-2.58 0 0 .86-.24 2.76 1.04.8-.24 1.66-.3 2.52-.3.86 0 1.72.12 2.52.3 1.9-1.28 2.76-1.04 2.76-1.04.55 1.35.18 2.4.12 2.64.61.67 1.04 1.6 1.04 2.7 0 3.86-2.33 4.66-4.54 4.9.37.31.68.93.68 1.85v2.76c0 .24.18.55.67.49A10.01 10.01 0 0010 0z"
                />
              </svg>
            </a>
            <a
              className={styles.social__link}
              href="https://t.me/santiment_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={cx(styles.social__img, styles.telegram)}
                width="21"
                height="17"
              >
                <path d="M20.75.63c0-.13-.13-.26-.25-.38h-.75s-17.5 6.25-18.5 7c-.37.25-.37.38-.5.38-.12.5.38.75.38.75l4.5 1.5h.25c1-.63 10.37-6.5 10.87-6.76h.13c-.25.75-8.25 7.88-8.25 8 0 0-.13.13 0 .13l-.38 4.38s-.12 1.37 1.25 0c1-1 1.88-1.76 2.38-2.13 1.5 1.13 3.24 2.25 4 2.88.24.25.62.37.87.37.38 0 .75-.38.88-.75 0 0 3.25-12.88 3.25-14.63V1c-.13-.13-.13-.25-.13-.38z" />
              </svg>
            </a>
            <a
              className={styles.social__link}
              href="https://www.youtube.com/c/santimentnetwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={cx(styles.social__img, styles.youtube)}
                width="20"
                height="16"
              >
                <path d="M19.47 3.15a2.5 2.5 0 00-1.74-1.77C16.18.95 10 .95 10 .95s-6.18 0-7.73.41C1.44 1.6.76 2.3.53 3.16.13 4.72.13 8 .13 8s0 3.29.4 4.85c.23.86.9 1.54 1.74 1.77 1.56.43 7.73.43 7.73.43s6.18 0 7.73-.41a2.5 2.5 0 001.74-1.78c.4-1.57.4-4.84.4-4.84s.02-3.29-.4-4.87z" />
                <path d="M8.59 10.82L12.82 8 8.6 5.18v5.64z" fill="#fff" />
              </svg>
            </a>
          </div>
          <h4 className={cx(styles.heading, styles.social__heading)}>
            Santiment on social media
          </h4>
        </div>
      </div>
      <div
        className={cx(styles.text, styles.rights, styles.rights__additional)}
      >
        © 2016—{year.getFullYear()} Santiment
      </div>
    </footer>
  )
}

export default Footer
