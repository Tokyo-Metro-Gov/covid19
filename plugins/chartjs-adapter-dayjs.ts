import 'dayjs/locale/en'
import 'dayjs/locale/ja'
import 'dayjs/locale/ko'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/th'
import 'dayjs/locale/vi'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/zh-tw'

import { NuxtAppOptions } from '@nuxt/types/app'
import Chart from 'chart.js'
import dayjs, {
  ConfigType,
  extend,
  locale as dayjsLocale,
  ManipulateType,
  OpUnitType,
  QUnitType,
} from 'dayjs'
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
  extend(customParseFormat)

  // set locale when page onload
  setLocale(nuxtI18n.locale)
  nuxtI18n.onLanguageSwitched = (_: string, newLocale: string) => {
    setLocale(newLocale)
  }

  Chart._adapters._date.override({
    _id: 'dayjs', // for debug

    formats() {
      return DEFAULT_FORMATS
    },

    parse(time: ConfigType, format: string | undefined) {
      const value = format ? dayjs(time, format) : dayjs(time)

      return value.isValid() ? value.valueOf() : null
    },

    format(time: ConfigType, format: string) {
      return dayjs(time).format(format)
    },

    add(time: ConfigType, amount: number, unit: OpUnitType) {
      return dayjs(time).add(amount, unit as ManipulateType)
    },

    diff(max: ConfigType, min: ConfigType, unit: QUnitType | OpUnitType) {
      return dayjs(max).diff(dayjs(min), unit)
    },

    startOf(time: ConfigType, unit: OpUnitType, _: null | undefined) {
      return dayjs(time).startOf(unit)
    },

    endOf(time: ConfigType, unit: OpUnitType) {
      return dayjs(time).endOf(unit)
    },
  })
}

function setLocale(newLocale: string) {
  let loc = newLocale

  if (loc.includes('ja')) {
    loc = 'ja'
  }

  dayjsLocale(loc)
}
