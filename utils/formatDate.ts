import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/ja'
import 'dayjs/locale/ko'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/zh-tw'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

/**
 * Get datetime string formatted ISO8601(YYYY-MM-DDTHH:mm:ss)
 *
 * @param dateString - Parsable string by dayjs
 */
export const convertDatetimeToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DDTHH:mm:ss')
}

/**
 * Get date string formatted ISO8601(YYYY-MM-DD)
 *
 * @param dateString- Parsable string by dayjs
 */
export const convertDateToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DD')
}

/**
 * Get date string formatted follow each country's format
 * China, Japan, Korea, Taiwan - YYYY-MM-DD
 * US - MMM DD, YYYY
 *
 * @param dateString- Parsable string by dayjs
 * @param locale- User's language
 */
export const convertDateByCountryPreferTimeFormat = (
  dateString: string,
  locale: string
): string => {
  if (locale === 'ja-basic') {
    return dayjs(dateString)
      .locale('ja')
      .format('LL')
  }
  return dayjs(dateString)
    .locale(locale)
    .format('LL')
}

/**
 * Get datetime string formatted follow each country's format
 * China, Japan, Korea, Taiwan - YYYY-MM-DD HH:MM
 * US - MMM. DD, YYYY, HH:MM
 *
 * @param dateString- Parsable string by dayjs
 * @param locale- User's language
 */
export const convertDateTimeByCountryPreferTimeFormat = (
  dateString: string,
  locale: string
): string => {
  if (locale === 'ja-basic') {
    return dayjs(dateString)
      .locale('ja')
      .format('LLL')
  }
  return dayjs(dateString)
    .locale(locale)
    .format('LLL')
}
