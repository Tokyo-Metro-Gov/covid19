<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard PositiveNumberByDiagnosedDateCard"
  >
    <client-only>
      <time-bar-chart
        :title="$t('確定日別による陽性者数の推移')"
        :title-id="'positive-number-by-diagnosed-date'"
        :chart-id="'positive-number-by-diagnosed-date'"
        :chart-data="graphData"
        :date="date"
        :unit="$t('人')"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000087'"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '各保健所から報告があった患者の発生情報を、検査により陽性であることを医師が確認した日別（確定日別）に整理したものである'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '2022年2月2日以降の報告分には、感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む'
                )
              }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import Data from '@/data/positive_by_diagnosed.json'
import calcDayBeforeRatio from '@/utils/calcDayBeforeRatio'
import formatGraph from '@/utils/formatGraph'
import { isSingleCard } from '@/utils/urls'

export default {
  components: {
    TimeBarChart: {
      extends: TimeBarChart,
      computed: {
        displayInfo() {
          const { lastDay, lastDayData } = calcDayBeforeRatio({
            displayData: this.displayData,
            dataIndex: 1,
          })
          const formattedLastDay = this.$d(lastDay, 'date')
          if (this.dataKind === 'transition') {
            return {
              lText: lastDayData,
              sText: `${formattedLastDay} ${this.$t('日別値')}（${this.$t(
                '現在判明している人数であり、後日修正される場合がある'
              )}）`,
              unit: this.unit,
            }
          }
          return {
            lText: lastDayData,
            sText: `${formattedLastDay} ${this.$t('累計値')}`,
            unit: this.unit,
          }
        },
      },
    },
  },
  data() {
    const formatData = Data.data.map((data) => {
      return {
        日付: data.diagnosed_date,
        小計: data.count,
      }
    })

    // 陽性患者数グラフ
    const graphData = formatGraph(formatData)

    const { date } = Data

    return {
      date,
      graphData,
    }
  },
  computed: {
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
}
</script>
