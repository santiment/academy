import React from "react"
import withSizes from "react-sizes"
import cx from "classnames"
import { mapSizesToProps } from "../../utils/sizes"
import Search from "../../components/Search/Search"
import Logo from "../SantimentProductsTooltip/Logo"
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"
import styles from "./Header.module.scss"

const Header = ({ isShowSearch, fixedHeader = true }) => {
  return (
    <header className={cx(styles.wrapper, fixedHeader && styles.fixed)}>
      <div className={cx(styles.header, "container")}>
        <div class={styles.headerLeft}>
          <Logo />
          <SantimentProductsTooltip />
        </div>
        <div class={styles.headerRight}>
          {isShowSearch && <Search />}
          <ai-button class={styles.aiButton}></ai-button>
        </div>
      </div>
    </header>
  )
}

export default withSizes(mapSizesToProps)(Header)
