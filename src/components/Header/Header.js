import React from 'react'
import withSizes from 'react-sizes'
import cx from 'classnames'
import { mapSizesToProps } from '../../utils/sizes'
import Search from '../../components/Search/Search'
import Logo from '../SantimentProductsTooltip/Logo'
import SantimentProductsTooltip from '../SantimentProductsTooltip/SantimentProductsTooltip'
import styles from './Header.module.scss'

const Header = ({ isShowSidebar, fixedHeader = true }) => (
  <header className={cx(styles.wrapper, fixedHeader && styles.fixed)}>
    <div className={cx(styles.header, 'container')}>
      <Logo />
      <SantimentProductsTooltip />
      {isShowSidebar && <Search small />}
    </div>
  </header>
)

export default withSizes(mapSizesToProps)(Header)
