import {
  DataRepository,
  IDataRepository,
} from '@/libraries/repositories/DataRepository'
// InfectionMedicalcareprovisionStatus ではなく InfectionMedicalCareProvisionStatus とする
import {
  IInfectionMedicalcareprovisionStatusRepository as IInfectionMedicalCareProvisionStatusRepository,
  InfectionMedicalcareprovisionStatusRepository as InfectionMedicalCareProvisionStatusRepository,
} from '@/libraries/repositories/InfectionMedicalCareProvisionStatusRepository'
import {
  IMonitoringCommentImageRepository,
  MonitoringCommentImageRepository,
} from '@/libraries/repositories/MonitoringCommentImageRepository'
import {
  INewsRepository,
  NewsRepository,
} from '@/libraries/repositories/NewsRepository'
import {
  IStayingPopulationRepository,
  StayingPopulationRepository,
} from '@/libraries/repositories/StayingPopulationRepository'
import {
  ITokyoAlertRepository,
  TokyoAlertRepository,
} from '@/libraries/repositories/TokyoAlertRepository'

export class Registry {
  public static readonly DataRepository: IDataRepository = new DataRepository()
  public static readonly InfectionMedicalCareProvisionStatusRepository: IInfectionMedicalCareProvisionStatusRepository = new InfectionMedicalCareProvisionStatusRepository()
  public static readonly MonitoringCommentImageRepository: IMonitoringCommentImageRepository = new MonitoringCommentImageRepository()
  public static readonly NewsRepository: INewsRepository = new NewsRepository()
  public static readonly StayingPopulationRepository: IStayingPopulationRepository = new StayingPopulationRepository()
  public static readonly TokyoAlertRepository: ITokyoAlertRepository = new TokyoAlertRepository()
}
