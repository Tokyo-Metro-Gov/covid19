import dayjs from 'dayjs'

type formatByLocale = {
  [key: string]: string
}

const dateFormatByLocale: formatByLocale = {
  ja: 'YYYY年 MM月 DD日',
  en: 'MMM DD, YYYY',
  ko: 'YYYY년 MM월 DD일',
  'ja-basic': 'YYYY年 MM月 DD日',
  'zh-cn': 'YYYY年 MM月 DD日',
  'zh-tw': 'YYYY年 MM月 DD日'
}

const datetimeFormatByLocale: formatByLocale = {
  ja: 'YYYY年 MM月 DD日 HH:MM',
  en: 'MMM DD, YYYY HH:MM',
  ko: 'YYYY년 MM월 DD일 HH:MM',
  'ja-basic': 'YYYY年 MM月 DD日',
  'zh-cn': 'YYYY年 MM月 DD日 HH:MM',
  'zh-tw': 'YYYY年 MM月 DD日 HH:MM'
}

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
  return dayjs(dateString).format(dateFormatByLocale[locale])
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
  return dayjs(dateString).format(datetimeFormatByLocale[locale])
}
