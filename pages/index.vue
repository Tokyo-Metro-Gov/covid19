<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <confirmed-cases-details-card />
      <confirmed-cases-number-card />
      <confirmed-cases-attributes-card />
      <tested-number-card />
      <telephone-advisory-reports-number-card />
      <consultation-desk-reports-number-card />
      <metro-card />
      <agency-card />
    </v-row>
  </div>
</template>

<i18n>
{
  "ja": {
    "都内の最新感染動向": "都内の最新感染動向",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ",
    "相談の手順を見る": "相談の手順を見る"
  },
  "en": {
    "都内の最新感染動向": "Latest updates on COVID-19 in Tokyo",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "Contact the Telephone Advisory Center if you have any concerns.",
    "相談の手順を見る": "Steps for receiving help"
  },
  "zh-cn": {
    "都内の最新感染動向": "东京都最新新型冠状病毒感染情况",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "如果您或您的家人出现疑似症状，请立即拨打电话咨询",
    "相談の手順を見る": "查看咨询流程"
  },
  "zh-tw": {
    "都内の最新感染動向": "東京都最新新型冠狀病毒感染情形",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "若您或家人出現疑似症狀，請即刻撥打電話諮詢",
    "相談の手順を見る": "查看諮詢流程"
  },
  "ko": {
    "都内の最新感染動向": "도쿄도 코로나19 실시간 현황",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "본인 혹은 가족에게 의심증상이 있을 경우, 콜센터에 먼저 문의하세요.",
    "相談の手順を見る": "상담 절차"
  },
  "ja-basic": {
    "都内の最新感染動向": "とうきょうとでの コロナウイルスの あたらしいじょうほう",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "からだの ぐあいが わるくて こわくなったら でんわして ください",
    "相談の手順を見る": "そうだんの しかたの せつめい"
  }
}
</i18n>

<script>
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
// import formatTable from '@/utils/formatTable'
import News from '@/data/news.json'
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
    PageHeader,
    WhatsNew,
    StaticInfo,
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
    // 退院者グラフ
    const dischargesGraph = formatGraph(Data.discharges_summary.data)
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )

    const data = {
      Data,
      dischargesGraph,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('都内の最新感染動向'),
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head() {
    return {
      title: this.$t('都内の最新感染動向')
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
