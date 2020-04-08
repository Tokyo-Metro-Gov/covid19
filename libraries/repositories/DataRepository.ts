import { Convert, Data } from '@/utils/data_converter/convertData'
import {
  BaseRepository,
  IBaseRepository
} from '@/libraries/repositories/BaseRepository'
// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/data.json'

export interface IDataRepository extends IBaseRepository<Data> {}

export class DataRepository extends BaseRepository<Data>
  implements IDataRepository {
  constructor() {
    super(Convert.toData(JSON.stringify(rawData)))
  }
}
