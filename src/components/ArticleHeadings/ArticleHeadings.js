import React from "react"
import {flatten, sluggify} from '../Markdown/utils'
import cx from 'classnames'
import styles from "./ArticleHeadings.module.scss"

const ArticleHeadings = ({list = []}) => {
	return list.length > 0 ? (<ul className={styles.list}>
		{list.map(({value, depth}) => {
  		const slug = sluggify(value)
			return (
			<li className={styles.item}>
				<a
					href={`#${slug}`}
					className={cx(styles.heading, depth === 2 && styles.second, depth === 3 && styles.third)}
					>
					{value}
				</a>
			</li>
		)})}
	</ul>
) : null}

export default ArticleHeadings


