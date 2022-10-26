// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/positive_status_summary.json'
import {
  Convert,
  PositiveStatusSummary,
} from '@/libraries/auto_generated/data_converter/convertPositiveStatusSummary'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IPositiveStatusSummaryRepository
  extends IBaseRepository<PositiveStatusSummary> {}

export class PositiveStatusSummaryRepository
  extends BaseRepository<PositiveStatusSummary>
  implements IPositiveStatusSummaryRepository
{
  constructor() {
    super(Convert.toPositiveStatusSummary(JSON.stringify(rawData)))
  }
}
