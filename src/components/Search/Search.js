import React from "react"
import Input from '@santiment-network/ui/Search/Search'
import styles from "./Search.module.scss"

const Search = () => (
	<div className={styles.wrapper}>
		<h3 className={styles.heading}>Santiment Academy</h3>
		<Input id="search" iconClassName={styles.icon} inputClassName={styles.input} />
		<div className={styles.suggestions}>
			<span className={styles.group}>Popular searches:</span>
			<span className={styles.word}>Tokens</span>
			<span className={styles.word}>Sansheets</span>
			<span className={styles.word}>Metrics</span>
			<span className={styles.word}>Api key</span>
			<span className={styles.word}>Social data</span>
		</div>
	</div>
)

export default Search
