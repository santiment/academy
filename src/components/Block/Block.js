import React from "react"
import cx from "classnames"
import Icon from "@santiment-network/ui/Icon"
import {Link} from "gatsby"
import {titleToSlug} from '../../utils/docs'
import styles from "./Block.module.scss"

const Block = ({title, articles}) => (
	<Link to={`/${titleToSlug(title)}`} className={styles.block}>
		<div className={styles.icon}>
		<Icon type='words-list' />
		</div>
		<div>
		<h4 className={styles.title}>{title}</h4>
		<p className={styles.length}>{articles.length} guides</p>
		</div>
	</Link>
)

export default Block
