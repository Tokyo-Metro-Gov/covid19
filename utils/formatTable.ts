import dayjs from 'dayjs'

const headers = [
  { text: '', value: 'ID' },
  { text: '公表日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '濃厚接触者数', value: '濃厚接触者数' }
]

type DataType = {
  ID: string
  リリース日: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  濃厚接触者数: string | null
  [key: string]: any
}

type TableDataType = {
  ID: DataType['ID']
  公表日: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  濃厚接触者数: DataType['濃厚接触者数']
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
      ID: d['ID'],
      公表日: dayjs(d['リリース日']).format('MM/DD') ?? '不明',
      居住地: d['居住地'] ?? '不明',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      濃厚接触者数: (d['濃厚接触者数']==null)?'調査中':d['濃厚接触者数']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  return tableDate
}
