import React, { useRef } from "react"
import withSizes from "react-sizes"
import cx from "classnames"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import { mapSizesToProps } from "../../utils/sizes"
import Dropdown from "../Dropdown/Dropdown"
import Search from '../../components/Search/Search'
import dropdownStyles from "../Dropdown/Dropdown.module.scss"
import styles from "./Header.module.scss"
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"

const Header = ({ isDesktop, isTablet, isShowSidebar, className }) => {
  const toggle = useRef(null)

  return (
    <header className={cx(styles.wrapper, className)}>
      <div className={cx(styles.header, 'container')}>
        <SantimentProductsTooltip />
        {isShowSidebar && <Search small />}
      {false && (<>
      <label htmlFor='hamburger'>
        <Icon type='hamburger' />
      </label>
      <input id='hamburger' type='checkbox' ref={toggle} />
      <nav className={styles.nav}>
        <label htmlFor='hamburger' className={styles.close}>
          <Icon type='close' />
        </label>
        {isDesktop || isTablet ? (
          <Dropdown
            title={<Icon type='profile' />}
            isDesktop={isDesktop}
          >
            <div className={dropdownStyles.list}>
              <Link to="/login">Log in</Link>
            </div>
          </Dropdown>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </nav>
    </>)}
    </div>
    </header>
  )
}

export default withSizes(mapSizesToProps)(Header)
