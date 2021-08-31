<template>
  <v-col
    cols="12"
    md="6"
    class="DataCard InfectionMedicalCareProvisionStatusCard"
  >
    <client-only>
      <data-view
        :title="$t(`{date}の状況`, { date: formatDate(date) })"
        title-id="infection-medical-care-provision-status"
        :date="date"
      >
        <section :class="$style.section">
          <h4>{{ $t('感染状況') }}</h4>
          <infection-status
            :aria-label="$t('感染状況')"
            :items="statuses"
            :date="formatDate(statisticDate)"
          />
        </section>
        <section :class="$style.section">
          <h4>{{ $t('医療提供体制') }}</h4>
          <medical-system :aria-label="$t('医療提供体制')" :items="statuses" />
        </section>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import DataView from '@/components/index/_shared/DataView.vue'
import InfectionStatus from '@/components/index/CardsFeatured/InfectionMedicalCareProvisionStatus/Table/InfectionStatus.vue'
import MedicalSystem from '@/components/index/CardsFeatured/InfectionMedicalCareProvisionStatus/Table/MedicalSystem.vue'
import {
  Data as IInfectionMedicalCareProvisionStatusData,
  InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'

type Data = {}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareProvisionStatusData
  date: string
  statisticDate: string
  infectionMedicalCareProvisionStatus: IInfectionMedicalCareProvisionStatus
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    DataView,
    InfectionStatus,
    MedicalSystem,
  },
  computed: {
    statuses() {
      return this.infectionMedicalCareProvisionStatus.data
    },
    date() {
      return this.infectionMedicalCareProvisionStatus.date as string
    },
    statisticDate() {
      return this.infectionMedicalCareProvisionStatus.data[
        '検査統計日時'
      ] as string
    },
    infectionMedicalCareProvisionStatus() {
      return this.$store.state.infectionMedicalCareProvisionStatus
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
  margin: 0 0 20px;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    margin: 5px 0 10px;
    font-weight: normal;
    @include font-size(16);
  }
}

dfn {
  font-style: normal;
  font-weight: 600;
}
</style>
