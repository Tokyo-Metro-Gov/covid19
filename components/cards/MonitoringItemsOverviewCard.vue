<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('モニタリング項目')"
      title-id="monitoring-items-overview"
      :date="monitoringStatusData.date"
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
      <monitoring-items-overview-table
        :aria-label="$t('モニタリング項目')"
        :status="monitoringStatus"
      />
    </data-view>
  </v-col>
</template>

<script>
import monitoringItemsData from '@/data/monitoring_items.json'
import formatMonitoringItems from '@/utils/formatMonitoringItems'
import DataView from '@/components/DataView.vue'
import MonitoringItemsOverviewTable from '@/components/MonitoringItemsOverviewTable.vue'

export default {
  components: {
    DataView,
    MonitoringItemsOverviewTable
  },
  data() {
    // モニタリング指標
    const monitoringItems = formatMonitoringItems(monitoringItemsData.data)

    return {
      monitoringItemsData,
      monitoringItems
    }
  }
}
</script>
