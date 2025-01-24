import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import styles from './GettingStarted.module.scss'

const GettingStarted = ({ className }) => (
  <section className={cx(styles.wrapper, className)}>
    <h4 className={styles.title}>Getting started</h4>
    <div className={styles.blocks}>
      <Link to="/santiment-introduction/">
        <article className={cx(styles.block, styles.introduction)}>
          <h3 className={styles.heading}>Getting Started With Santiment</h3>
          <p className={styles.description}>
            Exploring the purpose and benefits of Santiment, this document
            highlights the available tools and provides guidance on effectively utilizing them.
          </p>
        </article>
      </Link>
      <Link to="/for-traders/">
        <article className={cx(styles.block, styles.traders)}>
          <h3 className={styles.heading}>For Traders</h3>
          <p className={styles.description}>
            Explanations, tutorials and use cases for Santiment metrics and
            tools. Learn how to use our platform to better understand market
            behavior, network activity and stakeholder trends.
          </p>
        </article>
      </Link>

      <Link to="/for-developers/">
        <article className={cx(styles.block, styles.developers)}>
          <h3 className={styles.heading}>For Developers</h3>
          <p className={styles.description}>
            Technical documentation on Santiment metrics and indicators.
            Understand the calculations, logic and algorithms behind our metrics
            - many of them custom-built by the Santiment Team.
          </p>
        </article>
      </Link>
    </div>
  </section>
)

export default GettingStarted
