import React from "react"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import Button from "@santiment-network/ui/Button"
import cx from "classnames"
import Pipedrive from "../Pipedrive"
import styles from "./PricingDetails.module.scss"
import pricingStyles from "./index.module.scss"

const table = {
  columns: ["", "Free", "Basic", "Pro", "Premium", "Corporate"],
  rows: [
    {
      group: "Financial data",
      data: [
        { name: "Open/High/Low/Close" },
        {
          name: "Price-volume difference indicator",
        },
      ],
    },
    {
      group: "On-chain data",
      data: [
        { name: "Open/High/Low/Close" },
        {
          name: "Network growth",
        },

        { name: "Token age consumed" },
        { name: "Average token age consumed" },
        { name: "Exchange flow" },
        { name: "Total ERC20 exchange funds flow" },
        { name: "Transaction volume" },
        { name: "Total circulation (beta)" },
        { name: "Velocity of tokens (beta)" },
        { name: "ETH gas used" },
        { name: "Distribution between mining pools" },
        { name: "Top holders percent of total supply" },
        { name: "Percent of total supply on exchanges" },
        { name: "Realized value", checks: [false, false, true, true, true] },
        { name: "MVRV ratio", checks: [false, false, true, true, true] },
        { name: "NVT", checks: [false, false, true, true, true] },
        {
          name: "Daily active deposits",
          checks: [false, false, true, true, true],
        },
      ],
    },
    {
      group: "Social data",
      data: [
        { name: "Dev activity" },
        { name: "Topic search" },
        { name: "Relative social dominance" },
        { name: "Total social volume" },
      ],
    },
  ],
}

const all = [true, true, true, true, true]

export default () => (
  <table className={styles.table}>
    <tbody>
      <tr className={styles.headers}>
        {table.columns.map((column, y) => (
          <th className={styles.head} key={y}>
            {column}
          </th>
        ))}
      </tr>
      {table.rows.map((row, i) => (
        <React.Fragment key={i}>
          <tr>
            <td className={cx(styles.group, styles.cell)}>{row.group}</td>
            <td className={styles.cell} />
            <td className={styles.cell} />
            <td className={styles.cell} />
            <td className={styles.cell} />
            <td className={styles.cell} />
          </tr>
          {row.data.map(({ name, checks }) => (
            <tr key={name}>
              <td className={cx(styles.cell, styles.feature__title)}>{name}</td>
              {(checks || all).map((check, y) => (
                <td key={y} className={cx(styles.cell, styles.feature__cell)}>
                  {check && (
                    <Icon
                      className={styles.feature__check}
                      type="checkmark-round"
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </React.Fragment>
      ))}

      <tr>
        <td />
        <td className={styles.link}>
          <Pipedrive
            title="Free"
            label="Current plan"
            src="https://pipedrivewebforms.com/form/1b8273966098dc4746bb0b4e63d4ac9a4144829"
          />
        </td>
        <td className={styles.link}>
          <Pipedrive
            title="Basic"
            label="Upgrade now"
            src="https://pipedrivewebforms.com/form/bf289352f9c4b07a996b454353fd4dff4144829"
          />
        </td>
        <td className={styles.link}>
          <Pipedrive
            title="Pro"
            label="Upgrade now"
            src="https://pipedrivewebforms.com/form/2562e7ee67e1191d6d6ae934eb8ec1194144829"
          />
        </td>
        <td className={styles.link}>
          <Pipedrive
            title="Premium"
            label="Upgrade now"
            src="https://pipedrivewebforms.com/form/e4053d472913f8b7963b269fb0370f3a4144829"
          />
        </td>
        <td className={styles.link}>
          <Pipedrive
            title="Enterprise"
            label="Contact sale"
            src="https://pipedrivewebforms.com/form/0527db4d781f7c4c0760b7bc7a58549c4144829"
          />
        </td>
      </tr>
    </tbody>
  </table>
)
