import React, { useState } from 'react'
import cx from 'classnames'
import Title from '../Title/Title'
import { tr } from '../../utils/translate'
import styles from './index.module.scss'

const questions = [
  {
    question: 'faq.explore',
    answer: (
      <>
        <p className={styles.text}>
          {tr('faq.explore.left')}
          <a
            href='https://help.santiment.net/santiment-getting-started/sanbase-api/using-the-sanbase-api-explorer'
            rel='noopener noreferrer'
            target='_blank'
          >
            {tr('faq.explore.link')}
          </a>
          {tr('faq.explore.right')}
        </p>
      </>
    ),
  },
  {
    question: 'faq.data',
    answer: (
      <>
        <p className={styles.text}>{tr('faq.data.p.1')}</p>
        <p className={styles.text}>{tr('faq.data.p.2')}</p>
        <p className={styles.text}>{tr('faq.data.p.3')}</p>
        <p className={styles.text}>
          {tr('faq.data.left')}
          <a
            href='https://santiment.net/discord'
            rel='noopener noreferrer'
            target='_blank'
          >
            {tr('faq.data.link')}
          </a>
          {tr('faq.data.right')}
        </p>
      </>
    ),
  },
  {
    question: 'faq.slug',
    answer: (
      <>
        <p className={styles.text}>
          {tr('faq.slug.left')}
          <a
            href='https://api.santiment.net/graphiql?variables=%7B%7D&query=query%7BallProjects%20%7B%0A%20%20slug%0A%7D%7D'
            rel='noopener noreferrer'
            target='_blank'
          >
            {tr('faq.slug.link')}
          </a>
          {tr('faq.slug.right')}
        </p>
      </>
    ),
  },
]

export default () => {
  const [opened, setOpened] = useState(null)
  const onQuestionClick = question =>
    setOpened(question === opened ? null : question)

  return (
    <section className={styles.wrapper}>
      <Title>{tr('faq.title')}</Title>
      <ul className={styles.questions}>
        {questions.map(({ question, answer }) => (
          <li
            className={cx(
              styles.question,
              opened === question && styles.opened,
            )}
            onClick={() => onQuestionClick(question)}
            key={question}
          >
            <div className={styles.question__top}>
              <h3 className={styles.question__text}>{tr(question)}</h3>
              <svg
                width='15'
                height='8'
                viewBox='0 0 15 8'
                className={styles.question__arrow}
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M14.313 0.754539C14.5867 1.06549 14.5564 1.5394 14.2455 1.81304L7.99546 7.31304C7.71218 7.56233 7.2878 7.56233 7.00452 7.31304L0.754519 1.81304C0.443563 1.5394 0.413314 1.06549 0.686955 0.754538C0.960596 0.443582 1.43451 0.413333 1.74546 0.686974L7.49999 5.75096L13.2545 0.686974C13.5655 0.413333 14.0394 0.443583 14.313 0.754539Z'
                />
              </svg>
            </div>
            <div className={styles.question__answer}>{answer}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
