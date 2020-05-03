type DataType = {
  日付: Date
  小計: number
}

type GraphDataType = {
  bgColor: string
  label: string
  transition: number
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
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      const subTotal = d['小計']
      if (!isNaN(subTotal)) {
        const col =
          date.getDay() === 0
            ? `#FF0000`
            : date.getDay() === 6
            ? `#3CB371`
            : `#3b64b0`
        patSum += subTotal
        graphData.push({
          bgColor: col,
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          cumulative: patSum
        })
      }
    })
  return graphData
}
