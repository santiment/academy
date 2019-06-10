import React from "react"
import Title from "../Title"
import styles from "./index.module.scss"

const onQuestionClick = ({ currentTarget }) => {
  currentTarget.classList.toggle("opened")
}

const questions = [
  {
    question: "What you can currently do with your SAN tokens",
    answer: (
      <>
        <p className={styles.text}>
          There are several use cases for our SAN token; some have already been
          implemented, others are in active development. Let’s cover the most
          important ones below:
        </p>
        <h4 className={styles.heading}>
          Access to historical and real time Santiment data
        </h4>
        <p className={styles.text}>
          Staking (holding) SAN currently gives you access to various parts of
          our platform:
        </p>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            SANgraphs (formerly SANbase Dashboards) are accessed by staking 200
            SAN or more{" "}
          </li>
          <li className={styles.list__item}>
            Full historical data (for all) and real time data (for most) metrics
            on SANbase, SANsheets and API becomes available by staking 1000 SAN.
          </li>
        </ul>
        <p className={styles.text}>
          Santiment data gives you a 360° overview of the entire crypto market
          and its biggest driving forces. This includes:
        </p>

        <ul className={styles.list}>
          <li className={styles.list__item}>
            Custom on-chain metrics for BTC, EOS, ETH and 700+ ERC-20 projects
            (and more being added)
          </li>
          <li className={styles.list__item}>
            Custom social metrics, sourced from 100s of Telegram groups, crypto
            subreddits, private trading channels and more.
          </li>
          <li className={styles.list__item}>
            Development activity metrics for over 970+ crypto projects
          </li>
          <li className={styles.list__item}>
            Basic fundamental data, including price, volume, market cap etc.
          </li>
          <li className={styles.list__item}>
            Custom signals for a variety of on-chain, fundamental and social
            triggers
          </li>
        </ul>

        <h4 className={styles.heading}>Discount Token</h4>

        <p className={styles.text}>
          In the near future, rather than staking, many of our products will
          likely require regular payments.{" "}
        </p>
        <p className={styles.text}>
          The price for accessing various parts of the Santiment platform will
          be discounted for SAN token holders, adjusted for the amount of SAN
          held.
        </p>
        <p className={styles.text}>
          In essence, the discount for SAN holders is currently 100%, as we want
          to encourage people to try our data and provide us with feedback. That
          discount % will be adjusted in the near future, but the fundamental
          idea will remain.
        </p>

        <h4 className={styles.heading}>Token Curation</h4>
        <p className={styles.text}>
          Speaking of utility cases that are currently in development, the SAN
          token will also become the backbone of Santiment's future curation
          market, its community and internal economy.{" "}
        </p>
        <p className={styles.text}>
          We have already begun incentivising some members of our ’SAN Clan’
          (community leaders) to share their insights and custom market analysis
          (all powered by Santiment’s data) by giving away small amounts of SAN.{" "}
        </p>
        <p className={styles.text}>
          Staked SAN tokens and those received as reward by Santiment or its
          community members will also be used for weighted voting within the
          Santiment community.
        </p>
        <p className={styles.text}>
          We envision a 'mana'-like resource that is derived from the amount of
          tokens a user has staked, but replenishes over time and can be used to
          participate in our emerging curation market.
        </p>
      </>
    ),
  },
  {
    question: "How to buy SAN tokens using our Bancor integration",
    answer: (
      <>
        <p className={styles.text}>
          We have recently added an option to trade for SAN tokens straight{" "}
          <a
            href="https://santiment.net/about-santiment/how-to-buy-san/"
            rel="noopener noreferrer"
            target="_blank"
          >
            on our homepage
          </a>
          . The same can be found in your SANbase account settings.
        </p>
        <p className={styles.text}>
          To use it you need to have ETH (or ERC-20 tokens supported by Bancor)
          in your account registered in MetaMask. Please note that MetaMask can
          also be used with Trezor and Ledger hardware wallets. Have your
          MetaMask ready and click on 'Convert'. In the following screen select
          'MetaMask' and click 'Next'.
        </p>
        <p className={styles.text}>
          After clicking 'CONNECT' on the following screen to allow Bancor to
          connect to your MetaMask, you will get to the actual convert-screen
        </p>
        <p className={styles.text}>
          You can adjust the the amount to your liking and click 'Next' to be
          shown a final confirmation screen.
        </p>
        <p className={styles.text}>
          Clicking 'Proceed' will create the actual transaction, which needs to
          be signed by MetaMask.
        </p>
        <p className={styles.text}>
          Check the gas price, confirm that the receiving address is correct -
          and you are ready to hit 'CONFIRM' and get your SAN tokens.
        </p>
        <p className={styles.text}>
          After your transaction has been included in a block, you will find
          your SAN token in your Ethereum account.
        </p>
      </>
    ),
  },
  {
    question:
      "Requesting new projects and their tokens to be displayed on Sanbase",
    answer: (
      <>
        <p className={styles.text}>
          As we are working directly with Ethereum on-chain data, we have the
          ability to display information about any token which contract address
          is known. As there is a lot of noise in the token space though, we
          decided to make only a curated (and ever expanding) list of tokens
          searchable on SANbase.
        </p>
        <p className={styles.text}>
          To request a new token to be added to said list, please use{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeFuCxjJjId98u1Bp3qpXCq2A9YAQ02OEdhOgiM9Hr-rMDxhQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            this form
          </a>
          . We appreciate token holders requesting their favorite tokens, but we
          will favor direct requests from a project's team, especially the ones
          supplying information about their funding.
        </p>
      </>
    ),
  },
]

export default () => (
  <section>
    <Title>Frequently asked questions</Title>
    <ul className={styles.questions}>
      {questions.map(({ question, answer }) => (
        <li
          className={styles.question}
          onClick={onQuestionClick}
          key={question}
        >
          <div className={styles.question__top}>
            <h3 className={styles.question__text}>{question}</h3>
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              className={styles.question__arrow}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.313 0.754539C14.5867 1.06549 14.5564 1.5394 14.2455 1.81304L7.99546 7.31304C7.71218 7.56233 7.2878 7.56233 7.00452 7.31304L0.754519 1.81304C0.443563 1.5394 0.413314 1.06549 0.686955 0.754538C0.960596 0.443582 1.43451 0.413333 1.74546 0.686974L7.49999 5.75096L13.2545 0.686974C13.5655 0.413333 14.0394 0.443583 14.313 0.754539Z"
              />
            </svg>
          </div>
          <div className={styles.question__answer}>{answer}</div>
        </li>
      ))}
    </ul>
  </section>
)
