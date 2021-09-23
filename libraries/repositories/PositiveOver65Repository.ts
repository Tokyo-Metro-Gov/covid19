// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_over65.json'
import {
  Convert,
  PositiveOver65,
} from '@/libraries/auto_generated/data_converter/convertPositiveOver65'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPositiveOver65Repository
  extends IBaseRepository<PositiveOver65> {}

export class PositiveOver65Repository
  extends BaseRepository<PositiveOver65>
  implements IPositiveOver65Repository
{
  /**
   * 使用箇所
   *
   * 報告日別による陽性者数（65歳以上）の推移 (components/index/CardsReference/PositiveNumberOver65/Card.vue)
   */
  constructor() {
    super(Convert.toPositiveOver65(JSON.stringify(rawData)))
  }
}
