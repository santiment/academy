import React from "react"
import Panel from "@santiment-network/ui/Panel/PanelWithHeader"
import styles from "../pages/account.module.scss"

const Settings = props => (
  <Panel
    {...props}
    className={styles.settings}
    headerClassName={styles.settings__header}
    contentClassName={styles.settings__content}
  />
)

Settings.Row = props => <div className={styles.setting} {...props} />

export default Settings
