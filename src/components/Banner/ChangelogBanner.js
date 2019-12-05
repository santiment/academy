import React from "react"
import { Link } from 'gatsby'
import styles from "./ChangelogBanner.module.scss"

const ChangelogBanner = () => (
    <Link to="/changelog" className={styles.card}>
        <h3 className={styles.heading}>Development changelog</h3>
        <p className={styles.description}>Keep track of changes and upgrades. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
    </Link>
)

export default ChangelogBanner
