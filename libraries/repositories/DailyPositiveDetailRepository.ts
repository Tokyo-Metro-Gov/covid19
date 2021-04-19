// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/daily_positive_detail.json'
import {
  Convert,
  DailyPositiveDetail,
} from '@/libraries/auto_generated/data_converter/convertDailyPositiveDetail'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IDailyPositiveDetailRepository
  extends IBaseRepository<DailyPositiveDetail> {}

export class DailyPositiveDetailRepository
  extends BaseRepository<DailyPositiveDetail>
  implements IDailyPositiveDetailRepository {
  /**
   * 使用箇所
   *
   * モニタリング項目(1) 新規陽性者数 (components/cards/MonitoringConfirmedCasesNumberCard.vue)
   *
   * モニタリング項目(3) 新規陽性者における接触歴等不明者数／増加比 (components/cards/UntrackedRateCard.vue)
   */
  constructor() {
    super(Convert.toDailyPositiveDetail(JSON.stringify(rawData)))
  }
}
