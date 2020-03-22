/* eslint-disable @typescript-eslint/no-unused-vars */
import { _adapters } from 'chart.js'

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

_adapters._date.override({
  _id: 'dayjs', // for debug

  formats() {
    return DEFAULT_FORMATS
  },

  parse(value, fmt) {
    // TOOD
    return null
  },

  format(time, fmt) {
    // TODO
    return null
  },

  add(time, amount, unit) {
    // TODO
    return null
  },

  diff(max, min, unit) {
    // TODO
    return null
  },

  startOf(time, unit, weekday) {
    // TODO
    return null
  },

  endOf(time, unit) {
    // TODO
    return null
  }
})
