// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_rate.json'
import {
  Convert,
  PositiveRate,
} from '@/libraries/auto_generated/data_converter/convertPositiveRate'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPositiveRateRepository
  extends IBaseRepository<PositiveRate> {}

export class PositiveRateRepository
  extends BaseRepository<PositiveRate>
  implements IPositiveRateRepository {
  /**
   * 使用箇所
   *
   * モニタリング項目(4) 検査の陽性率／検査人数 (components/cards/PositiveRateCard.vue)
   */
  constructor() {
    super(Convert.toPositiveRate(JSON.stringify(rawData)))
  }
}
