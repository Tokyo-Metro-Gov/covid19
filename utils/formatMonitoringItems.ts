// monitoring_items.json の型チェック用

import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

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

type DataCommentKey = '総括コメント-感染状況' | '総括コメント-医療提供体制'

type RawData = {
  '(1)新規陽性者数': number
  '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ': number
  '(3)新規陽性者における接触歴等不明者（人数）': number
  '(3)新規陽性者における接触歴等不明者（増加比）': number
  '(4)PCR・抗原検査（陽性率）': number
  '(4)PCR・抗原検査（検査人数）': number
  '(5)救急医療の東京ルールの適用件数': number
  '(6)入院患者数': number
  '(6)入院患者確保病床数': number
  '(7)重症患者数': number
  '(7)重症患者確保病床数': number
}

interface Comment {
  date: string
  level: number
  display: {
    '@ja': string
    '@en': string
  }
}

type RawDataComment = {
  '総括コメント-感染状況': Comment
  '総括コメント-医療提供体制': Comment
}

// -----------------------------------------
// フォーマット済み モニタリング指標データ用

export type Unit = {
  text: string // もとの日本語のテキスト
  translatable: boolean // 翻訳が必要かどうか
  except?: Array<String> // 翻訳しない言語の配列
}

interface MonitoringItemValue {
  value: string
  unit: Unit | null // 元データに無いので独自に追加, 単位がない場合は null
  bold: boolean // 太字で表示するか否かの設定
}

export type MonitoringItems = Record<DataKey, MonitoringItemValue>

/**
 * monitoring_items_json のデータを整形
 *
 * @param rawDataObj - Raw data
 */
export const formatMonitoringItems = (rawDataObj: RawData): MonitoringItems => {
  const unitPerson: Unit = { text: '人', translatable: true }
  const unitReports: Unit = {
    text: '件.reports',
    translatable: true,
  }
  const unitPercentage: Unit = { text: '%', translatable: false }
  const unitBed: Unit = {
    text: '床',
    translatable: true,
    // 英語では対応する単位を表示しない
    except: ['en'],
  }

  const toInteger = getCommaSeparatedNumberToFixedFunction(0)
  const toNumberIn10thPlace = getCommaSeparatedNumberToFixedFunction(1)

  return {
    '(1)新規陽性者数': {
      value: toNumberIn10thPlace(rawDataObj['(1)新規陽性者数']),
      unit: unitPerson,
      bold: true,
    },
    '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ': {
      value: toNumberIn10thPlace(
        rawDataObj[
          '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
        ]
      ),
      unit: unitReports,
      bold: true,
    },
    '(3)新規陽性者における接触歴等不明者（人数）': {
      value: toNumberIn10thPlace(
        rawDataObj['(3)新規陽性者における接触歴等不明者（人数）']
      ),
      unit: unitPerson,
      bold: true,
    },
    '(3)新規陽性者における接触歴等不明者（増加比）': {
      value: toNumberIn10thPlace(
        rawDataObj['(3)新規陽性者における接触歴等不明者（増加比）']
      ),
      unit: unitPercentage,
      bold: true,
    },
    '(4)PCR・抗原検査（検査人数）': {
      value: toNumberIn10thPlace(rawDataObj['(4)PCR・抗原検査（検査人数）']),
      unit: unitPerson,
      bold: true,
    },
    '(4)PCR・抗原検査（陽性率）': {
      value: toNumberIn10thPlace(rawDataObj['(4)PCR・抗原検査（陽性率）']),
      unit: unitPercentage,
      bold: true,
    },
    '(5)救急医療の東京ルールの適用件数': {
      value: toNumberIn10thPlace(
        rawDataObj['(5)救急医療の東京ルールの適用件数']
      ),
      unit: unitReports,
      bold: true,
    },
    '(6)入院患者数': {
      value: toInteger(rawDataObj['(6)入院患者数']),
      unit: unitPerson,
      bold: true,
    },
    '(6)入院患者確保病床数': {
      value: toInteger(rawDataObj['(6)入院患者確保病床数']),
      unit: unitBed,
      bold: false,
    },
    '(7)重症患者数': {
      value: toInteger(rawDataObj['(7)重症患者数']),
      unit: unitPerson,
      bold: true,
    },
    '(7)重症患者確保病床数': {
      value: toInteger(rawDataObj['(7)重症患者確保病床数']),
      unit: unitBed,
      bold: false,
    },
  }
}

export type MonitoringComment = {
  date: string
  level: number
  display: {
    '@ja': string
    '@en': string
  }
}

export type MonitoringCommentItems = Record<DataCommentKey, MonitoringComment>

/**
 * monitoring_items_json から総括コメントのみ抜き出し
 *
 * @param data - Raw data
 */
export const formatMonitoringComment = (
  rawDataObj: RawDataComment
): MonitoringCommentItems => {
  return {
    '総括コメント-感染状況': {
      date: rawDataObj['総括コメント-感染状況'].date,
      level: rawDataObj['総括コメント-感染状況'].level,
      display: {
        '@ja': rawDataObj['総括コメント-感染状況'].display['@ja'],
        '@en': rawDataObj['総括コメント-感染状況'].display['@en'],
      },
    },
    '総括コメント-医療提供体制': {
      date: rawDataObj['総括コメント-医療提供体制'].date,
      level: rawDataObj['総括コメント-医療提供体制'].level,
      display: {
        '@ja': rawDataObj['総括コメント-医療提供体制'].display['@ja'],
        '@en': rawDataObj['総括コメント-医療提供体制'].display['@en'],
      },
    },
  }
}
