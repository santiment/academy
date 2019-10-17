import React from "react"
import cx from "classnames"
import styles from "./IntroBlocks.module.scss"

const IntroBlocks = ({ userType, className }) => (
  <section className={cx(styles.wrapper, className)}>
    <div className={cx(styles.block, styles.intro)}>
	      <h3 className={styles.heading}>Welcome, {userType} 👋</h3>
	      <p className={styles.description}>
	        Feel free to explore guides and training materials which help you better
	        understand our products. To get more personalized experience, please
	        also solve a quick Quiz!
	      </p>
    </div>
    <div className={styles.block}>Video Guides</div>
    <div className={styles.block}>Blog posts</div>
    <div className={cx(styles.block, styles.black)}>
    	Join Community
    </div>
    <div className={styles.block}>FAQ</div>
  </section>
)

export default IntroBlocks
