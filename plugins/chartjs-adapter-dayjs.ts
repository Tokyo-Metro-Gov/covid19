import { _adapters } from 'chart.js'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/ja'

const DEFAULT_FORMATS = {
  datetime: 'MMM D, YYYY, h:mm:ss a',
  millisecond: 'h:mm:ss.SSS a',
  second: 'h:mm:ss a',
  minute: 'h:mm a',
  hour: 'hA',
  day: 'MMM D',
  week: 'll',
  month: 'MMM YYYY',
  quarter: '[Q]Q - YYYY',
  year: 'YYYY'
}

export function useDayjsAdapter() {
  dayjs.extend(customParseFormat)

  _adapters._date.override({
    _id: 'dayjs', // for debug

    formats() {
      return DEFAULT_FORMATS
    },

    parse(time, format) {
      const value = format ? dayjs(time, format) : dayjs(time)

      return value.isValid() ? value.valueOf() : null
    },

    format(time, format) {
      return dayjs(time).format(format)
    },

    add(time, amount, unit) {
      return dayjs(time).add(amount, unit)
    },

    diff(max, min, unit) {
      return dayjs(max).diff(dayjs(min), unit)
    },

    startOf(time, unit, _) {
      return dayjs(time).startOf(unit)
    },

    endOf(time, unit) {
      return dayjs(time).endOf(unit)
    }
  })
}
