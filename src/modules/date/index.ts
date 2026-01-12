import {
  ONE_DAY_IN_MS,
  ONE_HOUR_IN_MS,
  ONE_MINUTE_IN_MS,
  ONE_MONTH_IN_MS,
} from 'san-webkit-next/utils/dates'

enum TimeType {
  Minute = 'minute',
  Hour = 'hour',
  Day = 'day',
  Month = 'month',
  Year = 'year',
}
const TimeTypeDivider = {
  [TimeType.Minute]: ONE_MINUTE_IN_MS,
  [TimeType.Hour]: ONE_HOUR_IN_MS,
  [TimeType.Day]: ONE_DAY_IN_MS,
  [TimeType.Month]: ONE_MONTH_IN_MS,
}
export function dateDifferenceInWords(from: Date, to = new Date()): string {
  const diff = +to - +from
  if (diff < ONE_MINUTE_IN_MS) return 'a few seconds ago'

  let amount = 0
  let timeType: TimeType

  if (diff < ONE_HOUR_IN_MS) timeType = TimeType.Minute
  else if (diff < ONE_DAY_IN_MS) timeType = TimeType.Hour
  else if (diff < ONE_MONTH_IN_MS) timeType = TimeType.Day
  else timeType = TimeType.Month

  amount = Math.floor(diff / TimeTypeDivider[timeType])

  if (timeType === TimeType.Month && amount > 11) {
    timeType = TimeType.Year
    amount = Math.floor(amount / 12)
  }

  if (amount > 1) (timeType as string) += 's'

  return `${amount} ${timeType} ago`
}
