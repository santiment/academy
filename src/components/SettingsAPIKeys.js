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
          <br />
          You can try out queries through our{" "}
          <a
            href="https://api.santiment.net/graphiql?query=%7B%0A%20%20networkGrowth(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22)%20%7B%0A%20%20%20%20newAddresses%0A%20%20%20%20datetime%0A%20%20%7D%0A%7D%0A&variables=%7B%7D"
            target="_blank"
            rel="noopener noreferrer"
          >
            web explorer
          </a>{" "}
          or explore our{" "}
          <a
            href="https://help.santiment.net/collections/1470439-santiment-getting-started#sanbase-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation
          </a>{" "}
          to get started.
        </Label>
      </div>
      <div>
        <div className={styles.setting_apikey}>
          {apikeys.length > 0 ? (
            apikeys.map(apikey => (
              <React.Fragment key={apikey}>
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
                <Button
                  onClick={() => {
                    revokeAPIKey({ variables: { apikey } })
                  }}
                  accent="negative"
                >
                  Revoke
                </Button>
              </React.Fragment>
            ))
          ) : (
            <Button onClick={generateAPIKey} variant="fill" accent="blue">
              Generate
            </Button>
          )}
        </div>
      </div>
    </Settings.Row>
  </Settings>
)

export default SettingsAPIKeys
