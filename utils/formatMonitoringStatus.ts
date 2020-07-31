// monitoring_status.json の型チェック用

type RawDataKey =
  | '（１）新規陽性者数'
  | '（２）新規陽性者数における接触歴等不明率'
  | '（３）週単位の陽性者増加比'
  | '（４）重症患者数'
  | '（５）入院患者数'
  | '（６）PCR検査の陽性率'
  | '（７）受診相談窓口における相談件数'
type StringOrNumber = string | number

type RawData = {
  [key in RawDataKey]: RawDataItemValue
}

interface RawDataItemValue {
  value: StringOrNumber
}

// -----------------------------------------
// フォーマット済み モニタリング指標データ用

type Status = StatusItem[]

interface StatusItem {
  itemName: string
  itemValue: StatusItemValue
}

interface StatusItemValue {
  value: StringOrNumber
  unit: string // 元データに無いので独自に追加
}

/**
 * monitoring_status_json のデータを整形
 *
 * @param data - Raw data
 */
export default (rawDataObj: RawData) => {
  const formattedData: Status = []

  // switch文の代わりに RawDataKey と対応させたオブジェクトを用いる
  const units: { [key in RawDataKey]: string } = {
    '（１）新規陽性者数': '人',
    '（２）新規陽性者数における接触歴等不明率': '%',
    '（３）週単位の陽性者増加比': '',
    '（４）重症患者数': '人',
    '（５）入院患者数': '人',
    '（６）PCR検査の陽性率': '%',
    '（７）受診相談窓口における相談件数': '件.reports',
  }

  for (const [key, rawValue] of Object.entries(rawDataObj)) {
    // 型を絞るために再代入
    const rawDataKey = key as RawDataKey

    // 非camelcaseプロパティの名前変更
    const { value } = rawValue

    formattedData.push({
      itemName: rawDataKey,
      itemValue: {
        value,
        unit: units[rawDataKey],
      },
    })
  }
  return formattedData
}
