import dayjs from 'dayjs'

const headers = [
  { text: '日付', value: '日付' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' }
]

// #TODO: データソースの中に10歳未満と100歳以上のデータの対応
const ageSummary: { [index: string]: [number, number, number] } = {
  '10歳未満': [0, 0, 0],
  '10代': [0, 0, 0],
  '20代': [0, 0, 0],
  '30代': [0, 0, 0],
  '40代': [0, 0, 0],
  '50代': [0, 0, 0],
  '60代': [0, 0, 0],
  '70代': [0, 0, 0],
  '80代': [0, 0, 0],
  '90代': [0, 0, 0],
  '100歳以上': [0, 0, 0],
  不明: [0, 0, 0]
}

type DataType = {
  リリース日: Date
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性'
  [key: string]: any
}

type TableDataType = {
  日付: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
}

type TableDateType = {
  headers: typeof headers
  ageSummary: typeof ageSummary
  datasets: TableDataType[]
}

export default (data: DataType[], discharge: Boolean = false) => {
  // TODO: 退院者データの処理(フォーマット)
  if (discharge) {
  }
  const tableDate: TableDateType = {
    headers,
    ageSummary,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      日付: dayjs(d['リリース日']).format('MM/DD') ?? '不明',
      居住地: d['居住地'] ?? '不明',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明'
    }
    ageSummary[d['年代'] ?? '不明'][
      d['性別'] === '男性' ? 0 : d['性別'] === '女性' ? 1 : 2
    ]++
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  return tableDate
}
