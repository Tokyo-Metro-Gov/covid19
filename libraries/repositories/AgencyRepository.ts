// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/agency.json'
import {
  Agency,
  Convert,
} from '@/libraries/auto_generated/data_converter/convertAgency'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IAgencyRepository extends IBaseRepository<Agency> {}

export class AgencyRepository
  extends BaseRepository<Agency>
  implements IAgencyRepository {
  /**
   * 使用箇所
   *
   * 都庁来庁者数の推移 (components/cards/AgencyCard.vue)
   */
  constructor() {
    super(Convert.toAgency(JSON.stringify(rawData)))
  }
}
