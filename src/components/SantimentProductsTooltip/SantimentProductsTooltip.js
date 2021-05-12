import React, { useState } from 'react'
import cx from 'classnames'
import Tooltip from '@santiment-network/ui/Tooltip'
import ProductItem from './Product'
import SantimentLogo from "./SantimentLogo"
import {BUSINESS_PRODUCTS, CHAIN_PRODUCTS} from "./Products"
import { ProductsTrigger } from './Trigger'
import styles from './SantimentProductsTooltip.module.scss'

const SantimentProductsTooltip = ({ className, intl, children }) => {
  const [isOpen, setOpen] = useState(false)

  return (
      <>
    <Tooltip
      passOpenStateAs='isActive'
      closeTimeout={150}
      position='bottom'
      align='start'
      offsetY={11}
      className={styles.tooltip}
      trigger={
        <div className={cx(className, styles.trigger)}>
          <ProductsTrigger isOpen={isOpen} />
        </div>
      }
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
        <div className={styles.container}>
            <svg width='411' height='245' fill='none' className={styles.background}>
                <path
                    fill='var(--athens)'
                    d='M138.68 193.15C38.87 180.8 34.66 288.15 88 365c53.34 76.85 230.83 161.27 311 14.4 80.15-146.87 34.83-295.18-73-279.9-107.83 15.28-87.5 106-187.32 93.65z'
                />
            </svg>
            <SantimentLogo className={styles.mainLink} />
            <div className={styles.block}>
                <h3 className={styles.title}>SAN business</h3>
                <div className={styles.products}>
                    {BUSINESS_PRODUCTS.map((item, index) => (
                        <ProductItem
                            key={index}
                            product={item}
                            className={styles.product}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.block}>
                <h3 className={styles.title}>SAN chain</h3>
                <div className={styles.products}>
                    {CHAIN_PRODUCTS.map((item, index) => (
                        <ProductItem
                            key={index}
                            product={item}
                            className={styles.product}
                        />
                    ))}
                </div>
            </div>
        </div>
    </Tooltip>
          <div className={styles.mobileWrapper}>
              <div className={styles.block}>
                  <h3 className={styles.title}>SAN business</h3>
                  <div className={styles.products}>
                      {BUSINESS_PRODUCTS.map((item, index) => (
                          <ProductItem
                              key={index}
                              product={item}
                              className={styles.product}
                          />
                      ))}
                  </div>
              </div>
              <div className={styles.block}>
                  <h3 className={styles.title}>SAN chain</h3>
                  <div className={styles.products}>
                      {CHAIN_PRODUCTS.map((item, index) => (
                          <ProductItem
                              key={index}
                              product={item}
                              className={styles.product}
                          />
                      ))}
                  </div>
              </div>
          </div>
          </>
  )
}

export default SantimentProductsTooltip
