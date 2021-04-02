<template>
  <v-col cols="12" md="6" class="DataCard HospitalizedNumberCard">
    <client-only>
      <dashed-rectangle-time-bar-chart
        :title="$t('モニタリング項目(6)')"
        :title-id="'number-of-hospitalized'"
        :info-titles="[$t('入院患者数')]"
        :chart-id="'dashed-rectangle-time-bar-chart-hospitalized'"
        :chart-data="patientsGraph"
        :date="positiveStatus.date"
        :unit="$t('人')"
        :dashed-rectangle-range="'2020-05-11'"
        :added-value="200"
        :table-labels="tableLabels"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000092'"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '2020年5月11日までの入院患者数には宿泊療養者・自宅療養者等を含んでいるため、参考値である'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '当サイトにおいて入院患者数の公表を開始した2020年3月6日から作成'
                )
              }}
            </li>
          </ul>
        </template>
      </dashed-rectangle-time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import DashedRectangleTimeBarChart from '@/components/DashedRectangleTimeBarChart.vue'
import positiveStatus from '@/data/positive_status.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    DashedRectangleTimeBarChart,
  },
  data() {
    const formatData = positiveStatus.data
      .filter((d) => new Date(d.date) >= new Date('2020-03-06'))
      .map((d) => ({
        日付: new Date(d.date),
        小計: d.hospitalized,
      }))
    // 入院患者数グラフ
    const patientsGraph = formatGraph(formatData)
    const tableLabels = [this.$t('入院患者数')]

    return {
      positiveStatus,
      patientsGraph,
      tableLabels,
    }
  },
}
</script>
