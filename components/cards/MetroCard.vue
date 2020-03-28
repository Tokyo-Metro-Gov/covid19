<template>
  <v-col cols="12" md="6" class="DataCard">
    <metro-bar-chart
      :title="$t('都営地下鉄の利用者数の推移')"
      :title-id="'predicted-number-of-toei-subway-passengers'"
      :chart-id="'metro-bar-chart'"
      :chart-data="metroGraph"
      :date="metroGraph.date"
      :tooltips-title="metroGraphTooltipTitle"
      :tooltips-label="metroGraphTooltipLabel"
      :unit="$t('%')"
    >
      <template v-slot:description>
        {{
          $t('{range}の利用者数*の平均値を基準としたときの相対値', {
            range: $t(metroGraph.base_period)
          })
        }}
        <br />
        *{{ $t('都営地下鉄4路線の自動改札出場数') }}
      </template>
    </metro-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import MetroBarChart from '@/components/MetroBarChart.vue'

export default {
  components: {
    MetroBarChart
  },
  data() {
    // 都営地下鉄の利用者数の推移
    const metroGraph = MetroData
    // metroGraph ツールチップ title文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipTitle = (tooltipItems, _) => {
      const label = tooltipItems[0].label
      return this.$t('期間: {duration}', {
        // duration = label = '2月10日~14日' | '2月17日~21日' | '2月25日~28日'
        duration: this.$t(label)
      })
    }
    // metroGraph ツールチップ label文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipLabel = (tooltipItem, data) => {
      const currentData = data.datasets[tooltipItem.datasetIndex]
      const percentage = `${currentData.data[tooltipItem.index]}%`

      return this.$t('{duration}の利用者数との相対値: {percentage}', {
        // duration = metroGraph.base_period = '1月20日~1月24日'
        duration: this.$t(metroGraph.base_period),
        percentage
      })
    }

    const data = {
      Data,
      metroGraph,
      metroGraphTooltipTitle,
      metroGraphTooltipLabel
    }
    return data
  }
}
</script>
