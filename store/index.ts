import { AgencyRepository } from '@/libraries/repositories/AgencyRepository'
import { ConsultationAboutFeverRepository } from '@/libraries/repositories/ConsultationAboutFeverRepository'
import { DailyPositiveDetailRepository } from '@/libraries/repositories/DailyPositiveDetailRepository'
import { DataRepository } from '@/libraries/repositories/DataRepository'
import { FeverConsultationCenterRepository } from '@/libraries/repositories/FeverConsultationCenterRepository'
import { InfectionMedicalCareSummaryRepository } from '@/libraries/repositories/InfectionMedicalCareSummaryRepository'
import { MetroRepository } from '@/libraries/repositories/MetroRepository'
import { MonitoringCommentImageRepository } from '@/libraries/repositories/MonitoringCommentImageRepository'
import { MonitoringItemsRepository } from '@/libraries/repositories/MonitoringItemsRepository'
import { NewsRepository } from '@/libraries/repositories/NewsRepository'
import { PositiveByAgegroupRepository } from '@/libraries/repositories/PositiveByAgegroupRepository'
import { PositiveOver65Repository } from '@/libraries/repositories/PositiveOver65Repository'
import { PositiveRateRepository } from '@/libraries/repositories/PositiveRateRepository'
import { PositiveStatusRepository } from '@/libraries/repositories/PositiveStatusRepository'
import { PositiveStatusSummaryRepository } from '@/libraries/repositories/PositiveStatusSummaryRepository'
import { StayingPopulationRepository } from '@/libraries/repositories/StayingPopulationRepository'
import { TokyoRuleRepository } from '@/libraries/repositories/TokyoRuleRepository'
import { VaccinationCountWithOmicronRepository } from '@/libraries/repositories/VaccinationCountWithOmicronRepository'
import { VariantsRepository } from '@/libraries/repositories/VariantsRepository'

export const state = () => ({
  agency: new AgencyRepository().data,
  consultationAboutFever: new ConsultationAboutFeverRepository().data,
  dailyPositiveDetail: new DailyPositiveDetailRepository().data,
  data: new DataRepository().data,
  feverConsultationCenter: new FeverConsultationCenterRepository().data,
  infectionMedicalCareSummary: new InfectionMedicalCareSummaryRepository().data,
  metro: new MetroRepository().data,
  monitoringCommentImage: new MonitoringCommentImageRepository().data,
  news: new NewsRepository().data,
  stayingPopulation: new StayingPopulationRepository().data,
  tokyoRule: new TokyoRuleRepository().data,
  vaccination: new VaccinationCountWithOmicronRepository().data,
  variants: new VariantsRepository().data,
  positiveOver65: new PositiveOver65Repository().data,
  positiveByAgegroup: new PositiveByAgegroupRepository().data,
  positiveRate: new PositiveRateRepository().data,
  positiveStatus: new PositiveStatusRepository().data,
  monitoringItems: new MonitoringItemsRepository().data,
  positiveStatusSummary: new PositiveStatusSummaryRepository().data,
})
