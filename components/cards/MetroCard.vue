<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <metro-bar-chart
        :title="$t('都営地下鉄の利用者数の推移')"
        :title-id="'predicted-number-of-toei-subway-passengers'"
        :chart-id="'metro-bar-chart'"
        :chart-data="metroGraph"
        :date="metroGraph.date"
        :tooltips-title="metroGraphTooltipTitle"
        :tooltips-label="metroGraphTooltipLabel"
        unit="%"
      >
        <template v-slot:description>
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
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import MetroBarChart from '@/components/MetroBarChart.vue'
import { getComplementedDate } from '@/utils/formatDate'

export default {
  components: {
    MetroBarChart,
  },
  data() {
    // 都営地下鉄の利用者数の推移
    const datasets = MetroData.datasets.map((d) => ({
      ...d,
      label: this.getWeekLabel(d.label),
    }))
    const metroGraph = {
      ...MetroData,
      datasets,
    }

    // metroGraph ツールチップ title文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipTitle = (tooltipItems, _) => {
      const duration = this.getWeekLabel(tooltipItems[0].label)
      return this.$t('期間: {duration}', { duration })
    }
    // metroGraph ツールチップ label文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipLabel = (tooltipItem, data) => {
      const currentData = data.datasets[tooltipItem.datasetIndex]
      const percentage = `${currentData.data[tooltipItem.index]}%`

      return this.$t('{duration}の利用者数との相対値: {percentage}', {
        // duration = metroGraph.base_period = '1\/20~1\/24'
        duration: this.$t(metroGraph.base_period),
        percentage,
      })
    }

    return {
      Data,
      metroGraph,
      metroGraphTooltipTitle,
      metroGraphTooltipLabel,
    }
  },
  methods: {
    /**
     * 表の横軸に表示する、「MM/DD~MM/DD」形式のラベルを取得する
     */
    getWeekLabel(label) {
      const slashCount = label.split('/').length - 1
      if (slashCount === 1) {
        // MM/DD~DD形式だったので、「~」の後に「MM/」を追加する
        let month = label.substr(0, label.indexOf('/'))

        const startDate = Number(
          label.substr(
            label.indexOf('/') + 1,
            label.indexOf('~') - label.indexOf('/') - 1
          )
        )
        const endDate = Number(label.substr(label.indexOf('~') + 1))
        if (startDate > endDate) {
          const date = new Date()
          date.setMonth(Number(month) + 1)
          month = date.getMonth().toString()
        }

        label = label.replace('~', `~${month}/`)
      }

      const dates = label.split('~')
      if (slashCount === 1 && dates.length === 2) {
        const from = this.$d(
          getComplementedDate(dates[0]),
          'dateWithoutYear'
        )
        const to = this.$d(
          getComplementedDate(dates[1]),
          'dateWithoutYear'
        )
        return `${from}~${to}`
      } else {
        return `${dates[0]}~${dates[1]}`
      }
    },
  },
}
</script>
