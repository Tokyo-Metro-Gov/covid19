// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/data.json'
import {
  Convert,
  Data,
} from '@/libraries/auto_generated/data_converter/convertData'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IDataRepository extends IBaseRepository<Data> {}

export class DataRepository
  extends BaseRepository<Data>
  implements IDataRepository
{
  /**
   * 使用箇所
   *
   * レイアウト (layouts/default.vue)
   *
   * トップページ上部 (components/index/SiteTopUpper.vue)
   *
   * 検査陽性者の状況 (components/index/CardsMonitoring/ConfirmedCasesDetails/Card.vue)
   *
   * 報告日別による陽性者数の推移 (components/index/CardsMonitoring/ConfirmedCasesNumber/Card.vue)
   *
   * 陽性者の属性 (components/index/CardsReference/ConfirmedCasesAttributes/Card.vue)
   *
   * 検査実施件数 (components/index/CardsReference/TestedNumber/Card.vue)
   *
   * 新型コロナコールセンター相談件数 (components/index/CardsReference/TelephoneAdvisoryReportsNumber/Card.vue)
   *
   * 受診相談窓口における相談件数 (components/index/CardsReference/MonitoringConsultationDeskReportsNumber/Card.vue)
   */
  constructor() {
    super(Convert.toData(JSON.stringify(rawData)))
  }
}
