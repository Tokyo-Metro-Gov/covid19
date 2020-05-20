<template>
  <v-col cols="12" md="6" class="DataCard">
    <consulation-desk-reports-number-chart
      :title="$t('（７）受診相談窓口における相談件数')"
      :title-id="'positive-rate'"
      :chart-id="'positive-rate-chart'"
      :chart-data="ConsuletionReportsGraph"
      :date="ConsuletionReportsDate"
      :items="ConsuletionReportsItems"
      :labels="ConsuletionReportsLabels"
      :unit="$t('件')"
      :data-labels="ConsuletionReportsDataLabels"
      :table-labels="ConsuletionReportsTableLabels"
    >
      <template v-slot:description>
        <ul :class="$style.GraphDesc">
          <li>
            {{
              $t(
                '（注）曜日などによる件数のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去７日間の移動平均値を相談件数として算出'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）新型コロナ受診相談窓口 （帰国者・接触者電話相談センター）を開設した2月7日から作成'
              )
            }}
          </li>
        </ul>
      </template>
    </consulation-desk-reports-number-chart>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import ConsulationDeskReportsNumberChart from '~/components/ConsulationDeskReportsNumberChart'
import Data from '@/data/data.json'
dayjs.extend(duration)

export default {
  components: {
    ConsulationDeskReportsNumberChart
  },
  data() {
    // 検査実施日別状況
    const l = Data.querents.data.length
    const ConsulationReportsCount = []
    const sevendayMoveAverages = []
    const ConsuletionReportsLabels = []
    for (let i = 0; i < l; i++) {
      ConsulationReportsCount.push(Data.querents.data[i]['小計'])
      sevendayMoveAverages.push(Data.querents.data[i]['7日間平均'])
      ConsuletionReportsLabels.push(Data.querents.data[i]['日付'])
    }

    const ConsuletionReportsGraph = [
      ConsulationReportsCount,
      sevendayMoveAverages
    ]
    const ConsuletionReportsItems = [
      this.$t('相談件数'),
      this.$t('７日間移動平均')
    ]
    const ConsuletionReportsDataLabels = [
      this.$t('相談件数'),
      this.$t('７日間移動平均')
    ]
    const ConsuletionReportsTableLabels = [
      this.$t('相談件数'),
      this.$t('７日間移動平均')
    ]

    const ConsulationReportsDate = Data.querents.date
    const data = {
      ConsulationReportsDate,
      ConsuletionReportsGraph,
      ConsuletionReportsItems,
      ConsuletionReportsLabels,
      ConsuletionReportsDataLabels,
      ConsuletionReportsTableLabels
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
    color: $gray-3;
    list-style: none;
    @include font-size(12);
  }
}
</style>
