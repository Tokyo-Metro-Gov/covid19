type GraphDataType = {
  日付: Date
  小計: number
}[]

type GraphReturnType = {
  label: string
  transition: number
  cummulative: number
}[]

export default (data: GraphDataType): GraphReturnType => {
  const graphData: GraphReturnType = []
  const today = new Date()
  let patSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      const subTotal = d['小計']
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          cummulative: patSum
        })
      }
    })
  return graphData
}
