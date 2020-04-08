import { Agency, Convert } from '@/libraries/utils/data_converter/convertAgency'
import {
  BaseRepository,
  IBaseRepository
} from '@/libraries/repositories/BaseRepository'
// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/agency.json'

export interface IAgencyRepository extends IBaseRepository<Agency> {}

export class AgencyRepository extends BaseRepository<Agency>
  implements IAgencyRepository {
  constructor() {
    super(Convert.toAgency(JSON.stringify(rawData)))
  }
}
