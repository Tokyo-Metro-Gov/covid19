<template>
  <div>
    <h2 v-if="cardCategory" class="card-title">
      <v-icon>{{ mdiChartTimelineVariant }}</v-icon>
      {{ $t(titles[cardCategory]) }}
    </h2>
    <component :is="cardComponent" />
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import type { NuxtConfig } from '@nuxt/types'
import type { NuxtOptionsHead as MetaInfo } from '@nuxt/types/config/head'
import { Component, Vue } from 'nuxt-property-decorator'

// 検査陽性者の状況
import ConfirmedCasesDetailsCard from '@/components/index/CardsFeatured/ConfirmedCasesDetails/Card.vue'
// 報告日別による陽性者数の推移
import ConfirmedCasesNumberCard from '@/components/index/CardsFeatured/ConfirmedCasesNumber/Card.vue'
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
// ---- 注目の指標
// 病床使用率等・患者の発生状況等（サマリ）
import InfectionMedicalCareSummaryCard from '@/components/index/CardsFeatured/InfectionMedicalCareSummary/Card.vue'
// 感染状況・医療提供体制の分析
import MonitoringCommentCard from '@/components/index/CardsFeatured/MonitoringComment/Card.vue'
// 新型コロナコールセンター相談件数
import TelephoneAdvisoryReportsNumberCard from '@/components/index/CardsFeatured/TelephoneAdvisoryReportsNumber/Card.vue'
// 検査実施件数
import TestedNumberCard from '@/components/index/CardsFeatured/TestedNumber/Card.vue'
// 東京都発熱相談センターにおける相談件数
import TokyoFeverConsultationCenterReportsNumberCard from '@/components/index/CardsFeatured/TokyoFeverConsultationCenterReportsNumber/Card.vue'
// ワクチン接種数（累計）
import VaccinationCard from '@/components/index/CardsFeatured/Vaccination/Card.vue'
// モニタリング項目(2)#7119における発熱等相談件数
import ConsultationAboutFeverNumberCard from '@/components/index/CardsMonitoring/ConsultationAboutFeverNumber/Card.vue'
// モニタリング項目(6)入院患者数
import HospitalizedNumberCard from '@/components/index/CardsMonitoring/HospitalizedNumber/Card.vue'
// モニタリング項目(1)新規陽性者数
import MonitoringConfirmedCasesNumberCard from '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Card.vue'
// ---- モニタリング項目
// モニタリング項目
import MonitoringItemsOverviewCard from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Card.vue'
// モニタリング項目(4)検査の陽性率
import PositiveRateCard from '@/components/index/CardsMonitoring/PositiveRate/Card.vue'
// モニタリング項目(7)重症患者数
import SevereCaseCard from '@/components/index/CardsMonitoring/SevereCase/Card.vue'
// モニタリング項目(5)救急医療の東京ルールの適用件数
import TokyoRulesApplicationNumberCard from '@/components/index/CardsMonitoring/TokyoRulesApplicationNumber/Card.vue'
// モニタリング項目(3)新規陽性者における接触歴等不明者数
import UntrackedRateCard from '@/components/index/CardsMonitoring/UntrackedRate/Card.vue'
// 都庁来庁者数の推移
import AgencyCard from '@/components/index/CardsReference/Agency/Card.vue'
// ---- その他 参考指標
// 陽性者の属性
import ConfirmedCasesAttributesCard from '@/components/index/CardsReference/ConfirmedCasesAttributes/Card.vue'
// 陽性者数（区市町村別）
import ConfirmedCasesByMunicipalitiesCard from '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue'
// 死亡日別による死亡者数の推移
import DeathsByDeathDateCard from '@/components/index/CardsReference/DeathsByDeathDate/Card.vue'
// 都営地下鉄の利用者数の推移
import MetroCard from '@/components/index/CardsReference/Metro/Card.vue'
// 受診相談窓口における相談件数
import MonitoringConsultationDeskReportsNumberCard from '@/components/index/CardsReference/MonitoringConsultationDeskReportsNumber/Card.vue'
// 発症日別による陽性者数の推移
import PositiveNumberByDevelopedDateCard from '@/components/index/CardsReference/PositiveNumberByDevelopedDate/Card.vue'
// 確定日別による陽性者数の推移
import PositiveNumberByDiagnosedDateCard from '@/components/index/CardsReference/PositiveNumberByDiagnosedDate/Card.vue'
// 報告日別による陽性者数（65歳以上）の推移
import PositiveNumberOver65Card from '@/components/index/CardsReference/PositiveNumberOver65/Card.vue'
// L452R変異株スクリーニングの実施状況
import VariantCard from '@/components/index/CardsReference/Variant/Card.vue'
import { convertDateToSimpleFormat } from '@/utils/formatDate'
/* eslint-enable simple-import-sort/imports */
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

