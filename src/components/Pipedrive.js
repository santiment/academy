import React, { useState } from "react"
import Button from "@santiment-network/ui/Button"
import Dialog from "@santiment-network/ui/Dialog"
import cx from "classnames"
import Loader from "./Loader"
import styles from "./Pricing/index.module.scss"

function useFormLoading() {
  const [loading, setLoading] = useState(false)
  function toggleLoading() {
    setLoading(state => !state)
  }
  return [loading, toggleLoading]
}

const Pipedrive = ({ title, label, src }) => {
  const [loading, toggleLoading] = useFormLoading()

  return (
    <Dialog
      title="Contact Information"
      classes={{ dialog: styles.dialog }}
      trigger={
        <Button className={styles.link} fluid border accent="blue">
          {label}
        </Button>
      }
      onOpen={toggleLoading}
    >
      <div className={styles.dialog__content}>
        <div
          className={cx(
            styles.dialog__loading,
            !loading && styles.dialog__loading_end
          )}
        >
          <Loader />
        </div>
        <iframe
          title={title}
          height="100%"
          width="100%"
          frameBorder="0"
          src={src}
          onLoad={toggleLoading}
        />
      </div>
    </Dialog>
  )
}

export default Pipedrive
