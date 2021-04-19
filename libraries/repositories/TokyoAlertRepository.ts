// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/tokyo_alert.json'
import {
  Convert,
  TokyoAlert,
} from '@/libraries/auto_generated/data_converter/convertTokyoAlert'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface ITokyoAlertRepository extends IBaseRepository<TokyoAlert> {}

export class TokyoAlertRepository
  extends BaseRepository<TokyoAlert>
  implements ITokyoAlertRepository {
  /**
   * 使用箇所
   *
   * 東京アラート (components/TokyoAlertCard.vue)
   */
  constructor() {
    super(Convert.toTokyoAlert(JSON.stringify(rawData)))
  }
}
