import { convertDateToISO8601Format } from '@/utils/formatDate'

type DataType = {
  日付: string
  小計: number
}

export type GraphDataType = {
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
    .filter((d) => new Date(d['日付']) < today)
    .forEach((d) => {
      const subTotal = d['小計']
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: convertDateToISO8601Format(d['日付']),
          transition: subTotal,
          cumulative: patSum,
        })
      }
    })
  return graphData
}
