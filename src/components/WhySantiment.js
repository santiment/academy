import React from "react"
import Title from "./Title"
import Subtitle from "./Subtitle"
import Features from "./Features"
import styles from "./WhySantiment.module.scss"

const whys = [
  {
    title: "Always improving",
    icon: (
      <svg
        className={styles.why__icon}
        width="53"
        height="54"
        viewBox="0 0 53 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52 26.6485C50 37.2969 36.5 40.4649 24 46.4993C11.5 52.5338 0 42.0802 0 26.6485C0 11.2167 20.5 -2.49998 32.5 2.50018C44.5 7.50034 54 16 52 26.6485Z"
          fill="#68DBF4"
        />
        <path
          d="M42.5332 25.9092C38.8104 20.7452 28.8343 22.5507 20.6353 22.474C12.4364 22.3973 13.336 34.0671 17.6297 39.6489C21.9234 45.2308 33.0559 51.3288 38.2395 45.6601C43.4231 39.9913 46.2559 31.0732 42.5332 25.9092Z"
          fill="#5275FF"
        />
        <path
          d="M27 1H13L7 23H19L15 40L35 15H23L27 1Z"
          fill="white"
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
    title: "Global scaling",
    icon: (
      <svg
        width="55"
        className={styles.why__icon}
        height="48"
        viewBox="0 0 55 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.4997 24C52.9997 34.4998 41 40.5 27.9996 42.4993C14.9993 44.4987 11.4999 39.1483 7.00001 23.9998C2.50009 8.85133 19 3.24249e-05 32.4999 2.50004C45.9998 5.00004 55.9997 13.5003 54.4997 24Z"
          fill="#68DBF4"
        />
        <path
          d="M34.884 42.4888C38.0756 47.8437 52.0387 44.0267 49.8878 35.3704C47.7369 26.7142 43.9964 22.8439 38.5139 22.3879C33.0313 21.932 26.7949 25.47 26.08 31.8523C25.3651 38.2347 31.6924 37.1338 34.884 42.4888Z"
          fill="#5275FF"
        />
        <path
          d="M1.37587 16.1713C1.13209 15.8266 1.00103 15.4176 1.00001 14.9985C0.998983 14.5794 1.12805 14.1699 1.37015 13.824C3.74445 10.4547 11.3552 1 22.0028 1C32.555 1 40.2183 10.4407 42.6241 13.8175C42.8698 14.1646 43.001 14.5769 43 14.999C42.999 15.4211 42.8658 15.8329 42.6183 16.1788C40.1944 19.5509 32.4719 29 22.0028 29C11.4383 29 3.76832 19.5369 1.37587 16.1713Z"
          fill="white"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="15" r="8" stroke="#181B2B" strokeWidth="2" />
      </svg>
    ),
    desc:
      "Use GraphQL for freedom and flexibility, or SanPy, our custom Python wrapper that is ideal for data scientists. Our SanSDK in GitHub includes examples for Ruby, R and more soon!",
  },
  {
    title: "Python library",
    icon: (
      <svg
        className={styles.why__icon}
        width="59"
        height="58"
        viewBox="0 0 59 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.1994 31.0614C54.4151 40.5614 35.0001 53.2324 20.6994 49.0614C6.39873 44.8904 -2.22805 35.9386 1.5 25.5C5.22805 15.0614 20.1995 -4.43874 37.1994 2.5611C54.1993 9.56095 57.9837 21.5614 56.1994 31.0614Z"
          fill="#68DBF4"
        />
        <path
          d="M48.5245 32.0114C37.0006 30.7103 36.2894 23.5372 28.4248 27.5112C20.5601 31.4853 21.1254 39.1043 25.4191 44.6862C29.7128 50.268 37.5572 52.1843 46.0289 50.6973C54.5006 49.2103 60.0484 33.3124 48.5245 32.0114Z"
          fill="#5275FF"
        />
        <path
          d="M27 1H5C2.79086 1 1 2.79086 1 5V33C1 35.2091 2.79086 37 5 37H27C29.2091 37 31 35.2091 31 33V5C31 2.79086 29.2091 1 27 1Z"
          fill="white"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.6667 14.0908L7.66669 18.9999L12.6667 23.909"
          fill="white"
        />
        <path
          d="M12.6667 14.0908L7.66669 18.9999L12.6667 23.909"
          stroke="#181B2B"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3333 23.909L24.3333 18.9999L19.3333 14.0908"
          fill="white"
        />
        <path
          d="M19.3333 23.909L24.3333 18.9999L19.3333 14.0908"
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
  <section>
    <Title>Made for Developers</Title>
    <Subtitle className={styles.subtitle}>
      Average response time is 3 seconds.
      <br />
      Transactions are added in less than 5 minutes
    </Subtitle>

    <ul className={styles.whys}>
      {whys.map(({ title, icon, desc }) => (
        <li className={styles.why} key={title}>
          <Title className={styles.why__title} small>
            {icon}
            {title}
          </Title>
          <Subtitle className={styles.why__desc}>{desc}</Subtitle>
        </li>
      ))}
    </ul>
  </section>
)
