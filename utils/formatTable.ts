/* eslint-disable camelcase */
import dayjs from 'dayjs'
import { PatientsDatum } from '@/utils/data_converter/convertData'

const headers = [
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '退院※', value: '退院', align: 'center' }
]

type TableDataType = {
  公表日: string
  居住地: PatientsDatum['居住地'] | '調査中'
  年代: PatientsDatum['年代']
  性別: PatientsDatum['性別'] | '不明'
  退院: PatientsDatum['退院']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: PatientsDatum[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      公表日: dayjs(d['リリース日']).format('MM/DD') ?? '不明',
      居住地: d['居住地'] ?? '調査中',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      退院: d['退院']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.公表日 === b.公表日 ? 0 : a.公表日 < b.公表日 ? 1 : -1
  )
  return tableDate
}
