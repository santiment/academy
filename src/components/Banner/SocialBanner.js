import React from "react"
import styles from "./SocialBanner.module.scss"

const SocialBanner = () => (
	<section className={styles.wrapper}>
    <a href="https://santiment.net/discord" target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div>
        <svg width="36" height="27" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.img}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4 23.6l2 2.4a11 11 0 009.1-4.5c-.1-6-1.6-12-4.3-17.5-2.4-1.9-5.4-3-8.4-3.1l-.5.5c2.8.7 5.3 2 7.5 3.7a24.4 24.4 0 00-15.6-2.7 22.5 22.5 0 00-8.5 2.8c2.3-1.9 5-3.2 7.8-4l-.3-.3C10.2 1 7.2 2 4.8 4A40.1 40.1 0 00.5 21.5 10.9 10.9 0 009.6 26l.9-1 1.1-1.4c-2-.6-4-1.8-5.2-3.6 1 .7 2.2 1.3 3.4 1.8a21 21 0 0020-1.7 9.5 9.5 0 01-5.4 3.5zM10.2 13.1c.6-.6 1.4-1 2.2-1a3.2 3.2 0 013 3.3 3.2 3.2 0 01-3 3.3 3.3 3.3 0 01-2.2-5.6zm11.2-.6c.6-.4 1.3-.5 2-.4a3.2 3.2 0 013 3.3 3.3 3.3 0 11-5-3z" />
        </svg>
      </div>
      <div>
        <h3 className={styles.heading}>Join Community</h3>
        <p className={styles.description}>Get help from our fast-growing community</p>
      </div>
    </a>
    <a href="https://app.santiment.net/support" target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div>
        <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"  className={styles.img}>
          <g>
            <path d="M39.3 30.1h.2l.1-.1.1-.1h.1v-.1l.1-.1v-.1-.1-.1h.1V10.7c0-.4-.4-.8-.9-.8H11.8a.9.9 0 00-.6.2v.1H11v.1l-.1.1v5.7a.9.9 0 101.7 0v-3.4l7.7 6.8h-.1l-7.6 7.7v-5.7a.9.9 0 10-1.8 0v1H6.5a.9.9 0 100 1.8h4.4v5c0 .5.4.8 1 .8H39.2zm-1-3l-7.6-7.5 5.7-4.9a.9.9 0 00-1.2-1.3l-9.7 8.3L14 11.6h24.2v15.6zm-16.8-6.3l.2-.2 3.2 2.9a.9.9 0 001.1 0l3.3-2.8.1.1 7.6 7.6H14l7.6-7.6z"/>
            <path d="M.9 19.7h14.6a.9.9 0 100-1.7H1a.9.9 0 100 1.7z"/>
            <path d="M2.4 15H9a.9.9 0 100-1.8H2.4a.9.9 0 100 1.8z"/>
            <path d="M7.2 26.2H1a.9.9 0 100 1.7h6.3a.9.9 0 100-1.7z"/>
          </g>
        </svg>
      </div>
      <div>
        <h3 className={styles.heading}>Contact us</h3>
        <p className={styles.description}>Reach out to us directly via email</p>
      </div>
    </a>
  </section>
)

export default SocialBanner
