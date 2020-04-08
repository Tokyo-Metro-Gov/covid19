import {
  Convert,
  News
} from '@/libraries/auto_generated/data_converter/convertNews'
import {
  BaseRepository,
  IBaseRepository
} from '@/libraries/repositories/BaseRepository'
// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/news.json'

export interface INewsRepository extends IBaseRepository<News> {}

export class NewsRepository extends BaseRepository<News> {
  constructor() {
    super(Convert.toNews(JSON.stringify(rawData)))
  }
}
