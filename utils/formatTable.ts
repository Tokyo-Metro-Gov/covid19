const headers = [
  { text: '日付', value: 'time' },
  { text: '居住地', value: 'residence' },
  { text: '年代', value: 'age' },
  { text: '性別', value: 'gender' }
]

type DataType = {
  リリース日: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性'
  [key: string]: any
}

type TableDataType = {
  date: Date,
  time: number,
  residence: DataType['居住地']
  age: DataType['年代']
  gender: DataType['性別'] | '不明'
}

export default (data: DataType[]) => {
  const datasets: TableDataType[] = data.map(item => {
    const date = new Date(item['リリース日'])
    return {
      date,
      time: date.getTime(),
      residence: item['居住地'] ?? '不明',
      age: item['年代'] ?? '不明',
      gender: item['性別'] ?? '不明'
    }
  })
  return {
    headers,
    datasets
  }
}
