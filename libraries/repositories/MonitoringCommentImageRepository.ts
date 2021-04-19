// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/monitoring_comment_image.json'
import {
  Convert,
  MonitoringCommentImage,
} from '@/libraries/auto_generated/data_converter/convertMonitoringCommentImage'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IMonitoringCommentImageRepository
  extends IBaseRepository<MonitoringCommentImage> {}

export class MonitoringCommentImageRepository
  extends BaseRepository<MonitoringCommentImage>
  implements IMonitoringCommentImageRepository {
  /**
   * 使用箇所
   *
   * 感染状況・医療提供体制の分析 (components/MonitoringCommentCard.vue -\> components/MonitoringCommentCardImageSwipe.vue)
   */
  constructor() {
    super(Convert.toMonitoringCommentImage(JSON.stringify(rawData)))
  }
}
