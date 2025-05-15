import React, { useState } from "react"
import cx from "classnames"
import Tooltip from "@santiment-network/ui/Tooltip"
import ProductItem from "./Product"
import {
  BUSINESS_PRODUCTS,
  CHAIN_PRODUCTS,
  INITIATIVES_PRODUCTS,
} from "./Products"
import { ProductsTrigger } from "./Trigger"
import styles from "./SantimentProductsTooltip.module.scss"

const SantimentProductsTooltip = ({ className }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Tooltip
      passOpenStateAs="isActive"
      closeTimeout={150}
      position="bottom"
      align="start"
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
        <div className={styles.block}>
          <div className={styles.business}>
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
          <div>
            <h3 className={styles.title}>Initiatives</h3>
            <div className={styles.products}>
              {INITIATIVES_PRODUCTS.map((item, index) => (
                <ProductItem
                  key={index}
                  product={item}
                  className={styles.product}
                />
              ))}
            </div>
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
  )
}

export default SantimentProductsTooltip
