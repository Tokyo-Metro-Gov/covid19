<template>
  <v-col cols="12" md="6" class="DataCard MonitoringItemsOverviewCard">
    <client-only>
      <data-view
        :title="$t('モニタリング項目')"
        title-id="monitoring-items-overview"
        :date="date"
      >
        <template v-if="$route.path !== localePath('/monitoring')" #description>
          <app-link
            :to="localePath('/monitoring')"
            :class="[$style.button, $style['inner-link']]"
          >
            {{ $t('モニタリング項目の各グラフはこちら') }}
          </app-link>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              <i18n
                tag="span"
                path="{number}：急病やけがの際に、緊急受診の必要性や診察可能な医療機関をアドバイスする電話相談窓口"
              >
                <template #number>
                  <dfn>#7119</dfn>
                </template>
              </i18n>
            </li>
            <li>
              {{
                $t(
                  '救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数'
                )
              }}
            </li>
            <li>
              {{ $t('(1)～(4)は7日間移動平均で算出') }}
            </li>
            <li>
              {{ $t('(2)(3)(4)は報告日の前日時点の数値') }}
            </li>
            <li>
              {{ $t('速報値として公表するものであり、後日修正する場合がある') }}
            </li>
            <li>
              {{
                $t(
                  '(2)(4)は土曜日、日曜日、祝日は更新しない。(3)は日曜日、祝日は更新しない'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '(1)には、感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む'
                )
              }}
            </li>
          </ul>
        </template>
        <section :class="$style.section">
          <h4>{{ $t('感染状況') }}</h4>
          <infection-status
            :aria-label="$t('感染状況')"
            :daily-positive="dailyPositiveDetailLastItem"
            :consultation="consultationAboutFeverLastItem"
            :positive-rate-percent="positiveRatePercentLastItem"
            :positive-rate-people="positiveRatePeopleLastItem"
          />
        </section>
        <section :class="$style.section">
          <h4>{{ $t('医療提供体制') }}</h4>
          <medical-system
            :aria-label="$t('医療提供体制')"
            :tokyo-rule="tokyoRuleLastItem"
            :positive-hospitalized="positiveHospitalizedLastItem"
            :positive-serve="positiveServeLastItem"
          />
        </section>
        <div :class="$style['button-wrap']">
          <app-link
            :class="$style.button"
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"
          >
            {{ $t('最新のモニタリング項目の分析・総括コメントについて') }}
          </app-link>
        </div>
        <div>
          <app-link
            :class="$style.button"
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/kunishihyou.html"
          >
            {{ $t('新レベル分類における事象・指標について') }}
          </app-link>
        </div>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import InfectionStatus from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/InfectionStatus.vue'
import MedicalSystem from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/MedicalSystem.vue'
import {
  ConsultationAboutFever as IConsultationAboutFever,
  Datum as IConsultationAboutFeverDatum,
} from '@/libraries/auto_generated/data_converter/convertConsultationAboutFever'
import {
  DailyPositiveDetail as IDailyPositiveDetail,
  Datum as IDailyPositiveDetailDatum,
} from '@/libraries/auto_generated/data_converter/convertDailyPositiveDetail'
import { MonitoringItems as IMonitoringItems } from '@/libraries/auto_generated/data_converter/convertMonitoringItems'
import {
  Datum as IPositiveRateDatum,
  PositiveRate as IPositiveRate,
} from '@/libraries/auto_generated/data_converter/convertPositiveRate'
import {
  Datum as IPositiveStatusDatum,
  PositiveStatus as IPositiveStatus,
} from '@/libraries/auto_generated/data_converter/convertPositiveStatus'
import {
  Datum as ITokyoRuleDatum,
  TokyoRule as ITokyoRule,
} from '@/libraries/auto_generated/data_converter/convertTokyoRule'

type Data = {}

type Methods = {}

type Computed = {
  date: string
  dailyPositiveDetailData: IDailyPositiveDetailDatum[]
  consultationAboutFeverData: IConsultationAboutFeverDatum[]
  positiveRateData: IPositiveRateDatum[]
  tokyoRuleData: ITokyoRuleDatum[]
  positiveStatusData: IPositiveStatusDatum[]
  monitoringItems: IMonitoringItems
  dailyPositiveDetail: IDailyPositiveDetail
  consultationAboutFever: IConsultationAboutFever
  positiveRate: IPositiveRate
  tokyoRule: ITokyoRule
  positiveStatus: IPositiveStatus
  dailyPositiveDetailLastItem: number | null
  consultationAboutFeverLastItem: number | null
  positiveRatePercentLastItem: number | null
  positiveRatePeopleLastItem: number | null
  tokyoRuleLastItem: number | null
  positiveHospitalizedLastItem: number | null
  positiveServeLastItem: number | null
}

type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    DataView,
    InfectionStatus,
    MedicalSystem,
    AppLink,
  },

  computed: {
    date() {
      return this.monitoringItems.date
    },
    dailyPositiveDetailData() {
      return this.dailyPositiveDetail.data
    },
    consultationAboutFeverData() {
      return this.consultationAboutFever.data
    },
    positiveRateData() {
      return this.positiveRate.data
    },
    tokyoRuleData() {
      return this.tokyoRule.data
    },
    positiveStatusData() {
      return this.positiveStatus.data
    },
    monitoringItems() {
      return this.$store.state.monitoringItems
    },
    dailyPositiveDetail() {
      return this.$store.state.dailyPositiveDetail
    },
    consultationAboutFever() {
      return this.$store.state.consultationAboutFever
    },
    positiveRate() {
      return this.$store.state.positiveRate
    },
    tokyoRule() {
      return this.$store.state.tokyoRule
    },
    positiveStatus() {
      return this.$store.state.positiveStatus
    },
    dailyPositiveDetailLastItem() {
      return this.dailyPositiveDetailData[
        this.dailyPositiveDetailData.length - 1
      ].weeklyAverageCount
    },
    consultationAboutFeverLastItem() {
      return this.consultationAboutFeverData[
        this.consultationAboutFeverData.length - 1
      ].weeklyAverageCount
    },
    positiveRatePercentLastItem() {
      return this.positiveRateData[this.positiveRateData.length - 1]
        .positiveRate
    },
    positiveRatePeopleLastItem() {
      return this.positiveRateData[this.positiveRateData.length - 1]
        .weeklyAverageDiagnosedCount
    },
    tokyoRuleLastItem() {
      return this.tokyoRuleData[this.tokyoRuleData.length - 1]
        .weeklyAverageCount
    },
    positiveHospitalizedLastItem() {
      return this.positiveStatusData[this.positiveStatusData.length - 1]
        .hospitalized
    },
    positiveServeLastItem() {
      return this.positiveStatusData[this.positiveStatusData.length - 1]
        .severeCase
    },
  },
})
</script>

<style lang="scss" module>
.section {
  margin: 0 0 20px;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    color: $gray-2;
    margin: 5px 0 10px;
    font-weight: normal;

    @include font-size(16);
  }
}

.button {
  color: $green-1 !important;

  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}

.button-wrap {
  margin-bottom: 16px;
}

.inner-link {
  text-decoration: none;
}

dfn {
  font-style: normal;
  font-weight: 600;
}
</style>
