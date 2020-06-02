<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">{{ headerItem.title }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="updatedAt">{{ Data.lastUpdate }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }}</span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" :is-emergency="false" />
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 新規患者に関する報告件数の推移 -->
      <confirmed-cases-number-card />
      <!-- モニタリング指標 -->
      <monitoring-status-overview-card />
      <!-- モニタリング(1)新規陽性者数 -->
      <monitoring-confirmed-cases-number-card />
      <!-- モニタリング指標(2)新規陽性者における接触歴等不明率 -->
      <untracked-rate-card />
      <!-- モニタリング指標(3)週単位の陽性者増加比 -->
      <confirmed-cases-increase-ratio-by-week-card />
      <!-- モニタリング指標(4)重症患者数 -->
      <severe-case-card />
      <!-- モニタリング指標(5)入院患者数 -->
      <hospitalized-number-card />
      <!-- モニタリング指標(6)PCR検査の陽性率-->
      <positive-rate-card />
      <!-- モニタリング指標(7)受診相談窓口における相談件数 -->
      <monitoring-consultation-desk-reports-number-card />
      <!-- 陽性患者の属性 -->
      <confirmed-cases-attributes-card />
      <!-- 区市町村別患者数 -->
      <confirmed-cases-by-municipalities-card />
      <!-- 検査実施状況 -->
      <tested-cases-details-card />
      <!-- 検査実施件数 -->
      <tested-number-card />
      <!-- 検査実施人数（健康安全研究センターによる実施分） -->
      <inspection-persons-number-card />
      <!-- PCR検査陽性者の発生動向（確定日別による陽性者数の推移） -->
      <positive-number-by-diagnosed-date-card />
      <!-- 新型コロナコールセンター相談件数 -->
      <telephone-advisory-reports-number-card />
      <!-- 新型コロナ受診相談窓口相談件数 -->
      <consultation-desk-reports-number-card />
      <!-- 都営地下鉄の利用者数の推移 -->
      <metro-card />
      <!-- 都庁来庁者数の推移 -->
      <agency-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import CardRow from '@/components/cards/CardRow.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
import PositiveRateCard from '~/components/cards/PositiveRateCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'
import AgencyCard from '@/components/cards/AgencyCard.vue'
import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
import PositiveNumberByDiagnosedDateCard from '@/components/cards/PositiveNumberByDiagnosedDateCard.vue'
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
import ConfirmedCasesIncreaseRatioByWeekCard from '@/components/cards/ConfirmedCasesIncreaseRatioByWeekCard.vue'
import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
import MonitoringStatusOverviewCard from '@/components/cards/MonitoringStatusOverviewCard.vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import MonitoringConsultationDeskReportsNumberCard from '@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue'

export default Vue.extend({
  components: {
    MonitoringConfirmedCasesNumberCard,
    UntrackedRateCard,
    SevereCaseCard,
    MonitoringConsultationDeskReportsNumberCard,
    PositiveRateCard,
    PageHeader,
    WhatsNew,
    StaticInfo,
    CardRow,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    TestedCasesDetailsCard,
    InspectionPersonsNumberCard,
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard,
    PositiveNumberByDiagnosedDateCard,
    ConfirmedCasesIncreaseRatioByWeekCard,
    HospitalizedNumberCard,
    MonitoringStatusOverviewCard
  },
  data() {
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('都内の最新感染動向')
      },
      newsItems: News.newsItems
    }
    return data
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.Data.lastUpdate)
    }
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
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
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
