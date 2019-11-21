import React from "react"
import {PEOPLE} from './../../docs/people'
import logo from '../../images/logo.png'
import styles from "./ArticleInfo.module.scss"

const ArticleInfo = ({title, author: name, date}) => {
	const { imageUrl = logo} = PEOPLE[name] || {}
	return (
	<section className={styles.block}>
		<h3 className={styles.title}>{title}</h3>
		<div className={styles.info}>
			<div className={styles.imageWrapper}>
				<img src={imageUrl} alt='author' />
			</div>
			<div>
				<h4 className={styles.author}>{name}</h4>
				<span className={styles.description}>{date}</span>
			</div>
		</div>
	</section>
)
}

export default ArticleInfo


