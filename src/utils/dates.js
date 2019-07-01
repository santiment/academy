const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const SHORT_MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const WEEK_DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const SHORT_WEEK_DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/**
 *
 * @param {Date} date - Date object to get formats from
 *
 * @description
 * Format tokens are similar to the "moment.js"
   *
   * @example
   * // Getting formats for current date
   * const {dddd, D, MMMM, YYYY} = getDateFormats(new Date())
   * console.log(`${dddd}, ${D} ${MMMM} ${YYYY}`)
   * //=> "Wednesday, 17 April 2019"

 */
export const getDateFormats = date => {
  const month = date.getMonth()
  const M = month + 1
  const D = date.getDate()
  const d = date.getDay()
  const YYYY = date.getFullYear()

  return {
    D,
    DD: D < 10 ? `0${D}` : D,
    ddd: SHORT_WEEK_DAY_NAMES[d],
    dddd: WEEK_DAY_NAMES[d],
    M,
    MM: M < 10 ? `0${M}` : M,
    MMM: SHORT_MONTH_NAMES[month],
    MMMM: MONTH_NAMES[month],
    YYYY,
    YY: YYYY.toString().slice(-2),
  }
}

export const getTimeFormats = date => {
  const m = date.getMinutes()
  const s = date.getSeconds()
  const H = date.getHours()

  return {
    H,
    HH: H < 10 ? `0${H}` : H,
    m,
    mm: m < 10 ? `0${m}` : m,
    s,
    ss: s < 10 ? `0${s}` : s,
  }
}

export const getUTCTimeFormats = date => {
  const m = date.getUTCMinutes()
  const s = date.getUTCSeconds()
  const H = date.getUTCHours()

  return {
    H,
    HH: H < 10 ? `0${H}` : H,
    m,
    mm: m < 10 ? `0${m}` : m,
    s,
    ss: s < 10 ? `0${s}` : s,
  }
}
