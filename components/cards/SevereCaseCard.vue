<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <severe-case-bar-chart
        :title="$t('モニタリング項目(7)')"
        title-id="positive-status-severe-case"
        :info-titles="[$t('重症患者数')]"
        chart-id="time-bar-chart-positive-status-severe-case"
        :chart-data="graphData"
        :date="date"
        :unit="$t('人')"
      >
        <template v-slot:additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '入院患者数のうち、人工呼吸器管理（ECMOを含む）が必要な患者数を計上。'
                )
              }}
              <app-link
                to="https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/011/435/7kai/202008207.pdf"
              >
                {{ $t('重症基準の考え方はこちら') }}
              </app-link>
            </li>
            <li>
              {{
                $t('上記の考え方で重症患者数の計上を開始した4月27日から作成')
              }}
            </li>
          </ul>
        </template>
      </severe-case-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import Data from '@/data/positive_status.json'
import SevereCaseBarChart from '@/components/SevereCaseBarChart.vue'
import { convertDateToISO8601Format } from '@/utils/formatDate.ts'
import AppLink from '@/components/AppLink.vue'

export default {
  components: {
    SevereCaseBarChart,
    AppLink,
  },
  data() {
    const { date } = Data
    const graphData = Data.data
      .filter((d) => new Date(d.date) > new Date('2020-04-26'))
      .filter((d) => !isNaN(d.severe_case))
      .map((d) => ({
        label: convertDateToISO8601Format(d.date),
        transition: d.severe_case,
      }))
    return {
      graphData,
      date,
    }
  },
}
</script>
