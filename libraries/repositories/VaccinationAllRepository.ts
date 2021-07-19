// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccination_all.json'
import {
  Convert,
  VaccinationAll,
} from '@/libraries/auto_generated/data_converter/convertVaccinationAll'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccinationAllRepository
  extends IBaseRepository<VaccinationAll> {}
export class VaccinationAllRepository
  extends BaseRepository<VaccinationAll>
  implements IVaccinationAllRepository
{
  /**
   * 使用箇所
   *
   * ワクチン接種数（累計） (components/index/CardsReference/Vaccination/Card.vue)
   */
  constructor() {
    super(Convert.toVaccinationAll(JSON.stringify(rawData)))
  }
}
