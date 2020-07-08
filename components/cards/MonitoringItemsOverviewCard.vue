<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('モニタリング項目')"
      title-id="monitoring-items-overview"
      :date="monitoringItemsData.date"
    >
      <template v-slot:additionalDescription>
        <span>{{ $t('（注）') }}</span>
        <ul>
          <li>
            {{
              $t(
                '(1)(2)(6)(7)は７日間移動平均で算出。また、(1)が10人以下となった場合は、(2)及び(3)は参考値とする'
              )
            }}
          </li>
          <li>
            {{ $t('(1)(2)(3)は保健所からの報告日別陽性者数を基に算出') }}
          </li>
          <li>
            {{ $t('速報値として公表するものであり、後日修正する場合がある') }}
          </li>
          <li>
            {{
              $t(
                '(6)は日曜日、祝日は更新しない。(7)は土曜日、日曜日、祝日は更新しない'
              )
            }}
          </li>
        </ul>
      </template>
      <h4>{{ $t('感染状況') }}</h4>
      <monitoring-items-overview-table-infection-status
        :aria-label="$t('感染状況')"
        :items="monitoringItems"
      />

      <h4>{{ $t('医療提供体制') }}</h4>
      <monitoring-items-overview-table-medical-system
        :aria-label="$t('医療提供体制')"
        :items="monitoringItems"
      />
    </data-view>
  </v-col>
</template>

<script>
import monitoringItemsData from '@/data/monitoring_items.json'
import formatMonitoringItems from '@/utils/formatMonitoringItems'
import DataView from '@/components/DataView.vue'
import MonitoringItemsOverviewTableInfectionStatus from '@/components/MonitoringItemsOverviewTableInfectionStatus.vue'
import MonitoringItemsOverviewTableMedicalSystem from '@/components/MonitoringItemsOverviewTableMedicalSystem.vue'

export default {
  components: {
    DataView,
    MonitoringItemsOverviewTableInfectionStatus,
    MonitoringItemsOverviewTableMedicalSystem
  },
  data() {
    const monitoringItems = formatMonitoringItems(monitoringItemsData.data)
    return {
      monitoringItemsData,
      monitoringItems
    }
  }
}
</script>

<style lang="scss" module>
h4 {
  margin: 20px 0 10px;
  font-weight: normal;
  @include font-size(16);

  &:first-child {
    margin-top: 5px;
  }
}
</style>
