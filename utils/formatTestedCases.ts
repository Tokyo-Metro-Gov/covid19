/* eslint-disable camelcase */
import { InspectionStatusSummary } from '@/utils/data_converter/convertData'

type TestedCasesType = {
  累計人数: number
  合計件数: number
  都内発生件数: number | undefined
  その他件数: number | undefined
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: InspectionStatusSummary) => {
  const formattedData: TestedCasesType = {
    累計人数: data.value,
    合計件数: data.children[0].value,
    都内発生件数: data.children[0].children?.[0].value,
    その他件数: data.children[0].children?.[1].value
  }
  return formattedData
}
