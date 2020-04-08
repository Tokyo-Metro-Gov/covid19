import {
  AgencyRepository,
  IAgencyRepository,
} from '@/libraries/repositories/AgencyRepository'
import {
  ConsultationAboutFeverRepository,
  IConsultationAboutFeverRepository,
} from '@/libraries/repositories/ConsultationAboutFeverRepository'
import {
  DailyPositiveDetailRepository,
  IDailyPositiveDetailRepository,
} from '@/libraries/repositories/DailyPositiveDetailRepository'
import {
  DataRepository,
  IDataRepository,
} from '@/libraries/repositories/DataRepository'
import {
  FeverConsultationCenterRepository,
  IFeverConsultationCenterRepository,
} from '@/libraries/repositories/FeverConsultationCenterRepository'
// InfectionMedicalcareprovisionStatus ではなく InfectionMedicalCareProvisionStatus とする
import {
  IInfectionMedicalcareprovisionStatusRepository as IInfectionMedicalCareProvisionStatusRepository,
  InfectionMedicalcareprovisionStatusRepository as InfectionMedicalCareProvisionStatusRepository,
} from '@/libraries/repositories/InfectionMedicalCareProvisionStatusRepository'
import {
  IMetroRepository,
  MetroRepository,
} from '@/libraries/repositories/MetroRepository'
import {
  IMonitoringCommentImageRepository,
  MonitoringCommentImageRepository,
} from '@/libraries/repositories/MonitoringCommentImageRepository'
import {
  IMonitoringItemsRepository,
  MonitoringItemsRepository,
} from '@/libraries/repositories/MonitoringItemsRepository'
import {
  INewsRepository,
  NewsRepository,
} from '@/libraries/repositories/NewsRepository'
import {
  IPatientRepository,
  PatientRepository,
} from '@/libraries/repositories/PatientRepository'
import {
  IPositiveByDevelopedRepository,
  PositiveByDevelopedRepository,
} from '@/libraries/repositories/PositiveByDevelopedRepository'
import {
  IPositiveByDiagnosedRepository,
  PositiveByDiagnosedRepository,
} from '@/libraries/repositories/PositiveByDiagnosedRepository'
import {
  IPositiveRateRepository,
  PositiveRateRepository,
} from '@/libraries/repositories/PositiveRateRepository'
import {
  IPositiveStatusRepository,
  PositiveStatusRepository,
} from '@/libraries/repositories/PositiveStatusRepository'
import {
  IStayingPopulationRepository,
  StayingPopulationRepository,
} from '@/libraries/repositories/StayingPopulationRepository'
import {
  ITokyoAlertRepository,
  TokyoAlertRepository,
} from '@/libraries/repositories/TokyoAlertRepository'
import {
  ITokyoRuleRepository,
  TokyoRuleRepository,
} from '@/libraries/repositories/TokyoRuleRepository'

export class Registry {
  public static readonly AgencyRepository: IAgencyRepository = new AgencyRepository()
  public static readonly ConsultationAboutFeverRepository: IConsultationAboutFeverRepository = new ConsultationAboutFeverRepository()
  public static readonly DailyPositiveDetailRepository: IDailyPositiveDetailRepository = new DailyPositiveDetailRepository()
  public static readonly DataRepository: IDataRepository = new DataRepository()
  public static readonly FeverConsultationCenterRepository: IFeverConsultationCenterRepository = new FeverConsultationCenterRepository()
  public static readonly InfectionMedicalCareProvisionStatusRepository: IInfectionMedicalCareProvisionStatusRepository = new InfectionMedicalCareProvisionStatusRepository()
  public static readonly MetroRepository: IMetroRepository = new MetroRepository()
  public static readonly MonitoringCommentImageRepository: IMonitoringCommentImageRepository = new MonitoringCommentImageRepository()
  public static readonly MonitoringItemsRepository: IMonitoringItemsRepository = new MonitoringItemsRepository()
  public static readonly NewsRepository: INewsRepository = new NewsRepository()
  public static readonly PatientRepository: IPatientRepository = new PatientRepository()
  public static readonly PositiveByDevelopedRepository: IPositiveByDevelopedRepository = new PositiveByDevelopedRepository()
  public static readonly PositiveByDiagnosedRepository: IPositiveByDiagnosedRepository = new PositiveByDiagnosedRepository()
  public static readonly PositiveRateRepository: IPositiveRateRepository = new PositiveRateRepository()
  public static readonly PositiveStatusRepository: IPositiveStatusRepository = new PositiveStatusRepository()
  public static readonly StayingPopulationRepository: IStayingPopulationRepository = new StayingPopulationRepository()
  public static readonly TokyoAlertRepository: ITokyoAlertRepository = new TokyoAlertRepository()
  public static readonly TokyoRuleRepository: ITokyoRuleRepository = new TokyoRuleRepository()
}
