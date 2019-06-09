import React, { useRef } from "react"
import Icon from "@santiment-network/ui/Icon"
import cx from "classnames"
import Slider from "react-slick"
import Title from "../Title"
import styles from "./Testimonials.module.scss"

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const testimonials = [
  {
    author: "Steven Quinn",
    text:
      "SanAPI is one of the most comprehensive crypto APIs on the market. For us, it is incredibly easy to fetch various data sets like on-chain, social media and development info directly to Bitfinex through their unified API and across different blockchains. The Santiment team has worked hard on creating a stable, reliable and all-inclusive data source for crypto, and they’ve more than delivered.",
  },
  {
    author: "Steven Quinn",
    text:
      "SanAPI is one of the most comprehensive crypto APIs on the market. For us, it is incredibly easy to fetch various data sets like on-chain, social media and development info directly to Bitfinex through their unified API and across different blockchains. The Santiment team has worked hard on creating a stable, reliable and all-inclusive data source for crypto, and they’ve more than delivered.",
  },
]

const Testimonials = () => {
  const slider = useRef(null)
  const slickNext = () => {
    slider.current.slickNext()
  }
  const slickPrev = () => {
    slider.current.slickPrev()
  }

  return (
    <section>
      <Title className={styles.title}>
        What people
        <br />
        are saying
      </Title>
      <div className={styles.slider}>
        <div
          className={cx(styles.arrow, styles.arrow_left)}
          onClick={slickPrev}
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 11L1 6L6 1"
              stroke="#181B2B"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Slider {...settings} ref={slider}>
          {testimonials.map(({ author, text }, i) => (
            <div key={i} className={styles.testimonial}>
              <div className={styles.slider__top}>
                <p className={styles.text}>{text}</p>
              </div>
              <div className={styles.slider__bottom}>
                {/* <img alt="" src=""/> */}
                <h3 className={styles.author}>{author}</h3>
              </div>
            </div>
          ))}
        </Slider>

        <div
          className={cx(styles.arrow, styles.arrow_right)}
          onClick={slickNext}
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L6 6L1 1"
              stroke="#181B2B"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
