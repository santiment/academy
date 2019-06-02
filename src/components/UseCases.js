import React from "react"
import Title from "./Title"
import Subtitle from "./Subtitle"
import styles from "./UseCases.module.scss"

const cases = [
  {
    title: "First mover advantage",
    icon: (
      <svg
        className={styles.case__icon}
        width="54"
        height="59"
        viewBox="0 0 54 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41524 17.5359C0.267763 34.4276 8.94871 49.3004 20.1295 50.6098C31.3104 51.9192 30.5419 35.6695 45.5567 27.6708C60.5715 19.6721 41.5766 5.42884 31.4927 3.17365C21.4088 0.918462 2.56272 0.64414 1.41524 17.5359Z"
          fill="#68DBF4"
        />
        <path
          d="M39.3546 40.1579C36.7722 36.5757 32.0479 36.0578 27.8858 39.8735C23.7238 43.6891 19.101 45.8168 22.0795 49.6889C25.0579 53.5609 32.727 55.3575 36.3761 53.8587C40.0252 52.3598 41.937 43.74 39.3546 40.1579Z"
          fill="#5275FF"
        />
        <path
          d="M10 28.6299C10 18.7299 18.1 10.6299 28 10.6299C35.02 10.6299 41.14 14.6799 44.11 20.5299"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.9999 28.6301C45.9999 38.5301 37.8999 46.6301 27.9999 46.6301C20.9799 46.6301 14.8599 42.5801 11.8899 36.7301"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.0001 34.03C30.9824 34.03 33.4001 31.6123 33.4001 28.63C33.4001 25.6476 30.9824 23.23 28.0001 23.23C25.0178 23.23 22.6001 25.6476 22.6001 28.63C22.6001 31.6123 25.0178 34.03 28.0001 34.03Z"
          fill="white"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.6399 10L44.1999 20.71L33.4899 19.27"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.36 47.2601L11.8 36.55L22.51 37.9901"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc:
      "On-chain data is collected directly from running nodes, not 3rd parties, making it faster and more reliable, by eliminating another potential point of failure.",
  },
  {
    title: "Backtesting strategies",
    icon: (
      <svg
        className={styles.case__icon}
        width="53"
        height="64"
        viewBox="0 0 53 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5395 56.1004C9.02041 54.5316 1.64093 42.7097 6.53342 26.6784C11.4259 10.6471 24.6673 4.53857 36.8337 6.32104C49.0001 8.10352 54.5001 23.104 44.0001 33.1038C33.5 43.1035 30.0586 57.6692 19.5395 56.1004Z"
          fill="#68DBF4"
        />
        <path
          d="M42.2578 52.2587C50.7992 52.3537 52.3974 42.4164 44.3977 39.8975C36.398 37.3786 27.5035 39.0982 24.4493 43.2734C21.3951 47.4486 21.4733 52.8677 26.3656 55.3135C31.2578 57.7592 33.7164 52.1638 42.2578 52.2587Z"
          fill="#5275FF"
        />
        <path
          d="M29.2123 30.5453L22.6667 24"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 37C34.2091 37 36 35.2091 36 33C36 30.7909 34.2091 29 32 29C29.7909 29 28 30.7909 28 33C28 35.2091 29.7909 37 32 37Z"
          fill="white"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.4121 22.3636C29.1503 21.6697 31.0319 21.4121 32.8926 21.6133C34.7534 21.8144 36.5365 22.4682 38.0862 23.5175C39.6359 24.5668 40.9051 25.9797 41.7828 27.6326C42.6605 29.2856 43.12 31.1284 43.1212 33"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.2122 32.9999C20.2109 31.5425 20.4886 30.0983 21.0303 28.7454"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.6666 51C41.6078 51 49.6666 42.9411 49.6666 33C49.6666 23.0589 41.6078 15 31.6666 15C21.7255 15 13.6666 23.0589 13.6666 33C13.6666 42.9411 21.7255 51 31.6666 51Z"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc:
      "Use GraphQL for freedom and flexibility, or SanPy, our custom Python wrapper that is ideal for data scientists. Our SanSDK in GitHub includes examples for Ruby, R and more soon!",
  },
  {
    title: "Third-party Integration",
    icon: (
      <svg
        className={styles.case__icon}
        width="60"
        height="50"
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.35 0.906669C47.1162 2.15115 49.0923 19.3587 41.9324 27.0828C34.7726 34.8069 30.5908 50.118 15.0755 46.3601C-0.439812 42.6023 -1.56756 27.9093 1.16133 19.8386C3.89022 11.7678 21.5838 -0.337811 34.35 0.906669Z"
          fill="#68DBF4"
        />
        <path
          d="M52.8083 29.4478C55.546 23.0038 54.4642 16.099 48.4648 14.6036C42.4654 13.1083 39.6935 16.4901 38.068 20.8477C36.4426 25.2053 36.2865 29.5376 40.2873 33.9965C44.2881 38.4554 50.0706 35.8917 52.8083 29.4478Z"
          fill="#5275FF"
        />
        <path
          d="M34.75 29.125H20.75V37.875H34.75V29.125Z"
          fill="white"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.25 29.125V23.875C24.2528 22.9476 24.6224 22.059 25.2782 21.4032C25.934 20.7474 26.8226 20.3778 27.75 20.375V20.375C28.6774 20.3778 29.566 20.7474 30.2218 21.4032C30.8776 22.059 31.2472 22.9476 31.25 23.875V29.125"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.5 32.625C43.5 36.8022 41.8406 40.8082 38.8869 43.7619C35.9332 46.7156 31.9272 48.375 27.75 48.375C23.5728 48.375 19.5668 46.7156 16.6131 43.7619C13.6594 40.8082 12 36.8022 12 32.625V15.125L27.75 11.625L43.5 15.125V32.625Z"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    desc:
      "The SanAPI is SSL-encrypted (signed API requests, generated API Key) and low-latency. Our robust CDN connects you to the API server closest to you.",
  },
]

export default () => (
  <section id="use-cases">
    <Title>Use cases</Title>
    <Subtitle className={styles.subtitle}>
      Santiment is more than just an analytics platform.
      <br />
      With our data, you can predict changes in the market
    </Subtitle>

    <ul className={styles.cases}>
      {cases.map(({ icon, title, desc }) => (
        <li className={styles.case} key={title}>
          <Title small className={styles.case__title}>
            {icon}
            {title}
          </Title>
          <Subtitle className={styles.case__desc}>{desc}</Subtitle>
        </li>
      ))}
    </ul>
  </section>
)
