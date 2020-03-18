<template>
  <v-col cols="12" md="6" class="DataCard">
    <japan-map-features
      :title="$t('厚生労働省発表データから見る全国状況')"
      :title-id="'japan-maps'"
      :date="japanJson.date"
    />
  </v-col>
</template>

<i18n>
{
  "ja": {
    "検査陽性者の状況": "検査陽性者の状況"
  },
  "en": {
    "検査陽性者の状況": "Details of confirmed cases"
  },
  "zh-cn": {
    "検査陽性者の状況": "确诊案例状况"
  },
  "zh-tw": {
    "検査陽性者の状況": "確診案例狀況"
  },
  "ko": {
    "検査陽性者の状況": "확진자의 현황"
  },
  "ja-basic": {
    "検査陽性者の状況": "びょうきの ひとは いま"
  }
}
</i18n>

<script>
import JapanMapFeatures from '@/components/JapanMapFeatures.vue'
import japanData from '@/data/japan_covid19_data.json'

export default {
  components: {
    JapanMapFeatures
  },
  data() {
    const japanJson = japanData

    const data = {
      japanJson
    }
    return data
  },
  render: h => h(JapanMapFeatures)
}
</script>
