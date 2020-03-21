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
      <tested-cases-details-card />
      <confirmed-cases-attributes-card />
      <confirmed-cases-number-card />
      <inspection-persons-number-card />
      <tested-number-card />
      <telephone-advisory-reports-number-card />
      <consultation-desk-reports-number-card />
      <metro-card />
      <agency-card />
      <shinjuku-visitors-card />
    </v-row>
    <v-divider />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <map-card
          :title="$t('新宿駅周辺の人口推移（参考値）')"
          :caption="$t('※7:30〜8:30の平均値')"
          :title-id="'shinjuku-station-title'"
          :chart-id="'shinjuku-station-chart'"
          :map-id="'shinjuku-station-map'"
          :initial-bounds="[
            [139.695239, 35.685448],
            [139.706397, 35.694493]
          ]"
          :unit="'人'"
          :url="'https://ds.yahoo.co.jp/datapolicy/'"
          :source-link-header="
            $t('※本データは2020年3月31日までの掲載となります')
          "
          :detail-page-url="'/largemap'"
          :detail-page-string="$t('東京23区の人口推移（参考値）')"
          :link-string="$t('ヤフー・データソリューション')"
          :date="''"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <map-card
          :title="$t('東京駅周辺の人口推移（参考値）')"
          :caption="$t('※7:30〜8:30の平均値')"
          :title-id="'tokyo-station-title'"
          :chart-id="'tokyo-station-chart'"
          :map-id="'tokyo-station-map'"
          :initial-bounds="[
            [139.761908, 35.676437],
            [139.773774, 35.686703]
          ]"
          :unit="'人'"
          :url="'https://ds.yahoo.co.jp/datapolicy/'"
          :source-link-header="
            $t('※本データは2020年3月31日までの掲載となります')
          "
          :detail-page-url="'/largemap'"
          :detail-page-string="$t('東京23区の人口推移（参考値）')"
          :link-string="$t('ヤフー・データソリューション')"
          :date="''"
        />
      </v-col>
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
import MapCard from '@/components/MapCard.vue'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'
import AgencyCard from '@/components/cards/AgencyCard.vue'
import ShinjukuVisitorsCard from '@/components/cards/ShinjukuVisitorsCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    StaticInfo,
    MapCard,
    ConfirmedCasesDetailsCard,
    TestedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard,
    ShinjukuVisitorsCard
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
