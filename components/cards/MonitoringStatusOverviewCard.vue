<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('モニタリング指標')"
      title-id="monitoring-status-overview"
      :date="monitoringStatusData.date"
    >
      <template v-slot:additionalDescription>
        <ul>
          <li>
            {{
              $t(
                '※（1）、（2）、（6）、（7）は、7日間移動平均で算出（たとえば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）。また、（1）の数字が10人以下となった場合は、（2）及び（3）は参考値とする'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '※（4）（5）の目安となる数値は、患者数に応じた病床の確保数を参考として記載している。'
              )
            }}<br />
            {{
              $t(
                '（4）重症患者数 レベル1：100床 → レベル2：300床 → レベル3：700床'
              )
            }}<br />
            {{
              $t(
                '（5）入院患者数 レベル1：1,000床 → レベル2：3,000床 → レベル3：4,000床'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '※（1）、（2）、（3）は、保健所からの報告日別陽性者数を基に算出'
              )
            }}
          </li>
          <li>
            {{ $t('※速報値として公開するものであり、後日修正される場合あり') }}
          </li>
          <li>
            {{
              $t(
                '※（6）は、日曜日、祝祭日は更新しない。（7）は、土曜日、日曜日、祝祭日は更新しない'
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

    return {
      monitoringStatusData,
      monitoringStatus
    }
  }
}
</script>
