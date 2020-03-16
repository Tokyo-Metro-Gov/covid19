import dayjs from 'dayjs'

const LOCALE_EN = 'en'
const DATE_FORMAT_EN = 'MMM DD, YYYY'
const DATETIME_FORMAT_EN = 'MMM. DD, YYYY, HH:MM'
const DATE_FORMAT = 'YYYY-MM-DD'
const DATETIME_FORMAT = 'YYYY-MM-DD HH:MM'

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
  if (locale === LOCALE_EN) {
    return dayjs(dateString).format(DATE_FORMAT_EN)
  }
  return dayjs(dateString).format(DATE_FORMAT)
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
  if (locale === LOCALE_EN) {
    return dayjs(dateString).format(DATETIME_FORMAT_EN)
  }
  return dayjs(dateString).format(DATETIME_FORMAT)
}
