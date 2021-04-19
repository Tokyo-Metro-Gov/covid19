// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/metro.json'
import {
  Convert,
  Metro,
} from '@/libraries/auto_generated/data_converter/convertMetro'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IMetroRepository extends IBaseRepository<Metro> {}

export class MetroRepository
  extends BaseRepository<Metro>
  implements IMetroRepository {
  /**
   * 使用箇所
   *
   * 都営地下鉄の利用者数の推移 (components/cards/MetroCard.vue)
   */
  constructor() {
    super(Convert.toMetro(JSON.stringify(rawData)))
  }
}