@Component({
  components: {
    // ---- 注目の指標
    InfectionMedicalCareSummaryCard,
    ConfirmedCasesDetailsCard,
    MonitoringCommentCard,
    VaccinationCard,
    ConfirmedCasesNumberCard,
    TestedNumberCard,
    TokyoFeverConsultationCenterReportsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    // ---- モニタリング項目
    MonitoringItemsOverviewCard,
    MonitoringConfirmedCasesNumberCard,
    ConsultationAboutFeverNumberCard,
    UntrackedRateCard,
    PositiveRateCard,
    TokyoRulesApplicationNumberCard,
    HospitalizedNumberCard,
    SevereCaseCard,
    // ---- その他 参考指標
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    PositiveNumberOver65Card,
    PositiveNumberByDevelopedDateCard,
    PositiveNumberByDiagnosedDateCard,
    DeathsByDeathDateCard,
    VariantCard,
    MetroCard,
    AgencyCard,
    MonitoringConsultationDeskReportsNumberCard,
  },
})
export default class CardContainer extends Vue implements NuxtConfig {
  data() {
    let title, updatedAt, cardComponent, cardCategory
    switch (this.$route.params.card) {
      // NOTE: 以下，ブラウザでの表示順に合わせて条件分岐を行う
      // ---- 注目の指標
      // 病床使用率等・患者の発生状況等（サマリ）
      case 'infection-medical-care-summary':
        cardComponent = 'infection-medical-care-summary-card'
        cardCategory = 'featured'
        break
      // 検査陽性者の状況
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        cardCategory = 'featured'
        break
      // 感染状況・医療提供体制の分析
      case 'monitoring-comment':
        cardComponent = 'monitoring-comment-card'
        cardCategory = 'featured'
        break
      // ワクチン接種数（累計）
      case 'vaccination':
        cardComponent = 'vaccination-card'
        cardCategory = 'featured'
        break
      // 報告日別による陽性者数の推移
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        cardCategory = 'featured'
        break
      // 検査実施件数
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        cardCategory = 'featured'
        break
      // 東京都発熱相談センターにおける相談件数
      case 'number-of-reports-to-tokyo-fever-consultation-center':
        cardComponent = 'tokyo-fever-consultation-center-reports-number-card'
        cardCategory = 'featured'
        break
      // 新型コロナコールセンター相談件数
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        cardCategory = 'featured'
        break
      // ---- モニタリング項目
      // モニタリング項目
      case 'monitoring-items-overview':
        cardComponent = 'monitoring-items-overview-card'
        cardCategory = 'monitoring'
        break
      // モニタリング項目(1)新規陽性者数
      case 'monitoring-number-of-confirmed-cases':
        cardComponent = 'monitoring-confirmed-cases-number-card'
        cardCategory = 'monitoring'
        break
      // モニタリング項目(2)#7119における発熱等相談件数
      case 'number-of-reports-to-consultations-about-fever-in-7119':
        cardComponent = 'consultation-about-fever-number-card'
        cardCategory = 'monitoring'
        break
      // モニタリング項目(3)新規陽性者における接触歴等不明者数
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        cardCategory = 'monitoring'
        break
      // モニタリング項目(4)検査の陽性率
      case 'positive-rate':
        cardComponent = 'positive-rate-card'
        cardCategory = 'monitoring'
        break
      // モニタリング項目(5)救急医療の東京ルールの適用件数
      case 'number-of-tokyo-rules-applied':
        cardComponent = 'tokyo-rules-application-number-card'
        cardCategory = 'monitoring'
        break
      // モニタリング項目(6)入院患者数
      case 'number-of-hospitalized':
        cardComponent = 'hospitalized-number-card'
        cardCategory = 'monitoring'
        break
      // モニタリング項目(7)重症患者数
      case 'positive-status-severe-case':
        cardComponent = 'severe-case-card'
        cardCategory = 'monitoring'
        break
      // ---- その他 参考指標
      // 陽性者の属性
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        cardCategory = 'reference'
        break
      // 陽性者数（区市町村別）
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        cardCategory = 'reference'
        break
      // 報告日別による陽性者数（65歳以上）の推移
      case 'positive-number-over65':
        cardComponent = 'positive-number-over65-card'
        cardCategory = 'reference'
        break
      // 発症日別による陽性者数の推移
      case 'positive-number-by-developed-date':
        cardComponent = 'positive-number-by-developed-date-card'
        cardCategory = 'reference'
        break
      // 確定日別による陽性者数の推移
      case 'positive-number-by-diagnosed-date':
        cardComponent = 'positive-number-by-diagnosed-date-card'
        cardCategory = 'reference'
        break
      // 死亡日別による死亡者数の推移
      case 'deaths-by-death-date':
        cardComponent = 'deaths-by-death-date-card'
        cardCategory = 'reference'
        break
      // L452R変異株スクリーニングの実施状況
      case 'variant':
        cardComponent = 'variant-card'
        cardCategory = 'reference'
        break
      // 都営地下鉄の利用者数の推移
      case 'predicted-number-of-toei-subway-passengers':
        cardComponent = 'metro-card'
        cardCategory = 'reference'
        break
      // 都庁来庁者数の推移
      case 'agency':
        cardComponent = 'agency-card'
        cardCategory = 'reference'
        break
      // 受診相談窓口における相談件数
      case 'monitoring-number-of-reports-to-covid19-consultation-desk':
        cardComponent = 'monitoring-consultation-desk-reports-number-card'
        cardCategory = 'reference'
    }
    /* eslint-enable simple-import-sort/imports */
    return {
      cardComponent,
      cardCategory,
      title,
      updatedAt,
      mdiChartTimelineVariant,
      titles: {
        featured: '注目の指標',
        monitoring: 'モニタリング項目',
        reference: 'その他 参考指標',
      },
    }
  }

  head() {
    const url = 'https://stopcovid19.metro.tokyo.lg.jp'
    const timestamp = new Date().getTime()
    const defaultTitle = `${this.$t('東京都')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`
    const ogpImage =
      (this.$i18n.locale ?? 'ja') === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`

    const mInfo: MetaInfo = {
      title: `${
        (this.$data.title ?? '') !== ''
          ? this.$data.title + ' | ' + defaultTitle
          : defaultTitle
      }`,
      link: [
        ...(getLinksLanguageAlternative(
          `cards/${this.$route.params.card}`,
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ) as []),
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}${this.$route.path}/`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${
            (this.$data.title ?? '') !== ''
              ? this.$data.title + ' | ' + defaultTitle
              : defaultTitle
          }`,
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(this.$data.updatedAt),
          })}: ${this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
          )}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(this.$data.updatedAt),
          })}: ${this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
          )}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${ogpImage}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${ogpImage}`,
        },
      ],
    }
    return mInfo
  }
}
</script>

<style lang="scss">
.card-title {
  @include font-size(24);

  color: $gray-2;
  font-weight: normal;
  padding: 8px 12px;

  @include lessThan($small) {
    @include font-size(20);
  }
}
</style>
