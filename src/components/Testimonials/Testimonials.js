import React, { useRef } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import cx from 'classnames'
import Slider from 'react-slick'
import Title from '../Title/Title'
import FluidItem from './FluidItem/FluidItem'
import { tr } from '../../utils/translate'
import styles from './Testimonials.module.scss'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const pics = [
  'nasty',
  'ibis',
  'dima',
  'yura',
  'thumbs_up',
  'hand',
  'nemo',
  'garry',
]

const testimonials = ['paolo', 'pramesh', 'yan']

const Testimonials = ({ intl }) => {
  const slider = useRef(null)
  const slickNext = () => {
    slider.current.slickNext()
  }
  const slickPrev = () => {
    slider.current.slickPrev()
  }

  return (
    <section className={styles.wrapper}>
      {pics.map(pic => (
        <FluidItem key={pic} pic={pic} />
      ))}
      <Title className={styles.title}>
        {intl.formatMessage({ id: 'testimonials.title.top' })}
        <br />
        {intl.formatMessage({ id: 'testimonials.title.bottom' })}
      </Title>
      <div className={styles.slider}>
        <div
          className={cx(styles.arrow, styles.arrow_left)}
          onClick={slickPrev}
        >
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 11L1 6L6 1'
              stroke='#181B2B'
              strokeWidth='2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <Slider {...settings} ref={slider}>
          {testimonials.map(testi => (
            <div key={testi} className={styles.testimonial}>
              <div className={styles.slider__top}>
                <p className={styles.text}>
                  {tr(`testimonials.${testi}.text`)}
                </p>
              </div>
              <div className={styles.slider__bottom}>
                <div className={cx(styles.pic, styles[`pic_${testi}`])} />
                <h3 className={styles.author}>
                  {tr(`testimonials.${testi}.name`)}
                </h3>
                <h4 className={styles.position}>
                  {tr(`testimonials.${testi}.position`)}
                </h4>
              </div>
            </div>
          ))}
        </Slider>

        <div
          className={cx(styles.arrow, styles.arrow_right)}
          onClick={slickNext}
        >
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 11L6 6L1 1'
              strokeWidth='2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default injectIntl(Testimonials)
