import React from "react"
import Search from '@santiment-network/ui/Search/Search'
import styles from "./Search.module.scss"

const Search = () => (
	<div className={styles.wrapper}>
		<h3 className={styles.heading}>Santiment Academy</h3>
		<Search id="search" />
	</div>
)

export default Search
