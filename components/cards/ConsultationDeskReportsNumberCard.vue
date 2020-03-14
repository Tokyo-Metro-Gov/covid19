<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新型コロナ受診相談窓口相談件数')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-bar-chart-querents'"
      :chart-data="querentsGraph"
      :date="Data.querents.date"
      :unit="$t('件.reports')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070'"
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<i18n>
{
  "ja": {
    "新型コロナ受診相談窓口相談件数": "新型コロナ受診相談窓口相談件数",
    "件": {
      "reports": "件"
    }
  },
  "en": {
    "新型コロナ受診相談窓口相談件数": "Number of inquiries to combined telephone advisory center",
    "件": {
      "reports": "reports"
    }
  },
  "zh-cn": {
    "新型コロナ受診相談窓口相談件数": "新冠肺炎就诊咨询窗口的咨询数",
    "件": {
      "reports": "件"
    }
  },
  "zh-tw": {
    "新型コロナ受診相談窓口相談件数": "就診窗口諮詢數",
    "件": {
      "reports": "件"
    }
  },
  "ko": {
    "新型コロナ受診相談窓口相談件数": "코로나19 진찰 상담 창구 상담 건수",
    "件": {
      "reports": "건"
    }
  },
  "ja-basic": {
    "新型コロナ受診相談窓口相談件数": "コロナのことで とうきょうと に そうだんした ひとの かず",
    "件": {
      "reports": "けん"
    }
  }
}
</i18n>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 帰国者・接触者電話相談センター相談件数
    const querentsGraph = formatGraph(Data.querents.data)

    const data = {
      Data,
      querentsGraph
    }
    return data
  }
}
</script>
