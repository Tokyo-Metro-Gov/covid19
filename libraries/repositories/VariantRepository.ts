// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/variant.json'
import {
  Convert,
  Variant,
} from '@/libraries/auto_generated/data_converter/convertVariant'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVariantRepository extends IBaseRepository<Variant> {}
export class VariantRepository
  extends BaseRepository<Variant>
  implements IVariantRepository {
  /**
   * 使用箇所
   *
   * N501Y変異株スクリーニングの実施状況 (components/cards/VariantCard.vue)
   */
  constructor() {
    super(Convert.toVariant(JSON.stringify(rawData)))
  }
}
