// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/staying_population.json'
import {
  Convert,
  StayingPopulation,
} from '@/libraries/auto_generated/data_converter/convertStayingPopulation'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface IStayingPopulationRepository
  extends IBaseRepository<StayingPopulation> {}

export class StayingPopulationRepository
  extends BaseRepository<StayingPopulation>
  implements IStayingPopulationRepository {
  /**
   * 使用箇所
   *
   * 緊急事態宣言中の都内の滞在人口の増減状況 (components/StayingPopulation.vue)
   */
  constructor() {
    super(Convert.toStayingPopulation(JSON.stringify(rawData)))
  }
}
