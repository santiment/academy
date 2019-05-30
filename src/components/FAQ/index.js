import React from "react"
import Title from "../Title"
import styles from "./index.module.scss"

const onQuestionClick = ({ currentTarget }) => {
  currentTarget.classList.toggle("opened")
}

const questions = [
  { question: "What you can currently do with your SAN tokens", answer: "" },
  {
    question: "How to buy SAN tokens using our Bancor integration",
    answer: "",
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
          To request a new token to be added to said list, please use this form.
          We appreciate token holders requesting their favorite tokens, but we
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
