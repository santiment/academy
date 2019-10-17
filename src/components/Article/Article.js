import React from "react"
import cx from "classnames"
import {Link} from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import styles from "./Loader.module.scss"

const Article = ({title, articles}) => (
	<article className={styles.block}>
		<Icon type='words-list' className={styles.icon} />
		<h4>{title}</h4>
		<span>{articles.length} guides</span>
	</article>
)

export default Article


