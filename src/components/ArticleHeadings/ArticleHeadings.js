import React from "react"
import cx from 'classnames'
import styles from "./ArticleHeadings.module.scss"

const ArticleHeadings = ({list}) => (
	<ul className={styles.list}>
		{list.map(({value, depth}) =>
			<li className={styles.item}>
				<h3 className={cx(styles.heading, depth === 2 && styles.second, depth === 3 && styles.third)}>{value}</h3>
			</li>
		)}
	</ul>
)

export default ArticleHeadings


