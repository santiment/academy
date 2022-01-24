import React, { useState } from "react"
import cx from "classnames"
import GA from "react-ga"
import styles from "./Reactions.module.scss"

const REACTIONS = [
  {
    type: "like",
    icon: (
      <svg
        width="30"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M16 28h-2A14 14 0 010 14.1V14A14 14 0 0114 0h2a14 14 0 0114 13.9v.2A14 14 0 0116 28z"
            fill="#FFDA00"
          />
          <path
            d="M1.9 10.8h-.1a.5.5 0 01-.4-.6c1.2-4 4.3-7.2 8.2-8.6.3-.1.5 0 .6.3.1.2 0 .4-.3.5a12.2 12.2 0 00-7.6 8c0 .3-.2.4-.4.4z"
            fill="#fff"
          />
          <path
            d="M22.2 1.4c3.3 2.5 5.5 6.6 5.5 11v.3a14 14 0 01-14 13.9h-2c-2.2 0-4.3-.5-6.1-1.4A14 14 0 0014 28h2a14 14 0 0014-13.9V14c0-5.5-3.2-10.2-7.8-12.5z"
            fill="#FCB813"
          />
          <path
            d="M9.5 8.7c-.9 0-1.5.7-1.5 1.5v2.2h3v-2.2c0-.8-.7-1.5-1.5-1.5z"
            fill="#3D3813"
          />
          <path
            d="M20.5 8.7c-.8 0-1.5.7-1.5 1.5v2.2h3v-2.2c0-.8-.6-1.5-1.5-1.5z"
            fill="#3D3813"
          />
          <path
            d="M6.7 16.5c0-.1.7 6 8.3 6.2 7.6-.2 8.3-6.3 8.3-6.2-5.5 1.3-11.1 1.3-16.6 0z"
            fill="#3D3813"
          />
          <path
            d="M15 18.8c3.4-.1 5.7-1 7.3-2-4.8 1-9.8 1-14.6 0 1.6 1 3.9 1.9 7.3 2z"
            fill="#fff"
          />
          <path
            d="M20.3 21.1c-1.3-.7-3.2-1.2-5.3-1.2-2 0-4 .5-5.3 1.2a9.7 9.7 0 0010.6 0z"
            fill="#D05628"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h30v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    type: "netral",
    icon: (
      <svg
        width="30"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M16 28h-2A14 14 0 010 14.1V14A14 14 0 0114 0h2a14 14 0 0114 13.9v.2A14 14 0 0116 28z"
            fill="#FFDA00"
          />
          <path
            d="M1.9 10.8h-.1a.5.5 0 01-.4-.6c1.2-4 4.3-7.2 8.2-8.6.3-.1.5 0 .6.3.1.2 0 .4-.3.5a12.2 12.2 0 00-7.6 8c0 .3-.2.4-.4.4z"
            fill="#fff"
          />
          <path
            d="M22.2 1.4c3.3 2.5 5.5 6.6 5.5 11v.3a14 14 0 01-14 13.9h-2c-2.2 0-4.3-.5-6.1-1.4A14 14 0 0014 28h2a14 14 0 0014-13.9V14c0-5.5-3.2-10.2-7.8-12.5z"
            fill="#FCB813"
          />
          <path
            d="M9.5 8.7c-.9 0-1.5.7-1.5 1.5v1.2c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.2c0-.8-.7-1.5-1.5-1.5z"
            fill="#3D3813"
          />
          <path
            d="M20.5 8.7c-.8 0-1.5.7-1.5 1.5v1.2c0 .8.7 1.5 1.5 1.5.9 0 1.6-.7 1.6-1.5v-1.2c0-.8-.7-1.5-1.6-1.5z"
            fill="#3D3813"
          />
          <path
            d="M21.7 18.7H8.2a.7.7 0 01-.6-.7c0-.3.3-.6.6-.6h13.5c.4 0 .7.3.7.6 0 .4-.3.7-.7.7z"
            fill="#3D3813"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h30v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    type: "bad",
    icon: (
      <svg
        width="30"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M16 28h-2A14 14 0 010 14.1V14A14 14 0 0114 0h2a14 14 0 0114 13.9v.2A14 14 0 0116 28z"
            fill="#FFDA00"
          />
          <path
            d="M1.9 10.8h-.1a.5.5 0 01-.4-.6c1.2-4 4.3-7.2 8.2-8.6.3-.1.5 0 .6.3.1.2 0 .4-.3.5a12.2 12.2 0 00-7.6 8c0 .3-.2.4-.4.4z"
            fill="#fff"
          />
          <path
            d="M22.2 1.4c3.3 2.5 5.5 6.6 5.5 11v.3a14 14 0 01-14 13.9h-2c-2.2 0-4.3-.5-6.1-1.4A14 14 0 0014 28h2a14 14 0 0014-13.9V14c0-5.5-3.2-10.2-7.8-12.5z"
            fill="#FCB813"
          />
          <path
            d="M20.9 13.4a2.7 2.7 0 01-2.7-2.6v-.5c0-.3.3-.6.7-.6.4 0 .7.3.7.6v.5c0 .7.5 1.2 1.2 1.2.8 0 1.4-.5 1.4-1.2v-.5c0-.3.3-.6.7-.6.3 0 .7.3.7.6v.5c0 1.4-1.2 2.6-2.7 2.6z"
            fill="#3D3813"
          />
          <path
            d="M9.2 13.4a2.7 2.7 0 01-2.8-2.6v-.5c0-.3.4-.6.7-.6.4 0 .7.3.7.6v.5c0 .7.6 1.2 1.3 1.2.8 0 1.3-.5 1.3-1.2v-.5c0-.3.3-.6.7-.6.4 0 .7.3.7.6v.5c0 1.4-1.1 2.6-2.6 2.6z"
            fill="#3D3813"
          />
          <path
            d="M21 20.9a.7.7 0 01-.6-.5c0-.1-1.4-3-5.4-3s-5.3 2.9-5.4 3c-.1.4-.5.6-.9.4a.7.7 0 01-.3-.9c0-.2 1.6-3.8 6.6-3.8s6.6 3.6 6.7 3.8c.1.3 0 .7-.4.9H21z"
            fill="#3D3813"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h30v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
]

const Reactions = ({ article }) => {
  const [isClicked, setIsClicked] = useState(false)

  const onClick = ({ type, article }) => {
    GA.event({
      category: "Reaction",
      action: `${type} reaction for '${article}' article"`,
    })

    setIsClicked(true)
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.text}>
        {isClicked
          ? "Thank you for your feedback!"
          : "Was this article helpful?"}
      </h4>
      <div className={cx(styles.reactions, isClicked && styles.hide)}>
        {REACTIONS.map(({ icon, type }) => (
          <div
            key={type}
            className={cx(styles.reaction, isClicked && styles.animated)}
            onClick={() => onClick({ type, article })}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reactions
