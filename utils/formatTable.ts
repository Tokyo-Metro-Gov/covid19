type Header = {
  text: string
  value: string
  align?: string
  type?: 'date' | 'age'
}

const headers: Header[] = [
  { text: '公表日', value: '公表日', type: 'date' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代', type: 'age' },
  { text: '性別', value: '性別' },
  { text: '職業', value: '職業', align: 'center' },
  { text: '接触歴', value: '接触歴', align: 'center' },
  { text: '発症日', value: '発症日', type: 'date' },
  { text: '確定日', value: '確定日', type: 'date' },
  { text: '退院', value: '退院', align: 'center' },
]

export type DataType = {
  公表_年月日: string
  患者_居住地: string | undefined
  患者_年代: string | undefined
  患者_性別: '男性' | '女性' | string
  患者_職業: string | undefined
  患者_接触歴の有無フラグ: number | undefined
  発症_年月日: string | undefined
  確定_年月日: string | undefined
  退院済フラグ: number | undefined
  [key: string]: any
}

type TableDataType = {
  公表日: string
  居住地: DataType['患者_居住地']
  年代: DataType['患者_年代']
  性別: DataType['患者_性別'] | '不明'
  職業: DataType['患者_職業']
  接触歴: string | undefined
  発症日: DataType['発症_年月日']
  確定日: DataType['確定_年月日']
  退院: string | undefined
}

export type TableDateType = {
  headers: Header[]
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export function formatTable(data: DataType[]): TableDateType {
  const datasets = data.map((d) => ({
    公表日: d['公表_年月日'] ?? '不明',
    居住地: d['患者_居住地'] ?? '調査中',
    年代: d['患者_年代'] ?? '不明',
    性別: d['患者_性別'] ?? '不明',
    職業: d['患者_職業'] ?? '-',
    接触歴: d['患者_接触歴の有無フラグ'] ? '〇' : '',
    発症日: d['発症_年月日'] ?? '',
    確定日: d['確定_年月日'] ?? '',
    退院: d['退院済フラグ'] ? '〇' : '',
  }))
  return {
    headers,
    datasets,
  }
}
