import {
  AgencyRepository,
  IAgencyRepository
} from '@/libraries/repositories/AgencyRepository'
import {
  DataRepository,
  IDataRepository
} from '@/libraries/repositories/DataRepository'
import {
  IMetroRepository,
  MetroRepository
} from '@/libraries/repositories/MetroRepository'
import {
  INewsRepository,
  NewsRepository
} from '@/libraries/repositories/NewsRepository'
import {
  ChiyodaRepository,
  IChiyodaRepository
} from '@/libraries/repositories/ChiyodaRepository'
import {
  IShinjukuRepository,
  ShinjukuRepository
} from '@/libraries/repositories/ShinjukuRepository'

export class Registry {
  public static readonly AgencyRepository: IAgencyRepository = new AgencyRepository()
  public static readonly DataRepository: IDataRepository = new DataRepository()
  public static readonly MetroRepository: IMetroRepository = new MetroRepository()
  public static readonly NewsRepository: INewsRepository = new NewsRepository()
  public static readonly ChiyodaRepository: IChiyodaRepository = new ChiyodaRepository()
  public static readonly ShinjukuRepository: IShinjukuRepository = new ShinjukuRepository()
}
