import React from "react"
import cx from "classnames"
import {Link} from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import styles from "./Block.module.scss"

const Block = ({title, articles}) => (
	<article className={styles.block}>
		<div className={styles.icon}>
		<Icon type='words-list' />
		</div>
		<div>
		<h4 className={styles.title}>{title}</h4>
		<p className={styles.length}>{articles.length} guides</p>
		</div>
	</article>
)

export default Block
