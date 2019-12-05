import React from "react"
import { Link } from 'gatsby'
import styles from "./ChangelogBanner.module.scss"

const ChangelogBanner = () => (
    <Link to="/changelog" className={styles.card}>
        <h3 className={styles.heading}>Development changelog</h3>
        <p className={styles.description}>Keep track of development updates, new product features and other items from our changelog</p>
    </Link>
)

export default ChangelogBanner
