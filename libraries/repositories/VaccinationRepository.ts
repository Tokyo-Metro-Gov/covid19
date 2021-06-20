// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccination.json'
import {
  Convert,
  Vaccination,
} from '@/libraries/auto_generated/data_converter/convertVaccination'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccinationRepository extends IBaseRepository<Vaccination> {}
export class VaccinationRepository
  extends BaseRepository<Vaccination>
  implements IVaccinationRepository
{
  /**
   * 使用箇所
   *
   * ワクチン接種回数（高齢者・累計） (components/index/CardsReference/Vaccination/Card.vue)
   */
  constructor() {
    super(Convert.toVaccination(JSON.stringify(rawData)))
  }
}
