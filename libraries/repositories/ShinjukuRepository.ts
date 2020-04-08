import {
  The13104DailyVisitors,
  Convert
} from '~/utils/data_converter/convert13104DailyVisitors'
import {
  BaseRepository,
  IBaseRepository
} from '~/libraries/repositories/BaseRepository'
// eslint-disable-next-line import/no-named-default
import { default as rawData } from '~/data/13104_daily_visitors.json'

export interface IShinjukuRepository
  extends IBaseRepository<The13104DailyVisitors> {}

export class ShinjukuRepository extends BaseRepository<The13104DailyVisitors>
  implements IShinjukuRepository {
  constructor() {
    super(Convert.toThe13104DailyVisitors(JSON.stringify(rawData)))
  }
}
