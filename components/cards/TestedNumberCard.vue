<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stacked-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-stacked-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="Data.inspections_summary.date"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :unit="$t('件.tested')"
      :data-labels="inspectionsDataLabels"
    >
      <!-- 件.tested = 検査数 -->
      <template v-if="$i18n.locale !== 'ja-basic'" v-slot:additionalNotes>
        <ul :class="$style.GraphDesc">
          <li>
            {{ $t('（注）同一の対象者について複数の検体を検査する場合あり') }}
          </li>
          <li>
            {{
              $t(
                '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
              )
            }}
          </li>
        </ul>
      </template>
    </time-stacked-bar-chart>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Data from '@/data/data.json'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
dayjs.extend(duration)

export default {
  components: {
    TimeStackedBarChart
  },
  data() {
    // 検査実施日別状況
    const today = new Date()
    const lastDate = dayjs(
      today.getFullYear() +
        '/' +
        Data.inspections_summary.labels[
          Data.inspections_summary.labels.length - 1
        ]
    ) // 最新の検査実施日
    const lastThursday = lastDate.subtract(1, 'week').day(4) // 先週の木曜日
    const beforeLastThursday = []
    const afterLastThursday = []
    const fromLastThursdayDates =
      dayjs.duration(lastDate.diff(lastThursday)).asDays() + 1 // 先週の木曜日からの日数
    const l = Data.inspections_summary.data['都内'].length
    let i
    for (i = 0; i < l; i++) {
      // 先週の木曜日前後で振り分け
      if (l - i > fromLastThursdayDates) {
        beforeLastThursday.push(Data.inspections_summary.data['都内'][i])
        afterLastThursday.push(0)
      } else {
        beforeLastThursday.push(0)
        afterLastThursday.push(Data.inspections_summary.data['都内'][i])
      }
    }
    const inspectionsGraph = [beforeLastThursday, afterLastThursday]
    const inspectionsItems = [
      this.$t(
        '健康安全研究センター及び医療機関が保険適用で行った検査件数の合計'
      ),
      this.$t(
        '健康安全研究センターの検査件数のみの速報値（保険適用分を含まない未確定値）'
      )
    ]
    const inspectionsLabels = Data.inspections_summary.labels
    const inspectionsDataLabels = [this.$t('確定値'), this.$t('未確定値')]

    const data = {
      Data,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      inspectionsDataLabels
    }
    return data
  }
}
</script>

<style module lang="scss">
.Graph {
  &Desc {
    margin: 0;
    margin-top: 1rem;
    padding-left: 0 !important;
    font-size: 12px;
    color: $gray-3;
    list-style: none;
  }
}
</style>
