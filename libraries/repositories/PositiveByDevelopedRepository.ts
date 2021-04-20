// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_by_developed.json'
import {
  Convert,
  PositiveByDeveloped,
} from '@/libraries/auto_generated/data_converter/convertPositiveByDeveloped'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPositiveByDevelopedRepository
  extends IBaseRepository<PositiveByDeveloped> {}

export class PositiveByDevelopedRepository
  extends BaseRepository<PositiveByDeveloped>
  implements IPositiveByDevelopedRepository {
  /**
   * 使用箇所
   *
   * 発症日別による陽性者数の推移 (components/cards/PositiveNumberByDevelopedDateCard.vue)
   */
  constructor() {
    super(Convert.toPositiveByDeveloped(JSON.stringify(rawData)))
  }
}
