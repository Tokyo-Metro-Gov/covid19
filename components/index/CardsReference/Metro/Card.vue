<template>
  <v-col cols="12" md="6" class="DataCard MetroCard">
    <client-only>
      <chart
        :title="$t('都営地下鉄の利用者数の推移')"
        title-id="predicted-number-of-toei-subway-passengers"
        chart-id="metro-line-chart"
        :chart-data="metroGraph"
        :date="date"
        :items="labels"
        :periods="periods"
        :tooltips-title="metroGraphTooltipTitle"
        :tooltips-label="metroGraphTooltipLabel"
        unit="%"
      >
        <template #additionalDescription>
          {{
            $t('{range}の利用者数*の平均値を基準としたときの相対値', {
              range: basePeriod,
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
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import Vue from 'vue'

import Chart from '@/components/index/CardsReference/Metro/Chart.vue'
import {
  Dataset as IMetroDataset,
  Metro as IMetro,
} from '@/libraries/auto_generated/data_converter/convertMetro'

interface IMetroDatasetWithLabel extends IMetroDataset {
  label: Date
}

interface IMetroGraph {
  labels: string[]
  datasets: IMetroDatasetWithLabel[]
}

type Data = {}
type Methods = {
  getWeekLabel: (begin: Date, end: Date) => string
}
type Computed = {
  date: string
  labels: string[]
  datasetsWithLabels: IMetroDatasetWithLabel[]
  periods: string[]
  metroGraph: IMetroGraph
  basePeriod: string
  metroGraphTooltipTitle: (tooltipItems: any) => string
  metroGraphTooltipLabel: (tooltipItem: any, data: any) => string
  metroDatasets: IMetroDataset[]
  metro: IMetro
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  computed: {
    date() {
      return this.metro.date
    },
    labels() {
      return this.metro.labels
    },
    datasetsWithLabels() {
      return this.metroDatasets.map((d) => ({
        ...d,
        label: d.period.begin,
      }))
    },
    periods() {
      return this.metroDatasets.map((d) =>
        this.getWeekLabel(d.period.begin, d.period.end)
      )
    },
    metroGraph() {
      return {
        labels: this.labels,
        datasets: this.datasetsWithLabels,
      }
    },
    basePeriod() {
      // 2020/1/20~2020/1/24
      return this.metro.basePeriod
    },
    // metroGraph ツールチップ title文字列
    metroGraphTooltipTitle() {
      return (tooltipItems) => {
        const duration = this.periods[tooltipItems[0].index]
        return this.$t('期間: {duration}', { duration }) as string
      }
    },
    // metroGraph ツールチップ label文字列
    metroGraphTooltipLabel() {
      return (tooltipItem, data) => {
        const currentData = data.datasets[tooltipItem.datasetIndex]
        const percentage = `${currentData.data[tooltipItem.index]}%`

        return this.$t('{duration}の利用者数との相対値: {percentage}', {
          duration: this.$t(this.basePeriod),
          percentage,
        }) as string
      }
    },
    metroDatasets() {
      return this.metro.datasets
    },
    metro() {
      return this.$store.state.metro
    },
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
})
</script>
