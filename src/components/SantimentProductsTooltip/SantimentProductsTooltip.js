import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import cx from 'classnames'
import Tooltip from '@santiment-network/ui/Tooltip'
import Icon from '@santiment-network/ui/Icon'
import sanbaseLogoImg from './../../images/logos/logo-sanbase.svg'
import sheetsLogoImg from './../../images/logos/logo-sheets.svg'
import neuroLogoImg from './../../images/logos/logo-neuro.svg'
import styles from './SantimentProductsTooltip.module.scss'

const PRODUCTS = [
  {
    img: sanbaseLogoImg,
    title: 'Sanbase',
    description:
      'Behavior analysis & monitoring platform for 1000+ crypto assets',
    to: 'https://app.santiment.net'
  },
  {
    img: sheetsLogoImg,
    title: 'Sheets',
    description: 'Google Spreadsheets plugin for importing Santiment data',
    to: 'https://sheets.santiment.net'
  },
  {
    img: neuroLogoImg,
    title: 'API',
    description: 'The most comprehsive crypto API on the market',
    to: 'https://neuro.santiment.net'
  }
]

const ProductItem = ({ product: { to, img, title, description } }) => {
  return (
    <a className={styles.wrapper} href={to}>
      <div className={cx(styles.product, styles.wrapper__product)}>
        <img className={styles.product__img} src={img} alt={title} />
        <div className={styles.product__info}>
          <div className={styles.product__title}>{title}</div>
          <div className={styles.product__description}>{description}</div>

          <MakeLink
            className={cx(styles.wrapper__link)}
            to={to}
            as={'div'}
            title={'Go to ' + title}
          />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"><circle cx="19" cy="19" r="18.5" fill="#fff" stroke="#E7EAF3"/><path d="M9 18.648c0-.552.135-.966.407-1.242.272-.276.639-.414 1.102-.414.462 0 .83.139 1.101.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.639.415-1.101.415-.463 0-.83-.139-1.102-.414-.272-.276-.407-.7-.407-1.271zM15.547 23.714c.403.236.88.438 1.434.606a5.853 5.853 0 0 0 1.705.251c.664 0 1.227-.163 1.69-.49.462-.328.694-.858.694-1.591 0-.615-.142-1.12-.423-1.517a4.733 4.733 0 0 0-1.07-1.07c-.433-.317-.901-.609-1.404-.874a7.48 7.48 0 0 1-1.404-.957 4.788 4.788 0 0 1-1.07-1.326c-.283-.511-.423-1.16-.423-1.945 0-1.257.346-2.204 1.04-2.843.695-.639 1.676-.958 2.943-.958.824 0 1.539.074 2.142.222.603.147 1.127.35 1.57.606l-.574 1.774a6.31 6.31 0 0 0-1.327-.488 6.23 6.23 0 0 0-1.54-.192c-.724 0-1.251.147-1.584.443-.332.296-.498.76-.498 1.39 0 .493.14.912.423 1.256.282.346.638.66 1.07.947.433.286.901.576 1.404.872.502.296.97.646 1.404 1.05.432.403.789.887 1.07 1.448.283.561.423 1.267.423 2.114a4.51 4.51 0 0 1-.272 1.567c-.18.493-.457.921-.83 1.286a4.075 4.075 0 0 1-1.388.872c-.553.217-1.202.326-1.946.326-.885 0-1.65-.084-2.293-.252-.644-.167-1.188-.389-1.63-.665l.665-1.862zM25.984 18.648c0-.552.136-.966.408-1.242.271-.276.638-.414 1.1-.414.464 0 .83.139 1.102.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.638.415-1.101.415-.463 0-.83-.139-1.101-.414-.272-.276-.408-.7-.408-1.271z" fill="#2F354D"/></svg>
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
