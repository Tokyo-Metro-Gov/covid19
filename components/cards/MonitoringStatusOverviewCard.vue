<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('モニタリング指標')"
      title-id="monitoring-status-overview"
      :date="monitoringStatusData.date"
    >
      <template v-slot:additionalDescription>
        <ul :class="$style.notes">
          <li>
            {{ $t('※（１）（２）（６）（７）は、７日間移動平均で算出') }}
          </li>
          <li>
            {{ $t('※（１）（２）（３）（６）は、確定日別陽性者数を基に算出') }}
          </li>
          <li>
            {{
              $t(
                '※各保健所からの報告を集計しているため、過去に遡って修正する場合がある'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '※（６）は、日曜日、祝祭日は更新しない。（７）は、土曜日、日曜日、祝祭日は更新しない。'
              )
            }}
          </li>
        </ul>
      </template>
      <monitoring-status-overview-table
        :aria-label="$t('モニタリング指標')"
        :status="monitoringStatus"
      />
    </data-view>
  </v-col>
</template>

<style lang="scss" module>
ul.notes {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0 !important;
  color: $gray-3;
  @include font-size(12);

  > li {
    list-style-type: none;
  }
}
</style>

<script>
import monitoringStatusData from '@/data/monitoring_status.json'
import formatMonitoringStatus from '@/utils/formatMonitoringStatus'
import DataView from '@/components/DataView.vue'
import MonitoringStatusOverviewTable from '@/components/MonitoringStatusOverviewTable.vue'

export default {
  components: {
    DataView,
    MonitoringStatusOverviewTable
  },
  data() {
    // モニタリング指標
    const monitoringStatus = formatMonitoringStatus(monitoringStatusData.data)

    const data = {
      monitoringStatusData,
      monitoringStatus
    }
    return data
  }
}
</script>
