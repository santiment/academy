import React, { useRef } from 'react'
import cx from 'classnames'
import { ArrowRight } from '../ArticleHeadings/ArticleHeadings'
import headingStyle from '../ArticleHeadings/ArticleHeadings.module.scss'
import styles from './ArticleFooter.module.scss'

const ArticleLastUpdate = ({ lastUpdatedAt }) => (
  <div className={cx(styles.articleLastUpdate, 'row v-center mrg-xl mrg--b')}>
    <svg
      className="mrg--r mrg-s"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6.5 3C6.5 2.72386 6.27614 2.5 6 2.5C5.72386 2.5 5.5 2.72386 5.5 3V6C5.5 6.27614 5.72386 6.5 6 6.5H9C9.27614 6.5 9.5 6.27614 9.5 6C9.5 5.72386 9.27614 5.5 9 5.5H6.5V3Z"
        fill="var(--waterloo,#7A859E)"
      />
    </svg>
    <span className="body-3 txt-m">Updated {lastUpdatedAt}</span>
  </div>
)

const DiscordCTA = () => {
  const anchor = useRef()

  function clickHandler() {
    if (anchor && anchor.current) {
      anchor.current.click()
    }
  }

  return (
    <div
      className={cx(styles.discordCTA, 'row', headingStyle.appLink)}
      onClick={clickHandler}
    >
      <DiscordLogo />
      <div className={styles.discordinfo}>
        <h4 className="h4 txt-m mrg--b mrg-xs">Talk to us in Discord</h4>
        <p className="body-2 mrg--b mrg-l">
          Still have some questions left? Join our Discord and get help from the
          Santiment team!
        </p>
        <a
          href="https://santiment.net/discord"
          target="_blank"
          rel="noreferrer"
          ref={anchor}
        >
          Go to Discord <ArrowRight />
        </a>
      </div>
    </div>
  )
}

const DiscordLogo = () => (
  <div className={cx(styles.discordlogo, 'row hv-center mrg--r mrg-xl')}>
    <svg
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0822 19.472C19.8014 20.4094 20.6644 21.4967 20.6644 21.4967C22.0914 21.5344 23.5057 21.208 24.7842 20.5458C26.0627 19.8836 27.1666 18.9058 28 17.6973C27.9222 12.6299 26.7419 7.64705 24.5479 3.12458C22.6174 1.54354 20.2636 0.626437 17.8117 0.5L17.476 0.899908C19.6579 1.50187 21.6924 2.57954 23.4452 4.06199C21.2131 2.77902 18.7618 1.96385 16.2294 1.66235C14.6217 1.49071 13 1.52008 11.3989 1.74978C11.262 1.75408 11.1256 1.77086 10.9914 1.79975C9.10999 2.01896 7.27352 2.54617 5.54963 3.362C4.66267 3.7745 4.13529 4.08697 4.13529 4.08697C5.97724 2.52757 8.12564 1.40966 10.4281 0.81247L10.1883 0.5C7.73643 0.626437 5.38274 1.54354 3.45208 3.12458C1.25815 7.64705 0.0778225 12.6299 0 17.6973C0.826692 18.9069 1.92599 19.8862 3.20096 20.5487C4.47594 21.2112 5.88762 21.5368 7.31166 21.4967C7.31166 21.4967 7.59231 21.1368 7.96588 20.6551C8.25641 20.2805 8.60318 19.8321 8.91785 19.422C7.23246 18.9788 5.74853 17.9355 4.72257 16.4725C5.57899 17.067 6.49539 17.5616 7.4555 17.9473C8.59632 18.4167 9.77582 18.7765 10.9795 19.0221C13.0296 19.4331 15.1352 19.4416 17.1883 19.0471C18.3828 18.8293 19.5492 18.4686 20.6644 17.9723C21.6338 17.5908 22.5586 17.0961 23.4213 16.4975C22.3569 17.9918 20.8199 19.0455 19.0822 19.472ZM7.77228 10.712C8.22632 10.198 8.84918 9.88087 9.51711 9.82356C9.85319 9.83596 10.1835 9.91787 10.4888 10.0644C10.7943 10.2111 11.0687 10.4195 11.2961 10.6776C11.5237 10.9358 11.6997 11.2385 11.8141 11.5682C11.9284 11.8979 11.9788 12.2479 11.9623 12.5981C11.9768 12.9478 11.925 13.297 11.8099 13.6257C11.6949 13.9545 11.5186 14.2564 11.2916 14.514C11.0644 14.7718 10.7908 14.9802 10.4864 15.1276C10.1819 15.275 9.85255 15.3582 9.51711 15.3727C8.84918 15.3154 8.22632 14.9982 7.77228 14.4842C7.31815 13.9702 7.06612 13.297 7.06612 12.5981C7.06612 11.8993 7.31815 11.226 7.77228 10.712ZM16.7267 10.1751C17.1946 9.89889 17.7315 9.77636 18.2672 9.82356C18.6025 9.83796 18.9319 9.9213 19.2363 10.0686C19.5409 10.2159 19.8145 10.4244 20.0415 10.6821C20.2687 10.9399 20.4448 11.2416 20.56 11.5704C20.675 11.8992 20.7268 12.2485 20.7124 12.5981C20.7123 13.1587 20.5499 13.7062 20.2464 14.169C19.9429 14.6317 19.5126 14.9881 19.0116 15.1916C18.5107 15.3951 17.9625 15.4362 17.4387 15.3095C16.915 15.1827 16.4402 14.894 16.0764 14.4812C15.7126 14.0685 15.4769 13.5508 15.4 12.996C15.323 12.4412 15.4085 11.8751 15.6452 11.3718C15.8819 10.8684 16.2589 10.4514 16.7267 10.1751Z"
        fill="var(--fiord, #505573)"
      />
    </svg>
  </div>
)

const ArticleFooter = ({ lastUpdatedAt }) => (
  <>
    <ArticleLastUpdate lastUpdatedAt={lastUpdatedAt} />
    <DiscordCTA />
  </>
)

export default ArticleFooter
