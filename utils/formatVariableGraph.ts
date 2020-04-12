interface DataObject {
  [key: string]: number
}

type GraphDataType = {
  label: string
  transition: number
  cumulative: number
}

export default (data: DataObject) => {
  const graphData: GraphDataType[] = []
  const dataLabels = Object.keys(data)
  let total = 0
  dataLabels.forEach(d => {
    total += data[d]
    graphData.push({
      label: d,
      transition: data[d],
      cumulative: total
    })
  })
  return graphData
}
