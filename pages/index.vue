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

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'
import AgencyCard from '@/components/cards/AgencyCard.vue'

export default Vue.extend({
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
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('都内の最新感染動向'),
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('都内の最新感染動向') as string
    }
  }
})
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
