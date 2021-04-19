// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_by_diagnosed.json'
import {
  Convert,
  PositiveByDiagnosed,
} from '@/libraries/auto_generated/data_converter/convertPositiveByDiagnosed'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPositiveByDiagnosedRepository
  extends IBaseRepository<PositiveByDiagnosed> {}

export class PositiveByDiagnosedRepository
  extends BaseRepository<PositiveByDiagnosed>
  implements IPositiveByDiagnosedRepository {
  /**
   * 使用箇所
   *
   * 確定日別による陽性者数の推移 (components/cards/PositiveNumberByDiagnosedDateCard.vue)
   */
  constructor() {
    super(Convert.toPositiveByDiagnosed(JSON.stringify(rawData)))
  }
}
