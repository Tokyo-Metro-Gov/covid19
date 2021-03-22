import { AgencyRepository } from '@/libraries/repositories/AgencyRepository'
import { DataRepository } from '@/libraries/repositories/DataRepository'
// InfectionMedicalcareprovisionStatus ではなく InfectionMedicalCareProvisionStatus とする
import { InfectionMedicalcareprovisionStatusRepository as InfectionMedicalCareProvisionStatusRepository } from '@/libraries/repositories/InfectionMedicalCareProvisionStatusRepository'
import { MonitoringCommentImageRepository } from '@/libraries/repositories/MonitoringCommentImageRepository'
import { NewsRepository } from '@/libraries/repositories/NewsRepository'
import { StayingPopulationRepository } from '@/libraries/repositories/StayingPopulationRepository'
import { VaccinationRepository } from '@/libraries/repositories/VaccinationRepository'
import { VariantRepository } from '@/libraries/repositories/VariantRepository'

export const state = () => ({
  agency: new AgencyRepository().data,
  data: new DataRepository().data,
  infectionMedicalCareProvisionStatus:
    new InfectionMedicalCareProvisionStatusRepository().data,
  monitoringCommentImage: new MonitoringCommentImageRepository().data,
  news: new NewsRepository().data,
  stayingPopulation: new StayingPopulationRepository().data,
  vaccination: new VaccinationRepository().data,
  variant: new VariantRepository().data,
})
