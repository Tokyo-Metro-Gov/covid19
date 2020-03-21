type DataType = {
  attr: '累計人数'
  value: number
  children: [
    {
      attr: '合計件数'
      value: number
      children: [
        {
          attr: '都内発生件数'
          value: number
        },
        {
          attr: 'その他件数'
          value: number
        }
      ]
    }
  ]
}

type TestedCasesType = {
  累計人数: number
  合計件数: number
  都内発生件数: number
  その他件数: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: TestedCasesType = {
    累計人数: data.value,
    合計件数: data.children[0].value,
    都内発生件数: data.children[0].children[0].value,
    その他件数: data.children[0].children[1].value
  }
  return formattedData
}
