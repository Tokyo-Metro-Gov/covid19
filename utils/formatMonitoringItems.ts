// monitoring_items.json の型チェック用

type RawDataKey =
  | '(1)新規陽性者数'
  | '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
  | '(3)新規陽性者における接触歴等不明者（人数）'
  | '(3)新規陽性者における接触歴等不明者（増加比）'
  | '(4)PCR・抗原検査（陽性率）'
  | '(4)PCR・抗原検査（検査人数）'
  | '(5)救急医療の東京ルールの適用件数'
  | '(6)入院患者数'
  | '(6)入院患者確保病床数'
  | '(7)重症患者数'
  | '(7)重症患者確保病床数'
type StringOrNumber = string | number

type RawData = {
  [key in RawDataKey]: RawDataItemValue
}

interface RawDataItemValue {
  value: StringOrNumber
}

// -----------------------------------------
// フォーマット済み モニタリング指標データ用

interface StatusItem {
  itemName: string
  itemValue: StatusItemValue
}

interface StatusItemValue {
  value: StringOrNumber
  unit: string // 元データに無いので独自に追加
}

/**
 * monitoring_items_json のデータを整形
 *
 * @param data - Raw data
 */
export default (rawDataObj: RawData) => {
  const formattedData: StatusItem[] = []

  // switch文の代わりに RawDataKey と対応させたオブジェクトを用いる
  const units: { [key in RawDataKey]: string } = {
    '(1)新規陽性者数': ' 人',
    '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ':
      '件.reports',
    '(3)新規陽性者における接触歴等不明者（人数）': '人',
    '(3)新規陽性者における接触歴等不明者（増加比）': '%',
    '(4)PCR・抗原検査（検査人数）': '人',
    '(4)PCR・抗原検査（陽性率）': '%',
    '(5)救急医療の東京ルールの適用件数': '件.reports',
    '(6)入院患者数': '人',
    '(6)入院患者確保病床数': '',
    '(7)重症患者数': '人',
    '(7)重症患者確保病床数': ''
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
        unit: units[rawDataKey]
      }
    })
  }
  return formattedData
}
