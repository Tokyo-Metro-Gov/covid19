// このファイル名は
// InfectionMedicalcareprovisionStatusRepository.ts ではなく
// InfectionMedicalCareProvisionStatusRepository.ts とする

// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/infection_medicalcareprovision_status.json'
import {
  Convert,
  InfectionMedicalcareprovisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IInfectionMedicalcareprovisionStatusRepository
  extends IBaseRepository<InfectionMedicalcareprovisionStatus> {}

export class InfectionMedicalcareprovisionStatusRepository
  extends BaseRepository<InfectionMedicalcareprovisionStatus>
  implements IInfectionMedicalcareprovisionStatusRepository {
  /**
   * 使用箇所
   *
   * 感染状況・医療提供体制（サマリ） (components/InfectionMedicalcareprovisionStatus.vue)
   */
  constructor() {
    super(
      Convert.toInfectionMedicalcareprovisionStatus(JSON.stringify(rawData))
    )
  }
}
