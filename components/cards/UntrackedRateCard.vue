<template>
  <v-col cols="12" md="6" class="DataCard">
    <untracked-rate-mixed-chart
      :title="$t('（２）新規陽性者における接触歴等不明率')"
      :title-id="'untracked-rate'"
      :chart-id="'untracked-rate-chart'"
      :chart-data="graphData"
      :date="updated"
      :items="items"
      :labels="dateList"
      :unit="$t('人')"
      :data-labels="dataLabels"
      :table-labels="tableLabels"
    >
      <template v-slot:additionalDescription>
        <ul :class="$style.GraphDesc">
          <li>
            {{ $t('（注）PCR検査により陽性であることを医師が確認した日別（確定日別）の新規陽性者数について、接触歴等の不明者、判明者に区分したものである。') }}
          </li>
          <li>
            {{ $t('（注）集団感染発生や曜日による件数のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去７日間の移動平均値を不明率として算出') }}
          </li>
          <li>
            {{ $t('（注）陽性者が1月24日、25日、30日、2月13日にそれぞれ１名、2月14日に２名発生しているが、有意な数値がとれる2月15日から作成') }}
          </li>
        </ul>
      </template>
    </untracked-rate-mixed-chart>
  </v-col>
</template>

<script>
import Data from '@/data/daily_positive_detail.json'
import UntrackedRateMixedChart from '@/components/UntrackedRateMixedChart'

export default {
  components: {
    UntrackedRateMixedChart
  },
  data() {
    const reportedCount = []
    const missingCount = []
    const untrackedRate = []
    const dateList = []

    Data.data
      .filter(d => new Date(d.diagnosed_date) >= new Date('2020-02-15'))
      .forEach(d => {
        reportedCount.push(d.reported_count)
        missingCount.push(d.missing_count)
        untrackedRate.push(d.untracked_percent)
        dateList.push(d.diagnosed_date)
      })

    const updated = Data.date
    const graphData = [reportedCount, missingCount, untrackedRate]

    const items = [
      this.$t('接触歴等判明者数'),
      this.$t('接触歴等不明者数'),
      this.$t('接触歴等不明率（７日間移動平均）')
    ]
    const dataLabels = [
      this.$t('接触歴等判明者数'),
      this.$t('接触歴等不明者数'),
      this.$t('接触歴等不明率（７日間移動平均）')
    ]
    const tableLabels = [
      this.$t('接触歴等判明者数'),
      this.$t('接触歴等不明者数'),
      this.$t('接触歴等不明率（７日間移動平均）')
    ]

    return {
      updated,
      graphData,
      dateList,
      items,
      dataLabels,
      tableLabels
    }
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
