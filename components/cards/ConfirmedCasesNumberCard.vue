<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('報告日別による陽性者数の推移')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="patientsGraph"
        :date="date"
        :unit="$t('人')"
        :by-date="true"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
      >
        <template v-slot:description>
          <app-link
            :to="`${
              $i18n.locale !== 'ja' ? $i18n.locale : ''
            }/cards/positive-number-by-developed-date`"
            class="Description-Link"
          >
            {{ $t('発症日別による陽性者数の推移はこちら') }}
          </app-link>
        </template>
        <template v-slot:additionalDescription>
          <div class="Description-ExternalLink">
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/todokedehcyouseisya.html"
            >
              {{ $t('届出保健所別の内訳') }}
            </app-link>
          </div>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('保健所から発生届が提出された日を基準とする') }}
            </li>
            <li>
              {{ $t('医療機関等が行った検査も含む') }}
            </li>
            <li>
              {{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'
import AppLink from '@/components/AppLink.vue'

export default {
  components: {
    TimeBarChart,
    AppLink,
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const date = Data.patients_summary.date

    return {
      patientsGraph,
      date,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}
.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
