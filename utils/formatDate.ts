import dayjs from 'dayjs'

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
 * Get date string formatted follow each country's format(YYYY-MM-DD)
 * China, Japan, Korea, Taiwan - YYYY-MM-DD
 * US - MM/DD/YYYY
 *
 * @param dateString- Parsable string by dayjs
 * @param locale- User's language
 */
export const convertDateByCountryPreferTimeFormat = (
  dateString: string,
  locale: string
): string => {
  if (locale === 'en') {
    return dayjs(dateString).format('MMM DD, YYYY')
  }
  return dayjs(dateString).format('YYYY-MM-DD')
}

/**
 * Get date string formatted Simple(YYYY/MM/DD)
 *
 * @param dateString- Parsable string by dayjs
 */
export const convertDateToSimpleFormat = (dateString: string): string => {
  return dayjs(dateString).format('YYYY/MM/DD')
}

/**
 * Get date string complemented year
 *
 * @param dateString- Parsable string by dayjs
 */
export const getComplementedDate = (dateString: string): string => {
  const dates = dateString.split('/')
  if (dates.length !== 2) {
    return dateString
  }
  const month = Number(dates[0])
  const date = Number(dates[1])
  const today = new Date()
  const currentMonth = today.getMonth() + 1
  const currentDate = today.getDate()
  let targetYear = today.getFullYear()

  if (currentMonth < month || (currentMonth === month && currentDate < date)) {
    targetYear -= 1
  }

  return `${targetYear}-${month}-${date}`
}

/**
 * Get dayjs object from date string
 *
 * @param dateString- Parsable string by dayjs
 */
export const getDayjsObject = (dateString: string): dayjs.Dayjs => {
  return dayjs(getComplementedDate(dateString))
}
