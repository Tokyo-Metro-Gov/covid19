import dayjs from 'dayjs'

const headers = [
  { text: '確定日', value: '確定日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' }
  // { text: '入退院状況※', value: '退院', align: 'center' }
]

type DataType = {
  リリース日: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  // 退院: '◯' | null
  [key: string]: any
}

type TableDataType = {
  sortKey: string
  確定日: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  // 退院: DataType['退院']
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
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      sortKey: dayjs(d['確定日']).format('YYYY/MM/DD') ?? '1970/01/01',
      確定日: dayjs(d['確定日']).format('MM/DD') ?? '不明',
      居住地: d['居住地'] ?? '調査中',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明'
      // 退院: d['退院']
    }
    tableDate.datasets.push(TableRow)
  })
  // tableDate.datasets.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  tableDate.datasets
    .sort((a, b) => dayjs(a.sortKey).unix() - dayjs(b.sortKey).unix())
    .reverse()
  return tableDate
}
