import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import cx from 'classnames'
import Tooltip from '@santiment-network/ui/Tooltip'
import Icon from '@santiment-network/ui/Icon'
import sanbaseLogoImg from './../../images/logos/logo-sanbase.svg'
import sheetsLogoImg from './../../images/logos/logo-sheets.svg'
import neuroLogoImg from './../../images/logos/logo-neuro.svg'
import trendsLogoImg from './../../images/logos/logo-trends.svg'
import mainLogo from './../../images/logos/main-logo.svg'
import styles from './SantimentProductsTooltip.module.scss'

const PRODUCTS = [
  {
    img: sanbaseLogoImg,
    title: 'Sanbase',
    description:
      'Behavior analysis & monitoring platform for 1000+ crypto assets',
    to: 'https://app.santiment.net',
    showLink: true,
    linkTitle: 'Sanbase'
  },
  {
    img: sheetsLogoImg,
    title: 'Sansheets',
    description: 'Google Spreadsheets plugin for importing Santiment data',
    to: 'https://sheets.santiment.net',
    showLink: true,
    linkTitle: 'Sansheets'
  },
  {
    img: neuroLogoImg,
    title: 'SanAPI',
    description: 'The most comprehensive crypto API on the market',
    to: 'https://neuro.santiment.net',
    showLink: true,
    linkTitle: 'SanAPI'
  },
  {
    img: trendsLogoImg,
    title: 'Santrends',
    description: 'Explore the social volume of any word on crypto social media',
    to: 'https://app.santiment.net/labs/trends/',
    showLink: true,
    linkTitle: 'Santrends'
  }
]

const ProductItem = ({
                       product: { to, img, title, linkTitle, description, showLink = true },
                       className
                     }) => {
  return (
    <a className={cx(styles.wrapper, className)} href={to}>
      <div className={cx(styles.product, styles.wrapper__product)}>
        {img && <img className={styles.product__img} src={img} alt={title} />}
        <div className={styles.product__info}>
          <div className={styles.product__title}>{title}</div>
          <div className={styles.product__description}>{description}</div>

          {showLink && (
            <MakeLink
              className={cx(styles.wrapper__link)}
              to={to}
              as={'div'}
              title={'Go to ' + linkTitle}
            />
          )}
        </div>
      </div>
    </a>
  )
}

const MakeLink = ({ to, title, className, as: El = 'a' }) => (
  <El href={to} className={cx(styles.link, className)}>
    {title} <Icon className={styles.linkArrow} type='pointer-right' />
  </El>
)

const OpenTrigger = () => <Icon type='arrow-down' className={styles.arrowIcon} />
const CloseTrigger = () => <Icon type='arrow-up' className={styles.arrowIcon}/>

const SantimentProductsTooltip = ({ className, children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
    <Tooltip
      passOpenStateAs='isActive'
      closeTimeout={150}
      position='bottom'
      align='start'
      offsetY={10}
      className={styles.tooltip}
      trigger={
        <div className={cx(className, styles.trigger)}>
          <a href='https://app.santiment.net' className={styles.sanbaseLink}>
            <img src={mainLogo} alt="Sanbase" />
          </a>
          {children}
          <div className={cx(styles.arrow, isOpen && styles.opened)}>
            {isOpen ? <CloseTrigger /> : <OpenTrigger />}
          </div>
        </div>
      }
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Santiment products</div>
          <MakeLink to='https://santiment.net' title='Go to Santiment.net' />
        </div>
        <div className={styles.products}>
          {PRODUCTS.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>
      </div>
    </Tooltip>
    <Link to='/' className={styles.graphs}>Academy</Link>
    </>
  )
}

SantimentProductsTooltip.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: PropTypes.string,
};

export default SantimentProductsTooltip
