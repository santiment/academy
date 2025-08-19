import React, { useEffect, useLayoutEffect, useState } from "react"
import withSizes from "react-sizes"
import cx from "classnames"
import { mapSizesToProps } from "../../utils/sizes"
import Search from "../../components/Search/Search"
import Logo from "../SantimentProductsTooltip/Logo"
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"
import styles from "./Header.module.scss"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const Header = ({ isShowSidebar, fixedHeader = true }) => {
  const [isClient, setIsClient] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className={cx(styles.wrapper, fixedHeader && styles.fixed)}>
      <div className={cx(styles.header, "container")}>
        <Logo />
        <SantimentProductsTooltip />
        {isShowSidebar && <Search small />}

        <div style={{ padding: "2rem", margin: "0 auto" }}>
          <h3>Тестовый Svelte-виджет:</h3>
          {isClient && <ai-button></ai-button>}
        </div>
      </div>
    </header>
  )
}

export default withSizes(mapSizesToProps)(Header)
