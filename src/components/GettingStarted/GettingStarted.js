import React from "react"
import cx from "classnames"
import { Link } from "gatsby"
import styles from "./GettingStarted.module.scss"

const GettingStarted = ({ className }) => (
	<section className={cx(styles.wrapper,className)}>
		<h4 className={styles.title}>Getting started</h4>
		<div className={styles.blocks}>
			<Link to='/for-traders'>
				<article className={cx(styles.block, styles.traders)}>
					<h3 className={styles.heading}>For traders</h3>
					<p className={styles.description}>Build models and backtest your strategies with the most comprehensive source of crypto data on the market. No data aggregation, no intermediaries.</p>
				</article>
			</Link>
			<Link to='/for-developers'>
				<article className={cx(styles.block, styles.developers)}>
					<h3 className={styles.heading}>For developers</h3>
					<p className={styles.description}>Investigate network activity, discover market patterns, and analyze stakeholder behavior with our clean, reliable data streams for 100s of digital assets.</p>
				</article>
			</Link>
		</div>
  </section>
)

export default GettingStarted
