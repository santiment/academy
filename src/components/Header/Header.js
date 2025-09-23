import React, { useState, useEffect } from "react"
import withSizes from "react-sizes"
import cx from "classnames"
import { mapSizesToProps } from "../../utils/sizes"
import Search from "../../components/Search/Search"
import Logo from "../SantimentProductsTooltip/Logo"
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"
import styles from "./Header.module.scss"

const Header = ({ isShowSearch, fixedHeader = true }) => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <header className={cx(styles.wrapper, fixedHeader && styles.fixed)}>
      <div className={cx(styles.header, "container")}>
        <div class={styles.headerLeft}>
          <Logo />
          <SantimentProductsTooltip />
        </div>
        <div class={styles.headerRight}>
          {isShowSearch && <Search />}
          {isHydrated ? (
            <ai-button></ai-button>
          ) : (
            <div class="ai-button-placeholder">
              <button className="group/button flex items-center cursor-pointer gap-2 bg-white fill-waterloo hover:bg-athens h-8 py-[5px] ask-ai-academy-button rounded-md border-2 border-transparent px-6 transition-colors md:px-4 sm:px-6">
                Chat with AI
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default withSizes(mapSizesToProps)(Header)
