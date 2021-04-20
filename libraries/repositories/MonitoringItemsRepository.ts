// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/monitoring_items.json'
import {
  Convert,
  MonitoringItems,
} from '@/libraries/auto_generated/data_converter/convertMonitoringItems'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IMonitoringItemsRepository
  extends IBaseRepository<MonitoringItems> {}

export class MonitoringItemsRepository
  extends BaseRepository<MonitoringItems>
  implements IMonitoringItemsRepository {
  /**
   * 使用箇所
   *
   * 感染状況・医療提供体制の分析 (components/MonitoringCommentCard.vue)
   * モニタリング項目 (components/cards/MonitoringItemsOverviewCard.vue)
   */
  constructor() {
    super(Convert.toMonitoringItems(JSON.stringify(rawData)))
  }
}
