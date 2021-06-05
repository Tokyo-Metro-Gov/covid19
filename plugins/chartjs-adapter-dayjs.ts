import 'dayjs/locale/en'
import 'dayjs/locale/ja'
import 'dayjs/locale/ko'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/th'
import 'dayjs/locale/vi'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/zh-tw'

import { NuxtAppOptions } from '@nuxt/types'
import { _adapters } from 'chart.js'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

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
  year: 'YYYY',
}

export function useDayjsAdapter(nuxtI18n: NuxtAppOptions['i18n']) {
  dayjs.extend(customParseFormat)

  // set locale when page onload
  setLocale(nuxtI18n.locale)
  nuxtI18n.onLanguageSwitched = (_: string, newLocale: string) => {
    setLocale(newLocale)
  }

  _adapters._date.override({
    // _id: 'dayjs', for debug

    formats() {
      return DEFAULT_FORMATS
    },

    parse(time: any, format: any) {
      const value = format ? dayjs(time, format) : dayjs(time)

      return value.isValid() ? value.valueOf() : null
    },

    format(time: any, format: any) {
      return dayjs(time).format(format)
    },

    add(time, amount, unit): any {
      return dayjs(time).add(amount, unit as dayjs.OpUnitType)
    },

    diff(max: any, min: any, unit: any) {
      return dayjs(max).diff(dayjs(min), unit)
    },

    startOf(time, unit, _): any {
      return dayjs(time).startOf(unit as dayjs.OpUnitType)
    },

    endOf(time, unit): any {
      return dayjs(time).endOf(unit as dayjs.OpUnitType)
    },
  })
}

function setLocale(newLocale: string) {
  let locale = newLocale

  if (locale.includes('ja')) {
    locale = 'ja'
  }

  dayjs.locale(locale)
}
