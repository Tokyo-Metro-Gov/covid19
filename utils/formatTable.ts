import dayjs from 'dayjs'

const headers = [
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '退院※', value: '退院', align: 'center' }
]

type DataType = {
  リリース日: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  退院: '◯' | null
  [key: string]: any
}

type TableDataType = {
  公表日: string
  居住地: DataType['居住地']
  年代: number
  性別: DataType['性別'] | '不明'
  退院: DataType['退院']
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
    const releaseDate = dayjs(d['リリース日'])
    const TableRow: TableDataType = {
      公表日: releaseDate.isValid() ? releaseDate.format('MM/DD') : '不明',
      居住地: d['居住地'] ?? '調査中',
      年代: ageToNumber(d['年代']),
      性別: d['性別'] ?? '不明',
      退院: d['退院']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets
    .sort((a, b) => dayjs(a.公表日).unix() - dayjs(b.公表日).unix())
    .reverse()
  return tableDate
}

const ageArray = [
  '10歳未満',
  '10代',
  '20代',
  '30代',
  '40代',
  '50代',
  '60代',
  '70代',
  '80代',
  '90代',
  '100歳以上'
]

function ageToNumber(ageString: string | null): number {
  if (ageString === null) {
    return -1
  }
  return ageArray.indexOf(ageString)
}
