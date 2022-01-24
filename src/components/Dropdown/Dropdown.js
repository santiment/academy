import React, { useState } from "react"
import cx from "classnames"
import ContextMenu from "@santiment-network/ui/ContextMenu"
import Button from "@santiment-network/ui/Button"
import styles from "./Dropdown.module.scss"

const Dropdown = ({ title, children, isDesktop, position = "bottom" }) => {
  const [isOpen, setOpen] = useState(false)
  const close = force => {
    setTimeout(
      () => {
        setOpen(false)
      },
      force ? 0 : 1000
    )
  }
  const open = () => setOpen(true)

  return (
    <>
      {isDesktop && (
        <div onMouseEnter={open} onMouseLeave={close}>
          <ContextMenu
            onMouseLeave={close}
            open={isOpen}
            onClose={() => close(true)}
            onOpen={open}
            trigger={
              <div className={styles.trigger}>
                <Trigger title={title} isOpen={isOpen} />
              </div>
            }
            position={position}
            align="start"
          >
            {children}
          </ContextMenu>
        </div>
      )}
      {!isDesktop && (
        <div>
          <>
            <Trigger
              title={title}
              isOpen={isOpen}
              onClick={() => {
                setOpen(!isOpen)
              }}
            />
            {isOpen && children}
          </>
        </div>
      )}
    </>
  )
}

const Trigger = ({ title, onClick, isOpen }) => {
  return (
    <Button
      onClick={onClick}
      variant="flat"
      as="a"
      className={cx(styles.btn, isOpen && styles.open)}
    >
      {title}
    </Button>
  )
}

export default Dropdown
