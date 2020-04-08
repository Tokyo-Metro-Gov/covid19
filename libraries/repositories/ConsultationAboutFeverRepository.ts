// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/consultation_about_fever.json'
import {
  ConsultationAboutFever,
  Convert,
} from '@/libraries/auto_generated/data_converter/convertConsultationAboutFever'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IConsultationAboutFeverRepository
  extends IBaseRepository<ConsultationAboutFever> {}

export class ConsultationAboutFeverRepository
  extends BaseRepository<ConsultationAboutFever>
  implements IConsultationAboutFeverRepository {
  /**
   * 使用箇所
   *
   * モニタリング項目(2) #7119における発熱等相談件数 (components/cards/ConsultationAboutFeverNumberCard.vue)
   */
  constructor() {
    super(Convert.toConsultationAboutFever(JSON.stringify(rawData)))
  }
}
