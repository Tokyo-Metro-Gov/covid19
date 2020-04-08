import { Convert, Metro } from '@/libraries/utils/data_converter/convertMetro'
import {
  BaseRepository,
  IBaseRepository
} from '@/libraries/repositories/BaseRepository'
// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/metro.json'

export interface IMetroRepository extends IBaseRepository<Metro> {}

export class MetroRepository extends BaseRepository<Metro> {
  constructor() {
    super(Convert.toMetro(JSON.stringify(rawData)))
  }
}
