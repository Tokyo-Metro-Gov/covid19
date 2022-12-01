<template>
  <v-col cols="12" md="6" class="DataCard InfectionSummaryCard">
    <client-only>
      <data-view
        :title="$t(`{date}の状況`, { date: formatDate(publicationDate) })"
        title-id="infection-summary"
        :date="date"
      >
        <section :class="$style.section">
          <h4>{{ $t('病床使用率等') }}</h4>
          <medical-system :items="statuses" />
          <div :class="$style.link">
            <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/kunishihyou.html"
            >
              {{ $t('新レベル分類における事象・指標について') }}
            </app-link>
          </div>
        </section>
        <section :class="$style.section">
          <h4>{{ $t('患者の発生状況等') }}</h4>
          <infection-status
            :items="statuses"
            :date="formatDate(statisticDate)"
          />
        </section>
        <div :class="$style.link">
          <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
          <app-link
            to="https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"
          >
            {{
              $t(
                '新型コロナウイルスに関連した患者の発生について（過去1週間分）'
              )
            }}
          </app-link>
        </div>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '病床使用率等の分母の病床数は現時点の確保見込数（「国基準 重症者用病床使用率」の分母の病床数は最大確保見込数）、分子の人数は確保病床を使用している人数'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  'オミクロン株の特性を踏まえた重症者数は、特定集中治療室管理料又は救命救急入院料を算定する病床の患者数及び人工呼吸器又はＥＣＭＯの装着又はハイフローセラピーを実施する患者数'
                )
              }}
            </li>
            <li>
              {{ $t('新規陽性者数は総数のみの集計である') }}
            </li>
            <li>
              {{
                $t(
                  '感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む'
                )
              }}
            </li>
          </ul>
        </template>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import InfectionStatus from '@/components/index/CardsFeatured/InfectionSummary/Table/InfectionStatus.vue'
import MedicalSystem from '@/components/index/CardsFeatured/InfectionSummary/Table/MedicalSystem.vue'
import {
  Data as IInfectionMedicalCareSummaryData,
  InfectionMedicalcareSummary as IInfectionMedicalCareSummary,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareSummary'

type Data = {
  mdiChevronRight: string
}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareSummaryData
  date: string
  publicationDate: string
  statisticDate: string
  infectionMedicalCareSummary: IInfectionMedicalCareSummary
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
    DataView,
    InfectionStatus,
    MedicalSystem,
  },
  data() {
    return {
      mdiChevronRight,
    }
  },
  computed: {
    statuses() {
      return this.infectionMedicalCareSummary.data
    },
    date() {
      return this.infectionMedicalCareSummary.date as string
    },
    publicationDate() {
      return this.infectionMedicalCareSummary.data['日付'] as unknown as string
    },
    statisticDate() {
      return this.infectionMedicalCareSummary.data[
        '検査統計日時'
      ] as unknown as string
    },
    infectionMedicalCareSummary() {
      return this.$store.state.infectionMedicalCareSummary
    },
  },
  methods: {
    formatDate(date) {
      return this.$d(new Date(date), 'date') as string
    },
  },
})
</script>

<style lang="scss" module>
.section {
  margin: 10px 0 20px;

  h4 {
    color: $gray-2;
    margin: 5px 0 10px;
    font-weight: normal;

    @include font-size(16);
  }
}

.frame {
  margin-bottom: 20px;
}

.link {
  display: flex;
  margin: 16px 0;

  @include font-size(14);
}
</style>
