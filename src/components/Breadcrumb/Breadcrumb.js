import React from "react"
import cx from "classnames"
import {Link} from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import styles from "./Breadcrumb.module.scss"

const Breadcrumb = ({crumbs,crumbLabel, className}) => {
	const crumbsWithoutLast = crumbs.map(({pathname, crumbLabel}) => ({crumbLabel: crumbLabel.charAt(0).toUpperCase() + crumbLabel.slice(1), pathname}))
	crumbsWithoutLast.pop()
	return (<nav className={cx(styles.wrapper, className)}>
				<ul className={styles.list}>
					{crumbsWithoutLast.map(({pathname, crumbLabel}) => (
					<li key={pathname} className={styles.title}>
						<Link to={pathname}>
							{crumbLabel}
						</Link>
						<Icon type='arrow-right' className={styles.icon} />
					</li>
					))}
					<li className={styles.last}>
						{crumbLabel}
					</li>
				</ul>
			</nav>
)}

export default Breadcrumb


