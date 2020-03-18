import dayjs from 'dayjs'

type formatByLocale = {
  [key: string]: string
}

const dateFormatByLocale: formatByLocale = {
  ja: 'YYYY年M月D日',
  en: 'MMM DD, YYYY',
  ko: 'YYYY년 M월 D일',
  'ja-basic': 'YYYY年M月D日',
  'zh-cn': 'YYYY年M月D日',
  'zh-tw': 'YYYY年M月D日'
}

const datetimeFormatByLocale: formatByLocale = {
  ja: 'YYYY年M月D日 HH:mm',
  en: 'MMM DD, YYYY A h:mm',
  ko: 'YYYY년 M월 D일 A h:mm',
  'ja-basic': 'YYYY年M月D日 HH:mm',
  'zh-cn': 'YYYY年M月D日 HH:mm',
  'zh-tw': 'YYYY年M月D日 HH:mm'
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
