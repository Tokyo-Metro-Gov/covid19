// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/patient.json'
import {
  Convert,
  Patient,
} from '@/libraries/auto_generated/data_converter/convertPatient'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPatientRepository extends IBaseRepository<Patient> {}

export class PatientRepository
  extends BaseRepository<Patient>
  implements IPatientRepository {
  /**
   * 使用箇所
   *
   * 陽性者数（区市町村別） (components/cards/ConfirmedCasesByMunicipalitiesCard.vue)
   */
  constructor() {
    super(Convert.toPatient(JSON.stringify(rawData)))
  }
}
