// eslint-disable-next-line import/no-named-default
import { default as rawData } from '@/data/tokyo_rule.json'
import {
  Convert,
  TokyoRule,
} from '@/libraries/auto_generated/data_converter/convertTokyoRule'
import {
  BaseRepository,
  IBaseRepository,
} from '@/libraries/repositories/BaseRepository'

export interface ITokyoRuleRepository extends IBaseRepository<TokyoRule> {}

export class TokyoRuleRepository
  extends BaseRepository<TokyoRule>
  implements ITokyoRuleRepository {
  /**
   * 使用箇所
   *
   * モニタリング項目(5) 救急医療の東京ルールの適用件数 (components/cards/TokyoRulesApplicationNumberCard.vue)
   */
  constructor() {
    super(Convert.toTokyoRule(JSON.stringify(rawData)))
  }
}
