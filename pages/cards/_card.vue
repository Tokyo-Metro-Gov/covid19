<template>
  <component :is="cardComponent" />
</template>

<script>
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'
const ConfirmedCasesDetailsCard = () =>
  import('@/components/cards/ConfirmedCasesDetailsCard.vue')
const ConfirmedCasesNumberCard = () =>
  import('@/components/cards/ConfirmedCasesNumberCard.vue')
const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
const ConfirmedCasesByMunicipalitiesCard = () =>
  import('@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue')
const TestedNumberCard = () => import('@/components/cards/TestedNumberCard.vue')
const TelephoneAdvisoryReportsNumberCard = () =>
  import('@/components/cards/TelephoneAdvisoryReportsNumberCard.vue')
const MonitoringConfirmedCasesNumberCard = () =>
  import('@/components/cards/MonitoringConfirmedCasesNumberCard.vue')
const MonitoringConsultationDeskReportsNumberCard = () =>
  import('@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue')
const MetroCard = () => import('@/components/cards/MetroCard.vue')
const AgencyCard = () => import('@/components/cards/AgencyCard.vue')
const PositiveNumberByDiagnosedDateCard = () =>
  import('@/components/cards/PositiveNumberByDiagnosedDateCard.vue')
const PositiveRateCard = () => import('@/components/cards/PositiveRateCard.vue')
const UntrackedRateCard = () =>
  import('@/components/cards/UntrackedRateCard.vue')
const SevereCaseCard = () => import('@/components/cards/SevereCaseCard.vue')
const HospitalizedNumberCard = () =>
  import('@/components/cards/HospitalizedNumberCard.vue')
const ConsultationAboutFeverNumberCard = () =>
  import('@/components/cards/ConsultationAboutFeverNumberCard.vue')
const TokyoRulesApplicationNumberCard = () =>
  import('@/components/cards/TokyoRulesApplicationNumberCard.vue')
const MonitoringItemsOverviewCard = () =>
  import('@/components/cards/MonitoringItemsOverviewCard.vue')
const PositiveNumberByDevelopedDateCard = () =>
  import('@/components/cards/PositiveNumberByDevelopedDateCard.vue')

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
    HospitalizedNumberCard,
    ConsultationAboutFeverNumberCard,
    TokyoRulesApplicationNumberCard,
    MonitoringItemsOverviewCard,
    PositiveNumberByDevelopedDateCard,
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
      case 'positive-status-severe-case':
        cardComponent = 'severe-case-card'
        break
      case 'number-of-hospitalized':
        cardComponent = 'hospitalized-number-card'
        break
      case 'monitoring-number-of-reports-to-covid19-consultation-desk':
        cardComponent = 'monitoring-consultation-desk-reports-number-card'
        break
      case 'monitoring-items-overview':
        cardComponent = 'monitoring-items-overview-card'
        break
      case 'number-of-reports-to-consultations-about-fever-in-7119':
        cardComponent = 'consultation-about-fever-number-card'
        break
      case 'number-of-tokyo-rules-applied':
        cardComponent = 'tokyo-rules-application-number-card'
        break
      case 'positive-number-by-developed-date':
        cardComponent = 'positive-number-by-developed-date-card'
    }

    return {
      cardComponent,
      title,
      updatedAt,
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
      titleTemplate: (title) => `${this.title || title} | ${defaultTitle}`,
      link: [
        ...getLinksLanguageAlternative(
          `cards/${this.$route.params.card}`,
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ),
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
          template: (title) => `${this.title || title} | ${defaultTitle}`,
          content: '',
        },
        {
          hid: 'description',
          name: 'description',
          template: (updatedAt) =>
            `${this.updatedAt || updatedAt} | ${description}`,
          content: '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          template: (updatedAt) =>
            `${this.updatedAt || updatedAt} | ${description}`,
          content: '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage,
        },
      ],
    }
  },
}
</script>
