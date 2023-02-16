// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/vaccination_count_with_omicron.json'
import {
  Convert,
  VaccinationCountWithOmicron,
} from '@/libraries/auto_generated/data_converter/convertVaccinationCountWithOmicron'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IVaccinationCountWithOmicronRepository
  extends IBaseRepository<VaccinationCountWithOmicron> {}
export class VaccinationCountWithOmicronRepository
  extends BaseRepository<VaccinationCountWithOmicron>
  implements IVaccinationCountWithOmicronRepository
{
  /**
   * 使用箇所
   *
   * ワクチン接種数及び接種率（都内全人口・累計） (components/index/CardsFeatured/Vaccination/Card.vue)
   */
  constructor() {
    super(Convert.toVaccinationCountWithOmicron(JSON.stringify(rawData)))
  }
}
