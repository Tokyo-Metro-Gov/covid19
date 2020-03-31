type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '入院中'
          value: number
          children: [
            {
              attr: '軽症・中等症'
              value: string
            },
            {
              attr: '重症'
              value: string
            }
          ]
        },
        {
          attr: '退院'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number
  陽性者数: number
  入院中: number
  軽症中等症: string
  重症: string
  死亡: number
  退院: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    陽性者数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    // 軽症中等症: data.children[0].children[0].children[0].value,
    軽症中等症: '-',
    // 重症: data.children[0].children[0].children[1].value,
    重症: '-',
    死亡: data.children[0].children[2].value,
    退院: data.children[0].children[1].value
  }
  return formattedData
}
