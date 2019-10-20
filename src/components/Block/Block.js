import React from "react"
import cx from 'classnames'
import Icon from "@santiment-network/ui/Icon"
import {Link} from "gatsby"
import {titleToSlug} from '../../utils/docs'
import styles from "./Block.module.scss"

const Block = ({title, articles, category}) => {
	const {length} = articles
	return (
	<Link to={length ? `/${titleToSlug(category)}/${titleToSlug(title)}` : ''} className={cx(styles.block, !length && styles.disable)}>
		<div className={styles.icon}>
		<Icon type='words-list' />
		</div>
		<div>
		<h4 className={styles.title}>{title}</h4>
		<p className={styles.length}>{length ? length > 1 ? `${length} guides` : '1 guide' : 'Guides in work'}</p>
		</div>
	</Link>
)
}

export default Block
