<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新型コロナコールセンター相談件数')"
      :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
      :chart-id="'time-bar-chart-contacts'"
      :chart-data="contactsGraph"
      :date="Data.contacts.date"
      :unit="$t('件.reports')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000071'"
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<i18n>
{
  "ja": {
    "新型コロナコールセンター相談件数": "新型コロナコールセンター相談件数",
    "件": {
      "reports": "件"
    }
  },
  "en": {
    "新型コロナコールセンター相談件数": "Number of inquiries to COVID-19 telephone advisory center",
    "件": {
      "reports": "reports"
    }
  },
  "zh-cn": {
    "新型コロナコールセンター相談件数": "新型冠状病毒咨询中心咨询件数",
    "件": {
      "reports": "件"
    }
  },
  "zh-tw": {
    "新型コロナコールセンター相談件数": "新型冠狀病毒諮詢中心諮詢件數",
    "件": {
      "reports": "件"
    }
  },
  "ko": {
    "新型コロナコールセンター相談件数": "코로나 19 콜센터 문의 건수",
    "件": {
      "reports": "건"
    }
  },
  "ja-basic": {
    "新型コロナコールセンター相談件数": "コロナウイルス そうだんで でんわが あった かず",
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
    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data)

    const data = {
      Data,
      contactsGraph
    }
    return data
  }
}
</script>
