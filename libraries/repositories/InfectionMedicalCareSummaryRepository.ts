// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/infection_medicalcare_summary.json'
import {
  Convert,
  InfectionMedicalcareSummary,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareSummary'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IInfectionMedicalCareSummaryRepository
  extends IBaseRepository<InfectionMedicalcareSummary> {}

export class InfectionMedicalCareSummaryRepository
  extends BaseRepository<InfectionMedicalcareSummary>
  implements IInfectionMedicalCareSummaryRepository
{
  /**
   * 使用箇所
   *
   * 病床使用率等・患者の発生状況等（サマリ）
   */
  constructor() {
    super(Convert.toInfectionMedicalcareSummary(JSON.stringify(rawData)))
  }
}
