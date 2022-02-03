<template>
  <v-col cols="12" md="6" class="DataCard InfectionSummaryCard">
    <client-only>
      <data-view
        :title="
          $t(`{date}の患者の発生状況等`, { date: formatDate(publicationDate) })
        "
        title-id="infection-summary"
        :date="date"
      >
        <section :class="$style.section">
          <infection-status
            :aria-label="$t('患者の発生状況等')"
            :items="statuses"
            :date="formatDate(statisticDate)"
          />
        </section>
        <section :class="$style.section">
          <h4>{{ $t('ワクチン接種状況') }}</h4>
          <vaccination-status
            :aria-label="$t('ワクチン接種状況')"
            :items="statuses"
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
import VaccinationStatus from '@/components/index/CardsFeatured/InfectionSummary/Table/VaccinationStatus.vue'
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
    VaccinationStatus,
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
