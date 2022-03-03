// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccination_count.json'
import {
  Convert,
  VaccinationCount,
} from '@/libraries/auto_generated/data_converter/convertVaccinationCount'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccinationCountRepository
  extends IBaseRepository<VaccinationCount> {}
export class VaccinationCountRepository
  extends BaseRepository<VaccinationCount>
  implements IVaccinationCountRepository
{
  /**
   * 使用箇所
   *
   * ワクチン接種数及び接種率（都内全人口・累計） (components/index/CardsReference/Vaccination/Card.vue)
   */
  constructor() {
    super(Convert.toVaccinationCount(JSON.stringify(rawData)))
  }
}
