import React, { useState } from "react"
import { replace } from "gatsby"
import Panel from "@santiment-network/ui/Panel/Panel"
import Button from "@santiment-network/ui/Button"
import Checkboxes from "@santiment-network/ui/Checkboxes"
import styles from "./GDPR.module.scss"

const GDPRPage = ({ togglePrivacyPolicy, privacyPolicyAccepted }) => {
  const [isGDPR, setGDPR] = useState(false)
  const toggleGDPR = () => setGDPR(!isGDPR)

  if (privacyPolicyAccepted) {
    replace("/account")
  }

  return (
    <Panel padding className={styles.wrapper}>
      <h2 className={styles.title}>Last step to your Santiment API key</h2>
      <p>
        Please accept our updated Privacy Policy to gain access to your API key
      </p>
      <Checkboxes
        className={styles.checkbox}
        labelOnRight
        options={["I have read and accept the "]}
        onSelect={toggleGDPR}
      />

      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        href="https://app.santiment.net/privacy-policy"
      >
        Santiment Privacy Policy
      </a>

      <div className={styles.bottom}>
        <Button
          disabled={!isGDPR}
          variant="fill"
          accent="blue"
          onClick={() =>
            togglePrivacyPolicy({
              variables: { privacyPolicyAccepted: true },
            })
          }
        >
          I Agree
        </Button>
      </div>
    </Panel>
  )
}

export default GDPRPage
