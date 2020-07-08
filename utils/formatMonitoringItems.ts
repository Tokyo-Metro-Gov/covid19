// monitoring_items.json の型チェック用

import { getNumberToFixedFunction } from '@/utils/monitoringItemsValueFormatters'

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

type RawData = {
  '(1)新規陽性者数': number
  '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ': number
  '(3)新規陽性者における接触歴等不明者（人数）': number
  '(3)新規陽性者における接触歴等不明者（増加比）': number
  '(4)PCR・抗原検査（陽性率）': number
  '(4)PCR・抗原検査（検査人数）': number
  '(5)救急医療の東京ルールの適用件数': number
  '(6)入院患者数': number
  '(6)入院患者確保病床数': string
  '(7)重症患者数': number
  '(7)重症患者確保病床数': string
}

// -----------------------------------------
// フォーマット済み モニタリング指標データ用

export type MonitoringItems = Record<DataKey, MonitoringItemValue>

interface MonitoringItemValue {
  value: string
  unit: Unit | null // 元データに無いので独自に追加, 単位がない場合は null
}

export type Unit = {
  text: string // *********** もとの日本語のテキスト
  translatable: boolean // ** 翻訳が必要かどうか
}

/**
 * monitoring_items_json のデータを整形
 *
 * @param data - Raw data
 */
export default (rawDataObj: RawData): MonitoringItems => {
  const unitPerson: Unit = { text: '人', translatable: true }
  const unitReports: Unit = {
    text: '件.reports',
    translatable: true
  }
  const unitPercentage: Unit = { text: '%', translatable: false }

  const toInteger = getNumberToFixedFunction(0)
  const toNumberIn10thPlace = getNumberToFixedFunction(1)

  /**
   * （getNumberToFixedFunction の実装を変更せずに、）
   * 結果値が undefined だった場合に空文字に置き換える
   * @param fn - getNumberToFixedFunction で得られる関数
   * @param n - fn に渡す数値
   */
  const undefinedEraser = (
    fn: (d: number) => string | undefined,
    n: number
  ) => {
    const result = fn(n)
    return typeof result === 'undefined' ? '' : result
  }
  return {
    '(1)新規陽性者数': {
      value: undefinedEraser(
        toNumberIn10thPlace,
        rawDataObj['(1)新規陽性者数']
      ),
      unit: unitPerson
    },
    '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ': {
      value: undefinedEraser(
        toNumberIn10thPlace,
        rawDataObj[
          '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
        ]
      ),
      unit: unitReports
    },
    '(3)新規陽性者における接触歴等不明者（人数）': {
      value: undefinedEraser(
        toNumberIn10thPlace,
        rawDataObj['(3)新規陽性者における接触歴等不明者（人数）']
      ),
      unit: unitPerson
    },
    '(3)新規陽性者における接触歴等不明者（増加比）': {
      value: undefinedEraser(
        toNumberIn10thPlace,
        rawDataObj['(3)新規陽性者における接触歴等不明者（増加比）']
      ),
      unit: unitPercentage
    },
    '(4)PCR・抗原検査（検査人数）': {
      value: undefinedEraser(
        toNumberIn10thPlace,
        rawDataObj['(4)PCR・抗原検査（検査人数）']
      ),
      unit: unitPerson
    },
    '(4)PCR・抗原検査（陽性率）': {
      value: undefinedEraser(
        toNumberIn10thPlace,
        rawDataObj['(4)PCR・抗原検査（陽性率）']
      ),
      unit: unitPercentage
    },
    '(5)救急医療の東京ルールの適用件数': {
      value: undefinedEraser(
        toNumberIn10thPlace,
        rawDataObj['(5)救急医療の東京ルールの適用件数']
      ),
      unit: unitReports
    },
    '(6)入院患者数': {
      value: undefinedEraser(toInteger, rawDataObj['(6)入院患者数']),
      unit: unitPerson
    },
    '(6)入院患者確保病床数': {
      value: rawDataObj['(6)入院患者確保病床数'],
      unit: null
    },
    '(7)重症患者数': {
      value: undefinedEraser(toInteger, rawDataObj['(7)重症患者数']),
      unit: unitPerson
    },
    '(7)重症患者確保病床数': {
      value: rawDataObj['(7)重症患者確保病床数'],
      unit: null
    }
  }
}
