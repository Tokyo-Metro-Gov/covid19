<template>
  <component :is="cardComponent" />
</template>

<script>
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
import MonitoringConsultationDeskReportsNumberCard from '@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'
import AgencyCard from '@/components/cards/AgencyCard.vue'
import PositiveNumberByDiagnosedDateCard from '@/components/cards/PositiveNumberByDiagnosedDateCard.vue'
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
import ConfirmedCasesIncreaseRatioByWeekCard from '@/components/cards/ConfirmedCasesIncreaseRatioByWeekCard.vue'
import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
import MonitoringStatusOverviewCard from '@/components/cards/MonitoringStatusOverviewCard.vue'
import ConsultationAboutFeverNumberCard from '@/components/cards/ConsultationAboutFeverNumberCard.vue'
import TokyoRulesApplicationNumberCard from '@/components/cards/TokyoRulesApplicationNumberCard.vue'

export default {
  components: {
    MonitoringConfirmedCasesNumberCard,
    SevereCaseCard,
    MonitoringConsultationDeskReportsNumberCard,
    PositiveRateCard,
    UntrackedRateCard,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    MetroCard,
    AgencyCard,
    PositiveNumberByDiagnosedDateCard,
    ConfirmedCasesIncreaseRatioByWeekCard,
    HospitalizedNumberCard,
    MonitoringStatusOverviewCard,
    ConsultationAboutFeverNumberCard,
    TokyoRulesApplicationNumberCard
  },
  data() {
    let title, updatedAt, cardComponent
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        break
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        break
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        break
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        break
      case 'predicted-number-of-toei-subway-passengers':
        cardComponent = 'metro-card'
        break
      case 'agency':
        cardComponent = 'agency-card'
        break
      case 'positive-number-by-diagnosed-date':
        cardComponent = 'positive-number-by-diagnosed-date-card'
        break
      case 'positive-rate':
        cardComponent = 'positive-rate-card'
        break
      case 'monitoring-number-of-confirmed-cases':
        cardComponent = 'monitoring-confirmed-cases-number-card'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        break
      case 'increase-ratio-of-confirmed-cases-by-daily':
        cardComponent = 'confirmed-cases-increase-ratio-by-week-card'
        break
      case 'positive-status-severe-case':
        cardComponent = 'severe-case-card'
        break
      case 'number-of-hospitalized':
        cardComponent = 'hospitalized-number-card'
        break
      case 'monitoring-number-of-reports-to-covid19-consultation-desk':
        cardComponent = 'monitoring-consultation-desk-reports-number-card'
        break
      case 'monitoring-status-overview':
        cardComponent = 'monitoring-status-overview-card'
        break
      case 'number-of-reports-to-consultations-about-fever-in-7119':
        cardComponent = 'consultation-about-fever-number-card'
        break
      case 'number-of-tokyo-rules-applied':
        cardComponent = 'tokyo-rules-application-number-card'
        break
    }

    return {
      cardComponent,
      title,
      updatedAt
    }
  },
  head() {
    const url = 'https://stopcovid19.metro.tokyo.lg.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
    )}`
    const defaultTitle = `${this.$t('東京都')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`

    return {
      titleTemplate: title => `${this.title || title} | ${defaultTitle}`,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}${this.$route.path}/`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          template: title => `${this.title || title} | ${defaultTitle}`,
          content: ''
        },
        {
          hid: 'description',
          name: 'description',
          template: updatedAt =>
            `${this.updatedAt || updatedAt} | ${description}`,
          content: ''
        },
        {
          hid: 'og:description',
          property: 'og:description',
          template: updatedAt =>
            `${this.updatedAt || updatedAt} | ${description}`,
          content: ''
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
