type DataType = {
  attr: '累計人数'
  value: number
  children: [
    {
      attr: '合計件数'
      value: number
      children: [
        {
          attr: '健康安全研究センター実施分'
          value: number
        },
        {
          attr: '医療機関等実施分'
          value: number
        }
      ]
    }
  ]
}

type TestedCasesType = {
  累計人数: number
  合計件数: number
  健康安全研究センター実施分: number
  医療機関等実施分: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  return {
    累計人数: data.value,
    合計件数: data.children[0].value,
    健康安全研究センター実施分: data.children[0].children[0].value,
    医療機関等実施分: data.children[0].children[1].value,
  } as TestedCasesType
}
