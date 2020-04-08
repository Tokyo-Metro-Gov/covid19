// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/news.json'
import {
  Convert,
  News,
} from '@/libraries/auto_generated/data_converter/convertNews'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface INewsRepository extends IBaseRepository<News> {}
export class NewsRepository
  extends BaseRepository<News>
  implements INewsRepository {
  /**
   * 使用箇所
   *
   * トップページ上部 (components/SiteTopUpper.vue)
   */
  constructor() {
    super(Convert.toNews(JSON.stringify(rawData)))
  }
}
