// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_status.json'
import {
  Convert,
  PositiveStatus,
} from '@/libraries/auto_generated/data_converter/convertPositiveStatus'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPositiveStatusRepository
  extends IBaseRepository<PositiveStatus> {}

export class PositiveStatusRepository
  extends BaseRepository<PositiveStatus>
  implements IPositiveStatusRepository {
  /**
   * 使用箇所
   *
   * モニタリング項目(6) 入院患者数 (components/cards/HospitalizedNumberCard.vue)
   *
   * モニタリング項目(7) 重症患者数 (components/cards/SevereCaseCard.vue)
   */
  constructor() {
    super(Convert.toPositiveStatus(JSON.stringify(rawData)))
  }
}
