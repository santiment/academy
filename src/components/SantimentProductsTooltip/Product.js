import React from 'react'
import cx from 'classnames'
import Message from '@santiment-network/ui/Message'
import styles from './Product.module.scss'

const ProductItem = ({
  className,
  product: { to, img, onClick, title, label, isSelected, description },
}) => {
  const Wrapper = ({ children, className }) =>
    onClick ? (
      <span className={className} onClick={onClick}>
        {children}
      </span>
    ) : (
      <a
        className={className}
        href={!isSelected ? to : '/'}
        target={!isSelected ? '_blank' : ''}
        rel={!isSelected ? 'noopener noreferrer' : ''}
      >
        {children}
      </a>
    )
  return (
    <Wrapper
      className={cx(
        styles.wrapper,
        isSelected && styles.wrapper__selected,
        className
      )}
    >
      <div className={styles.product}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={img} alt={title} />
        </div>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
          {label && (
            <Message className={styles.label} variant="warn">
              SAN chain support soon
            </Message>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductItem
