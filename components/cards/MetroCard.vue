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
      :url="''"
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

<i18n>
{
  "ja": {
    "都営地下鉄の利用者数の推移": "都営地下鉄の利用者数の推移",
    "期間: {duration}": "期間: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "{duration}の利用者数との相対値: {percentage}",
    "{range}の利用者数*の平均値を基準としたときの相対値": "{range}の利用者数*の平均値を基準としたときの相対値",
    "都営地下鉄4路線の自動改札出場数": "都営地下鉄4路線の自動改札出場数",
    "1月20日~1月24日": "1月20日~1月24日",
    "2月10日~14日": "2月10日~14日",
    "2月17日~21日": "2月17日~21日",
    "2月25日~28日": "2月25日~28日"
  },
  "en": {
    "都営地下鉄の利用者数の推移": "The predicted number of Toei subway passengers",
    "期間: {duration}": "Period: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "Relative value based on the number of users {duration}: {percentage}",
    "{range}の利用者数*の平均値を基準としたときの相対値": "Relative value based on the average number of users {range}",
    "都営地下鉄4路線の自動改札出場数": "Total number of passengers using four Toei subway lines",
    "1月20日~1月24日": "from January 20 to 24",
    "2月10日~14日": "from Feb. 10 to 14",
    "2月17日~21日": "from Feb. 17 to 21",
    "2月25日~28日": "from Feb. 25 to 28"
  },
  "zh-cn": {
    "都営地下鉄の利用者数の推移": "都营地下铁搭乘人数趋势",
    "期間: {duration}": "期间: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "基于{duration}间乘客数的相对值: {percentage}",
    "1月20日~1月24日": "1月20日~1月24日",
    "2月10日~14日": "2月10日~14日",
    "2月17日~21日": "2月17日~21日",
    "2月25日~28日": "2月25日~28日"
  },
  "zh-tw": {
    "都営地下鉄の利用者数の推移": "都營地下鐵搭乘人數走勢",
    "期間: {duration}": "期間: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "基於{duration}的搭乘人數之相對數值: {percentage}",
    "1月20日~1月24日": "1月20日~1月24日",
    "2月10日~14日": "2月10日~14日",
    "2月17日~21日": "2月17日~21日",
    "2月25日~28日": "2月25日~28日"
  },
  "ko": {
    "都営地下鉄の利用者数の推移": "도에이 지하철 의 예상 승객 수",
    "期間: {duration}": "기간: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "{duration}의 이용자수와의 상대치: {percentage}",
    "1月20日~1月24日": "1월 20일~1월24일",
    "2月10日~14日": "2월 10일~14일",
    "2月17日~21日": "2월 17일~21일",
    "2月25日~28日": "2월 25일~28일"
  },
  "ja-basic": {
    "都営地下鉄の利用者数の推移": "とえいちかてつを つかった ひとの かず",
    "期間: {duration}": "きかん: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "ひとの かずを くらべると: {percentage}",
    "1月20日~1月24日": "1がつ20にち から 1がつ24にち",
    "2月10日~14日": "2がつ10にち から 2がつ14にち",
    "2月17日~21日": "2がつ17にち から 2がつ21にち",
    "2月25日~28日": "2がつ25にち から 2がつ28にち"
  }
}
</i18n>

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
