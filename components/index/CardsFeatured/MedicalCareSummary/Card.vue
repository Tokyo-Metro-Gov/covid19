<template>
  <v-col cols="12" md="6" class="DataCard MedicalCareSummaryCard">
    <client-only>
      <data-view
        :title="
          $t(`{date}の病床使用率等`, { date: formatDate(publicationDate) })
        "
        title-id="medical-care-summary"
        :date="date"
      >
        <frame :class="$style.frame" :level="statuses['レベル']" />
        <medical-system :aria-label="$t('病床使用率等')" :items="statuses" />
        <div :class="$style.link">
          <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
          <app-link
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/kunishihyou.html"
          >
            {{ $t('国の新しいレベル分類のための指標について') }}
          </app-link>
        </div>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import Frame from '@/components/index/CardsFeatured/MedicalCareSummary/Frame.vue'
import MedicalSystem from '@/components/index/CardsFeatured/MedicalCareSummary/Table/MedicalSystem.vue'
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
    MedicalSystem,
    Frame,
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
.frame {
  margin: 10px 0 20px;
}

.link {
  display: flex;
  margin: 16px 0;

  @include font-size(14);
}
</style>
