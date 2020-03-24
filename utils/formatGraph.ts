type DataType = {
  日付: Date
  小計: number
}

export type GraphDataType = {
  label: string
  transition: number
  weekly: number
  cumulative: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  let daysCount = 1
  let weekSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      const subTotal = d['小計']

      let weekSumLocal = 0
      if (daysCount % 7 === 0) {
        weekSum += subTotal
        weekSumLocal = weekSum
        weekSum = 0
      } else {
        weekSum += subTotal
        weekSumLocal = 0
      }
      daysCount += 1

      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          weekly: weekSumLocal,
          cumulative: patSum
        })
      }
    })
  return graphData
}
