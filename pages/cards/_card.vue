<template>
  <div>
    <confirmed-cases-details-card
      v-if="this.$route.params.card == 'details-of-confirmed-cases'"
    />
    <confirmed-cases-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <confirmed-cases-attributes-card
      v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'"
    />
    <tested-number-card
      v-else-if="this.$route.params.card == 'number-of-tested'"
    />
    <telephone-advisory-reports-number-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-telephone-advisory-center'
      "
    />
    <consultation-desk-reports-number-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-consultation-desk'
      "
    />
    <metro-card
      v-else-if="
        this.$route.params.card == 'predicted-number-of-toei-subway-passengers'
      "
    />
    <agency-card v-else-if="this.$route.params.card == 'agency'" />
  </div>
</template>

<i18n>
{
  "ja": {
    "検査陽性者の状況": "検査陽性者の状況",
    "陽性患者数": "陽性患者数",
    "陽性患者の属性": "陽性患者の属性",
    "検査実施数": "検査実施数",
    "新型コロナコールセンター相談件数": "新型コロナコールセンター相談件数",
    "新型コロナ受診相談窓口相談件数": "新型コロナ受診相談窓口相談件数",
    "都営地下鉄の利用者数の推移": "都営地下鉄の利用者数の推移",
    "都庁来庁者数の推移": "都庁来庁者数の推移"
  },
  "en": {
    "検査陽性者の状況": "Details of confirmed cases",
    "陽性患者数": "Number of confirmed cases",
    "陽性患者の属性": "Confirmed patient attributes",
    "検査実施数": "Number of tests conducted",
    "新型コロナコールセンター相談件数": "Number of inquiries to COVID-19 telephone advisory center",
    "新型コロナ受診相談窓口相談件数": "Number of inquiries to combined telephone advisory center",
    "都営地下鉄の利用者数の推移": "The predicted number of Toei subway passengers",
    "都庁来庁者数の推移": "Trend in the number of TMG visitors"
  },
  "zh-cn": {
    "検査陽性者の状況": "确诊案例状况",
    "陽性患者数": "确诊人数",
    "陽性患者の属性": "确诊患者的信息",
    "検査実施数": "送检件数",
    "新型コロナコールセンター相談件数": "新型冠状病毒咨询中心咨询件数",
    "新型コロナ受診相談窓口相談件数": "新冠肺炎就诊咨询窗口的咨询数",
    "都営地下鉄の利用者数の推移": "都营地下铁搭乘人数趋势",
    "都庁来庁者数の推移": "东京都厅来访人数推移"
  },
  "zh-tw": {
    "検査陽性者の状況": "確診案例狀況",
    "陽性患者数": "確診人數",
    "陽性患者の属性": "確診案例概況",
    "検査実施数": "送檢件數",
    "新型コロナコールセンター相談件数": "新型冠狀病毒諮詢中心諮詢件數",
    "新型コロナ受診相談窓口相談件数": "就診窗口諮詢數",
    "都営地下鉄の利用者数の推移": "都營地下鐵搭乘人數走勢",
    "都庁来庁者数の推移": "東京都廳來訪人數走勢"
  },
  "ko": {
    "検査陽性者の状況": "확진자의 현황",
    "陽性患者数": "확진자 수",
    "陽性患者の属性": "확진 사례의 세부 사항",
    "検査実施数": "검사실시수",
    "新型コロナコールセンター相談件数": "코로나 19 콜센터 문의 건수",
    "新型コロナ受診相談窓口相談件数": "코로나19 진찰 상담 창구 상담 건수",
    "都営地下鉄の利用者数の推移": "도에이 지하철 의 예상 승객 수",
    "都庁来庁者数の推移": "도쿄도 청사 방문자 수"
  },
  "ja-basic": {
    "検査陽性者の状況": "びょうきの ひとは いま",
    "陽性患者数": "びょうきの ひとの かず",
    "陽性患者の属性": "びょうきの ひとの じょうほう",
    "検査実施数": "けんさした かず",
    "新型コロナコールセンター相談件数": "コロナウイルス そうだんで でんわが あった かず",
    "新型コロナ受診相談窓口相談件数": "コロナのことで とうきょうと に そうだんした ひとの かず",
    "都営地下鉄の利用者数の推移": "とえいちかてつを つかった ひとの かず",
    "都庁来庁者数の推移": "議事堂（ぎじどう）に 来（き）た 人（ひと）の 合計（ごうけい）"
  }
}
</i18n>

<script>
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import agencyData from '@/data/agency.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'
import AgencyCard from '@/components/cards/AgencyCard.vue'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard
  },
  data() {
    let title, updatedAt
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('検査陽性者の状況')
        updatedAt = Data.inspections_summary.date
        break
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        updatedAt = Data.patients.date
        break
      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性患者の属性')
        updatedAt = Data.patients.date
        break
      case 'number-of-tested':
        title = this.$t('検査実施数')
        updatedAt = Data.inspections_summary.date
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        title = this.$t('新型コロナコールセンター相談件数')
        updatedAt = Data.contacts.date
        break
      case 'number-of-reports-to-covid19-consultation-desk':
        title = this.$t('新型コロナ受診相談窓口相談件数')
        updatedAt = Data.querents.date
        break
      case 'predicted-number-of-toei-subway-passengers':
        title = this.$t('都営地下鉄の利用者数の推移')
        updatedAt = MetroData.date
        break
      case 'agency':
        title = this.$t('都庁来庁者数の推移')
        updatedAt = agencyData.date
        break
    }

    const data = {
      title,
      updatedAt
    }
    return data
  },
  head() {
    const url = 'https://stopcovid19.metro.tokyo.lg.jp'
    const ogpImage = url + '/ogp-' + this.$route.params.card + '.png'
    const description =
      this.updatedAt +
      ' 更新 | ' +
      '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、東京都が開設したものです。'

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title + ' | 東京都 新型コロナウイルス感染症対策サイト'
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage
        }
      ]
    }
  }
}
</script>
