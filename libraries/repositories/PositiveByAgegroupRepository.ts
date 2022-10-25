// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_by_agegroup.json'
import {
  Convert,
  PositiveByAgegroup,
} from '@/libraries/auto_generated/data_converter/convertPositiveByAgegroup'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPositiveByAgegroupRepository
  extends IBaseRepository<PositiveByAgegroup> {}

export class PositiveByAgegroupRepository
  extends BaseRepository<PositiveByAgegroup>
  implements IPositiveByAgegroupRepository
{
  /**
   * 使用箇所
   *
   * 年代別新規陽性者数 (components/index/CardsFeatured/PositiveNumberByAge/Card.vue)
   */
  constructor() {
    super(Convert.toPositiveByAgegroup(JSON.stringify(rawData)))
  }
}
