import React from "react"
import styles from "./SocialBanner.module.scss"

const SocialBanner = () => (
	<section className={styles.wrapper}>
    <div className={styles.card}>
      <div>
        <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.img}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.353 44.619a221.844 221.844 0 001.977 2.427 10.953 10.953 0 009.17-4.555 40.128 40.128 0 00-4.315-17.47 14.817 14.817 0 00-8.42-3.146l-.42.48a19.943 19.943 0 017.462 3.79 24.423 24.423 0 00-9.02-2.877 25.355 25.355 0 00-6.038.105 2.948 2.948 0 00-.51.06 22.507 22.507 0 00-6.802 1.873c-1.109.494-1.768.87-1.768.87a20.225 20.225 0 017.866-3.926l-.3-.375a14.817 14.817 0 00-8.42 3.146 40.128 40.128 0 00-4.315 17.47 10.863 10.863 0 009.14 4.555l.817-1.009c.363-.449.797-.986 1.19-1.478a9.32 9.32 0 01-5.244-3.536 17.543 17.543 0 003.416 1.768c1.426.563 2.9.994 4.405 1.289 2.563.492 5.195.503 7.761.03a19.721 19.721 0 004.346-1.289 17.148 17.148 0 003.446-1.768 9.455 9.455 0 01-5.424 3.566zM27.215 34.117a3.337 3.337 0 012.181-1.065 3.172 3.172 0 013.057 3.327 3.19 3.19 0 01-3.057 3.326 3.337 3.337 0 01-2.18-5.588zm11.193-.643a3.338 3.338 0 011.926-.422 3.189 3.189 0 013.056 3.327 3.337 3.337 0 11-4.982-2.905z" />
        </svg>
      </div>
      <div>
        <h3 className={styles.heading}>Join Community</h3>
        <p className={styles.description}>Get help from our fast-growing community</p>
      </div>
    </div>
    <div className={styles.card}>
      <div>
        <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.img}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.353 44.619a221.844 221.844 0 001.977 2.427 10.953 10.953 0 009.17-4.555 40.128 40.128 0 00-4.315-17.47 14.817 14.817 0 00-8.42-3.146l-.42.48a19.943 19.943 0 017.462 3.79 24.423 24.423 0 00-9.02-2.877 25.355 25.355 0 00-6.038.105 2.948 2.948 0 00-.51.06 22.507 22.507 0 00-6.802 1.873c-1.109.494-1.768.87-1.768.87a20.225 20.225 0 017.866-3.926l-.3-.375a14.817 14.817 0 00-8.42 3.146 40.128 40.128 0 00-4.315 17.47 10.863 10.863 0 009.14 4.555l.817-1.009c.363-.449.797-.986 1.19-1.478a9.32 9.32 0 01-5.244-3.536 17.543 17.543 0 003.416 1.768c1.426.563 2.9.994 4.405 1.289 2.563.492 5.195.503 7.761.03a19.721 19.721 0 004.346-1.289 17.148 17.148 0 003.446-1.768 9.455 9.455 0 01-5.424 3.566zM27.215 34.117a3.337 3.337 0 012.181-1.065 3.172 3.172 0 013.057 3.327 3.19 3.19 0 01-3.057 3.326 3.337 3.337 0 01-2.18-5.588zm11.193-.643a3.338 3.338 0 011.926-.422 3.189 3.189 0 013.056 3.327 3.337 3.337 0 11-4.982-2.905z" fill="#181B2B"/>
        </svg>
      </div>
      <div>
        <h3 className={styles.heading}>Join Community</h3>
        <p className={styles.description}>Get help from our fast-growing community</p>
      </div>
    </div>
  </section>
)

export default SocialBanner
