import React from "react"
import Icon from "@santiment-network/ui/Icon"
import Label from "@santiment-network/ui/Label"
import Button from "@santiment-network/ui/Button"
import copy from "copy-to-clipboard"
import Settings from "./Settings"
import styles from "../pages/account.module.scss"

const SettingsAPIKeys = ({ apikeys = [], generateAPIKey, revokeAPIKey }) => (
  <Settings id="api-keys" header="API keys">
    <Settings.Row>
      <div className={styles.setting__left}>
        <Label>API Keys</Label>
        <Label className={styles.setting__description} accent="waterloo">
          The api key will give you access to the data that requires SAN token
          staking.
          <br />
          The api key can only be used to fetch data and not to execute graphql
          mutations.
        </Label>
      </div>
      <div>
        <div className={styles.setting_apikey}>
          {apikeys.length > 0 ? (
            apikeys.map(apikey => (
              <>
                <div className={styles.apikey}>
                  <input
                    className={styles.apikey__input}
                    defaultValue={apikey}
                    readOnly
                  />
                  <Icon
                    onClick={() => copy(apikey)}
                    type="copy"
                    className={styles.apikey__icon}
                  />
                </div>
                <Button onClick={() => revokeAPIKey(apikey)} accent="negative">
                  Revoke
                </Button>
              </>
            ))
          ) : (
            <Button onClick={generateAPIKey} variant="fill" accent="positive">
              Generate
            </Button>
          )}
        </div>
      </div>
    </Settings.Row>
  </Settings>
)

export default SettingsAPIKeys
