import React from "react"
import cx from 'classnames'
import Icon from "@santiment-network/ui/Icon"
import {Link} from "gatsby"
import {titleToSlug} from '../../utils/docs'
import styles from "./Block.module.scss"
import {getCategoryColor} from './utils.js'

const Wrapper = ({length, children, category, title}) => {
	return length ? (
		<Link to={`/${titleToSlug(category)}/${titleToSlug(title)}`} className={styles.block}>
			{children}
		</Link>
		) :
	<div className={cx(styles.block, !length && styles.disable)}>
		{children}
	</div>
}

const Block = ({title, articles, category}) => {
	const {length} = articles
	const {color, fill} = getCategoryColor(category)
	return (
	<Wrapper category={category} title={title} length={length}>
		<div className={styles.icon} style={{'--color': `${color}`, '--fill': `${fill}`}}>
		<Icon type='words-list' />
		</div>
		<div>
		<h4 className={styles.title}>{title}</h4>
		<p className={styles.length}>{length ? length > 1 ? `${length} guides` : '1 guide' : 'Guides in work'}</p>
		</div>
	</Wrapper>
)
}

export default Block
