import { AgencyRepository } from '@/libraries/repositories/AgencyRepository'
import { ConsultationAboutFeverRepository } from '@/libraries/repositories/ConsultationAboutFeverRepository'
import { DailyPositiveDetailRepository } from '@/libraries/repositories/DailyPositiveDetailRepository'
import { DataRepository } from '@/libraries/repositories/DataRepository'
import { FeverConsultationCenterRepository } from '@/libraries/repositories/FeverConsultationCenterRepository'
import { InfectionMedicalCareSummaryRepository } from '@/libraries/repositories/InfectionMedicalCareSummaryRepository'
import { MetroRepository } from '@/libraries/repositories/MetroRepository'
import { MonitoringCommentImageRepository } from '@/libraries/repositories/MonitoringCommentImageRepository'
import { NewsRepository } from '@/libraries/repositories/NewsRepository'
import { PositiveOver65Repository } from '@/libraries/repositories/PositiveOver65Repository'
import { StayingPopulationRepository } from '@/libraries/repositories/StayingPopulationRepository'
import { TokyoRuleRepository } from '@/libraries/repositories/TokyoRuleRepository'
import { VaccinationRepository } from '@/libraries/repositories/VaccinationRepository'
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
  vaccination: new VaccinationRepository().data,
  variants: new VariantsRepository().data,
  positiveOver65: new PositiveOver65Repository().data,
})
