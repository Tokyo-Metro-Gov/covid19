type DataType = {
  attr: '検査実施人数'
  value: number | null
  children: [
    {
      attr: '陽性患者数'
      value: number | null
      children: [
        {
          attr: '入院中'
          value: number | null
          children: [
            {
              attr: '軽症・中等症'
              value: number | null
            },
            {
              attr: '重症'
              value: number | null
            }
          ]
        },
        {
          attr: '退院'
          value: number | null
        },
        {
          attr: '死亡'
          value: number | null
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number | null
  陽性物数: number | null
  入院中: number | null
  軽症中等症: number | null
  重症: number | null
  死亡: number | null
  退院: number | null
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    陽性物数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    軽症中等症: data.children[0].children[0].children[0].value,
    重症: data.children[0].children[0].children[1].value,
    死亡: data.children[0].children[2].value,
    退院: data.children[0].children[1].value
  }
  return formattedData
}
