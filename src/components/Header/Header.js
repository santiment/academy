import React from "react"
import withSizes from "react-sizes"
import cx from "classnames"
import { mapSizesToProps } from "../../utils/sizes"
import Search from '../../components/Search/Search'
import Logo from "../SantimentProductsTooltip/Logo"
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"
import styles from "./Header.module.scss"

const Header = ({ isShowSidebar, className }) => (
    <header className={cx(styles.wrapper, className)}>
      <div className={cx(styles.header, 'container')}>
        <Logo />
        <SantimentProductsTooltip />
        {isShowSidebar && <Search small />}
      </div>
    </header>
)

export default withSizes(mapSizesToProps)(Header)
