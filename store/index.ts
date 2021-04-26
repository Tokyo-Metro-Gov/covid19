import { DataRepository } from '@/libraries/repositories/DataRepository'
// InfectionMedicalcareprovisionStatus ではなく InfectionMedicalCareProvisionStatus とする
import { InfectionMedicalcareprovisionStatusRepository as InfectionMedicalCareProvisionStatusRepository } from '@/libraries/repositories/InfectionMedicalCareProvisionStatusRepository'
import { MonitoringCommentImageRepository } from '@/libraries/repositories/MonitoringCommentImageRepository'
import { NewsRepository } from '@/libraries/repositories/NewsRepository'
import { StayingPopulationRepository } from '@/libraries/repositories/StayingPopulationRepository'
import { TokyoAlertRepository } from '@/libraries/repositories/TokyoAlertRepository'
import { VariantRepository } from '@/libraries/repositories/VariantRepository'

export const state = () => ({
  data: new DataRepository().data,
  infectionMedicalCareProvisionStatus: new InfectionMedicalCareProvisionStatusRepository()
    .data,
  monitoringCommentImage: new MonitoringCommentImageRepository().data,
  news: new NewsRepository().data,
  stayingPopulation: new StayingPopulationRepository().data,
  tokyoAlert: new TokyoAlertRepository().data,
  variant: new VariantRepository().data,
})
