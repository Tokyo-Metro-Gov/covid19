import Vue from 'vue'
import dayjs from 'dayjs'

type Header = {
  text: string
  value: string
  align?: string
}

const headers: Header[] = [
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '退院※', value: '退院', align: 'center' },
]

type DataType = {
  公表_年月日: string
  患者_居住地: string | undefined
  患者_年代: string | undefined
  患者_性別: '男性' | '女性' | string
  退院済フラグ: number | undefined
  [key: string]: any
}

type TableDataType = {
  公表日: string
  居住地: DataType['患者_居住地']
  年代: DataType['患者_年代']
  性別: DataType['患者_性別'] | '不明'
  退院: string | undefined
}

type TableDateType = {
  headers: Header[]
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default function (data: DataType[]): TableDateType {
  const datasets = data
    .map((d) => ({
      公表日: formatDateString(d['公表_年月日']) ?? '不明',
      居住地: d['患者_居住地'] ?? '調査中',
      年代: d['患者_年代'] ?? '不明',
      性別: d['患者_性別'] ?? '不明',
      退院: d['退院済フラグ'] ? '〇' : '',
    }))
    .sort((a, b) => dayjs(a.公表日).unix() - dayjs(b.公表日).unix())
  return {
    headers,
    datasets,
  }
}

function formatDateString(date: string): string | undefined {
  const day = dayjs(date)
  if (day.isValid()) {
    return Vue.prototype.$nuxt.$options.i18n.d(day.toDate(), 'dateWithoutYear')
  }
}
