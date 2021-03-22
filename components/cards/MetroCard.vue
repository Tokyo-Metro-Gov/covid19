<template>
  <v-col cols="12" md="6" class="DataCard MetroCard">
    <client-only>
      <metro-bar-chart
        :title="$t('都営地下鉄の利用者数の推移')"
        :title-id="'predicted-number-of-toei-subway-passengers'"
        :chart-id="'metro-bar-chart'"
        :chart-data="metroGraph"
        :date="metroGraph.date"
        :items="metroGraph.labels"
        :periods="metroGraph.periods"
        :tooltips-title="metroGraphTooltipTitle"
        :tooltips-label="metroGraphTooltipLabel"
        unit="%"
      >
        <template #additionalDescription>
          {{
            $t('{range}の利用者数*の平均値を基準としたときの相対値', {
              range: metroGraph.base_period,
            })
          }}
          <br />
          *{{ $t('都営地下鉄4路線の自動改札出場数') }}
          <br />
          {{
            $t(
              '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
            )
          }}
        </template>
      </metro-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import MetroBarChart from '@/components/MetroBarChart.vue'
import MetroData from '@/data/metro.json'

export default {
  components: {
    MetroBarChart,
  },
  data() {
    // 都営地下鉄の利用者数の推移
    const datasets = MetroData.datasets.map((d) => ({
      ...d,
      label: d.period.begin,
    }))
    const periods = MetroData.datasets.map((d) =>
      this.getWeekLabel(d.period.begin, d.period.end)
    )
    const metroGraph = {
      ...MetroData,
      datasets,
      periods,
    }

    // metroGraph ツールチップ title文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipTitle = (tooltipItems, _) => {
      const duration = metroGraph.periods[tooltipItems[0].index]
      return this.$t('期間: {duration}', { duration })
    }
    // metroGraph ツールチップ label文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipLabel = (tooltipItem, data) => {
      const currentData = data.datasets[tooltipItem.datasetIndex]
      const percentage = `${currentData.data[tooltipItem.index]}%`

      return this.$t('{duration}の利用者数との相対値: {percentage}', {
        // duration = metroGraph.base_period = '2020\/1\/20~2020\/1\/24'
        duration: this.$t(metroGraph.base_period),
        percentage,
      })
    }

    return {
      metroGraph,
      metroGraphTooltipTitle,
      metroGraphTooltipLabel,
    }
  },
  methods: {
    /**
     * 表の横軸に表示する、「MM/DD~MM/DD」形式のラベルを取得する
     */
    getWeekLabel(begin, end) {
      const from = this.$d(dayjs(begin).toDate(), 'dateWithoutYear')
      const to = this.$d(dayjs(end).toDate(), 'dateWithoutYear')
      return `${from}~${to}`
    },
  },
}
</script>
