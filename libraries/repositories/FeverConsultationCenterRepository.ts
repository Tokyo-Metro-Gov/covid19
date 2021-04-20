// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/fever_consultation_center.json'
import {
  Convert,
  FeverConsultationCenter,
} from '@/libraries/auto_generated/data_converter/convertFeverConsultationCenter'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IFeverConsultationCenterRepository
  extends IBaseRepository<FeverConsultationCenter> {}

export class FeverConsultationCenterRepository
  extends BaseRepository<FeverConsultationCenter>
  implements IFeverConsultationCenterRepository {
  /**
   * 使用箇所
   *
   * 東京都発熱相談センターにおける相談件数 (components/cards/TokyoFeverConsultationCenterReportsNumberCard.vue)
   */
  constructor() {
    super(Convert.toFeverConsultationCenter(JSON.stringify(rawData)))
  }
}
