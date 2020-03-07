/* eslint-disable camelcase */

import { Json } from '@/data/json'
type DataType = Json.data.main_summary

type ConfirmedCasesType = {
  [attribute: string]: number
}

export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    陽性物数: data.children![0].value,
    入院中: data.children![0].children![0].value,
    軽症中等症: data.children![0].children![0].children![0].value,
    重症: data.children![0].children![0].children![1].value,
    死亡: data.children![0].children![2].value,
    退院: data.children![0].children![1].value
  }
  return formattedData
}
