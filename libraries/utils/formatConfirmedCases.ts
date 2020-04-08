/* eslint-disable camelcase */
import { MainSummary } from '~/libraries/utils/data_converter/convertData'

type ConfirmedCasesType = {
  検査実施人数: number
  陽性者数: number
  入院中: number
  軽症中等症: number | undefined
  重症: number | undefined
  死亡: number
  退院: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: MainSummary) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    陽性者数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    軽症中等症: data.children[0].children[0].children?.[0].value,
    重症: data.children[0].children[0].children?.[1].value,
    死亡: data.children[0].children[2].value,
    退院: data.children[0].children[1].value
  }
  return formattedData
}
