// monitoring_items.json の型チェック用

type DataKey =
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
  [key in DataKey]: StringOrNumber
}

// -----------------------------------------
// フォーマット済み モニタリング指標データ用

type MonitoringItems = Record<DataKey, MonitoringItemValue>

interface MonitoringItemValue {
  value: StringOrNumber
  unit: Unit | null // 元データに無いので独自に追加, 単位がない場合は null
}

type Unit = {
  text: string // *********** もとの日本語のテキスト
  translatable: boolean // ** 翻訳が必要かどうか
}

/**
 * monitoring_items_json のデータを整形
 *
 * @param data - Raw data
 */
export default (rawDataObj: RawData): MonitoringItems => {
  return {
    '(1)新規陽性者数': {
      value: rawDataObj['(1)新規陽性者数'],
      unit: {
        text: '人',
        translatable: true
      }
    },
    '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ': {
      value:
        rawDataObj[
          '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
        ],
      unit: {
        text: '件.reports',
        translatable: true
      }
    },
    '(3)新規陽性者における接触歴等不明者（人数）': {
      value: rawDataObj['(3)新規陽性者における接触歴等不明者（人数）'],
      unit: {
        text: '人',
        translatable: true
      }
    },
    '(3)新規陽性者における接触歴等不明者（増加比）': {
      value: rawDataObj['(3)新規陽性者における接触歴等不明者（増加比）'],
      unit: {
        text: '%',
        translatable: false
      }
    },
    '(4)PCR・抗原検査（検査人数）': {
      value: rawDataObj['(4)PCR・抗原検査（検査人数）'],
      unit: {
        text: '人',
        translatable: true
      }
    },
    '(4)PCR・抗原検査（陽性率）': {
      value: rawDataObj['(4)PCR・抗原検査（陽性率）'],
      unit: {
        text: '%',
        translatable: false
      }
    },
    '(5)救急医療の東京ルールの適用件数': {
      value: rawDataObj['(5)救急医療の東京ルールの適用件数'],
      unit: {
        text: '件.reports',
        translatable: true
      }
    },
    '(6)入院患者数': {
      value: rawDataObj['(6)入院患者数'],
      unit: {
        text: '人',
        translatable: true
      }
    },
    '(6)入院患者確保病床数': {
      value: rawDataObj['(6)入院患者確保病床数'],
      unit: null
    },
    '(7)重症患者数': {
      value: rawDataObj['(7)重症患者数'],
      unit: {
        text: '人',
        translatable: true
      }
    },
    '(7)重症患者確保病床数': {
      value: rawDataObj['(7)重症患者確保病床数'],
      unit: null
    }
  }
}
