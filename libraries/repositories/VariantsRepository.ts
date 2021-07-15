// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/variants.json'
import {
  Convert,
  Variants,
} from '@/libraries/auto_generated/data_converter/convertVariants'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVariantsRepository extends IBaseRepository<Variants> {}
export class VariantsRepository
  extends BaseRepository<Variants>
  implements IVariantsRepository
{
  /**
   * 使用箇所
   *
   * L452R変異株スクリーニングの実施状況 (components/index/CardsReference/Variant/Card.vue)
   */
  constructor() {
    super(Convert.toVariants(JSON.stringify(rawData)))
  }
}
