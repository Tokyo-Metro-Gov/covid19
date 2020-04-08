import {
  The13101DailyVisitors,
  Convert
} from '@/utils/data_converter/convert13101DailyVisitors'
import {
  BaseRepository,
  IBaseRepository
} from '@/libraries/repositories/BaseRepository'
// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/13101_daily_visitors.json'

export interface IChiyodaRepository
  extends IBaseRepository<The13101DailyVisitors> {}

export class ChiyodaRepository extends BaseRepository<The13101DailyVisitors>
  implements IChiyodaRepository {
  constructor() {
    super(Convert.toThe13101DailyVisitors(JSON.stringify(rawData)))
  }
}
