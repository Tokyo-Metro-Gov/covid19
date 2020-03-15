<template>
  <v-col cols="12" md="6" class="DataCard">
    <agency-bar-chart
      :title="$t('都庁来庁者数の推移')"
      :title-id="'agency'"
      :chart-id="'agency'"
      :chart-data="agencyData"
      :date="agencyData.date"
      :url="''"
      :unit="$t('人')"
    >
      <template v-slot:description>
        ※{{ $t("土・日・祝日を除く庁舎開庁日の1週間累計数") }}
      </template>
    </agency-bar-chart>
  </v-col>
</template>

<i18n>
{
  "ja": {
    "都庁来庁者数の推移": "都庁来庁者数の推移",
    "人": "人"
  },
  "en": {
    "都庁来庁者数の推移": "Trend in the number of TMG visitors",
    "人": "persons"
  },
  "zh-cn": {
    "都庁来庁者数の推移": "东京都厅来访人数推移",
    "人": "人"
  },
  "zh-tw": {
    "都庁来庁者数の推移": "東京都廳來訪人數走勢",
    "人": "人"
  },
  "ko": {
    "都庁来庁者数の推移": "도쿄도 청사 방문자 수",
    "人": "인"
  },
  "ja-basic": {
    "都庁来庁者数の推移": "議事堂（ぎじどう）に 来（き）た 人（ひと）の 合計（ごうけい）",
    "人": "にん"
  }
}
</i18n>

<script>
import agencyData from '@/data/agency.json'
import AgencyBarChart from '@/components/AgencyBarChart.vue'

export default {
  components: {
    AgencyBarChart
  },
  data() {
    const agencies = [
      this.$t('第一庁舎計'),
      this.$t('第二庁舎計'),
      this.$t('議事堂計')
    ]
    agencyData.datasets.map(dataset => {
      dataset.label = this.$t(dataset.label)
    })
    return {
      agencyData,
      agencies
    }
  }
}
</script>
