import { convertDateToISO8601Format } from '@/utils/formatDate'

export function formatDate(datestr: string, locale: string): string {
  const ld = new Date(convertDateToISO8601Format(datestr)).toLocaleDateString(
    locale
  )
  return ld
}
