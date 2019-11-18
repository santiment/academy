import React from "react"
import withSizes from "react-sizes"
import cx from "classnames"
import {Link} from "gatsby"
import { mapSizesToProps } from "../../utils/sizes"
import Icon from "@santiment-network/ui/Icon"
import styles from "./Breadcrumb.module.scss"

const Breadcrumb = ({crumbs,crumbLabel, className, isPhone}) => {
	const crumbsWithoutLast = crumbs.map(({pathname, crumbLabel}) => ({crumbLabel: crumbLabel.charAt(0).toUpperCase() + crumbLabel.slice(1), pathname}))
	crumbsWithoutLast.pop()
	const previous = crumbsWithoutLast[crumbsWithoutLast.length - 1]
	return isPhone ? (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Link to={previous.pathname}>
					<Icon type='arrow-left' className={styles.icon} />
					{previous.crumbLabel}
				</Link>
			</div>
		</div>
		) : (
	<nav className={cx(styles.wrapper, className)}>
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
	)
}

export default withSizes(mapSizesToProps)(Breadcrumb)


