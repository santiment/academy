import React, { useState, useEffect } from "react"
import cx from "classnames"
import styles from "./AiInputWrapper.module.scss"
import turleImg from "./tutle-waving.svg"

const AiInputPlaceholder = () => (
  <div className="ai-input-placeholder">
    <h1 className="mb-8 text-center text-3xl text-rhino">
      Hi, I’m Turtoshi — your AI guide to Academy
    </h1>
    <div className="mx-auto max-w-[600px] items-center">
      <label className="relative mt-3 flex items-center mb-3">
        <div className="group relative flex fill-waterloo qa-academy-border-gradient flex-1 items-center overflow-hidden overscroll-auto rounded-lg pr-14 border-2 border-transparent py-3 focus-within:border-transparent hover:border-transparent bg-white placeholder-casper outline-none focus-within:fill-waterloo [&amp;&gt;svg]:bottom-5 sm:h-[88px] sm:items-start sm:px-3 sm:py-2 sm:pr-[50px]">
          <textarea
            rows="1"
            type="text"
            placeholder="Ask AI..."
            className="w-full rounded-md bg-transparent outline-none placeholder:text-waterloo resize-none py-0 pr-0 sm:pl-0 sm:h-full max-h-[72px] text-sm pl-4"
          ></textarea>
        </div>
      </label>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          className="group/button flex transition-colors items-center cursor-pointer gap-2 rounded-md border bg-white fill-waterloo hover:bg-athens border-porcelain text-sm p-2"
        >
          Which are the metrics Santiment is known for?
        </button>
        <button
          type="button"
          className="group/button flex transition-colors items-center cursor-pointer gap-2 rounded-md border bg-white fill-waterloo hover:bg-athens border-porcelain text-sm p-2"
        >
          How can I change my subscription?
        </button>
        <button
          type="button"
          className="group/button flex transition-colors items-center cursor-pointer gap-2 rounded-md border bg-white fill-waterloo hover:bg-athens border-porcelain text-sm p-2"
        >
          Where can I find the TVL metric?
        </button>
        <button
          type="button"
          className="group/button flex transition-colors items-center cursor-pointer gap-2 rounded-md border bg-white fill-waterloo hover:bg-athens border-porcelain text-sm p-2"
        >
          How can I use MVRV to identify tops and bottoms?
        </button>
      </div>
    </div>
  </div>
)

const AiInputWrapper = () => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div className={cx(styles.container)}>
      <img className={cx(styles.turtle)} src={turleImg} alt="" />

      {isHydrated ? <ai-input></ai-input> : <AiInputPlaceholder />}
    </div>
  )
}

export default AiInputWrapper
