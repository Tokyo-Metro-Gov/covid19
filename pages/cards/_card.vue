<template>
  <div>
    <confirmed-cases-details-card
      v-if="this.$route.params.card == 'details-of-confirmed-cases'"
    />
    <tested-cases-details-card
      v-else-if="this.$route.params.card == 'details-of-tested-cases'"
    />
    <confirmed-cases-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <confirmed-cases-by-municipalities-card
      v-else-if="
        this.$route.params.card == 'number-of-confirmed-cases-by-municipalities'
      "
    />
    <confirmed-cases-attributes-card
      v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'"
    />
    <tested-number-card
      v-else-if="this.$route.params.card == 'number-of-tested'"
    />
    <inspection-persons-number-card
      v-else-if="this.$route.params.card == 'number-of-inspection-persons'"
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
    <positive-number-by-diagnosed-date-card
      v-else-if="this.$route.params.card == 'positive-number-by-diagnosed-date'"
    />
    <positive-rate-card
      v-else-if="this.$route.params.card == 'positive-rate'"
    />
    <monitoring-confirmed-cases-number-card
      v-else-if="
        this.$route.params.card === 'monitoring-number-of-confirmed-cases'
      "
    />
    <untracked-rate-card
      v-else-if="this.$route.params.card == 'untracked-rate'"
    />
    <confirmed-cases-increase-ratio-by-week-card
      v-else-if="
        this.$route.params.card == 'increase-ratio-of-confirmed-cases-by-daily'
      "
    />
    <severe-case-card
      v-else-if="this.$route.params.card === 'positive-status-severe-case'"
    />
    <hospitalized-number-card
      v-else-if="this.$route.params.card == 'number-of-hospitalized'"
    />
    <monitoring-consultation-desk-reports-number-card
      v-else-if="
        this.$route.params.card ===
          'monitoring-number-of-reports-to-covid19-consultation-desk'
      "
    />
    <monitoring-status-overview-card
      v-else-if="this.$route.params.card == 'monitoring-status-overview'"
    />
  </div>
</template>

<script>
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import agencyData from '@/data/agency.json'
import patientData from '@/data/patient.json'
import PositiveByDiagnosedData from '@/data/positive_by_diagnosed.json'
import PositiveRate from '@/data/positive_rate.json'
import DailyPositiveDetail from '@/data/daily_positive_detail.json'
import UntrackedRate from '@/data/daily_positive_detail.json'
import PositiveStatus from '@/data/positive_status.json'
import positiveStatus from '@/data/positive_status.json'
import monitoringStatusData from '@/data/monitoring_status.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
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

export default {
  components: {
    MonitoringConfirmedCasesNumberCard,
    SevereCaseCard,
    MonitoringConsultationDeskReportsNumberCard,
    PositiveRateCard,
    UntrackedRateCard,
    ConfirmedCasesDetailsCard,
    TestedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    TestedNumberCard,
    InspectionPersonsNumberCard,
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
    let title, updatedAt
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('検査陽性者の状況')
        updatedAt = Data.inspections_summary.date
        break
      case 'details-of-tested-cases':
        title = this.$t('検査実施状況')
        updatedAt = Data.inspection_status_summary.date
        break
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        updatedAt = Data.patients_summary.date
        break
      case 'number-of-confirmed-cases-by-municipalities':
        title = this.$t('陽性患者数（区市町村別）')
        updatedAt = patientData.date
        break
      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性患者の属性')
        updatedAt = Data.patients.date
        break
      case 'number-of-tested':
        title = this.$t('検査実施件数')
        updatedAt = Data.inspections_summary.date
        break
      case 'number-of-inspection-persons':
        title = this.$t('検査実施人数')
        updatedAt = Data.inspection_persons.date
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
      case 'positive-number-by-diagnosed-date':
        title = this.$t('陽性患者数（検査結果判明日別）')
        updatedAt = PositiveByDiagnosedData.date
        break
      case 'positive-rate':
        title = this.$t('検査実施人数（陰性確認を除く）と陽性率の推移')
        updatedAt = PositiveRate.date
        break
      case 'monitoring-number-of-confirmed-cases':
        title = this.$t('モニタリング指標(1)新規陽性者数')
        updatedAt = DailyPositiveDetail.date
        break
      case 'untracked-rate':
        title = this.$t('モニタリング指標(2)新規陽性者における接触歴等不明率')
        updatedAt = UntrackedRate.date
        break
      case 'increase-ratio-of-confirmed-cases-by-daily':
        title = this.$t('モニタリング指標(3)週単位の陽性者増加比')
        updatedAt = DailyPositiveDetail.date
        break
      case 'positive-status-severe-case':
        title = this.$t('モニタリング指標(4)重症患者数')
        updatedAt = PositiveStatus.date
        break
      case 'number-of-hospitalized':
        title = this.$t('モニタリング指標(5)入院患者数')
        updatedAt = positiveStatus.date
        break
      case 'monitoring-number-of-reports-to-covid19-consultation-desk':
        title = this.$t('（７）受診相談窓口における相談件数')
        updatedAt = Data.querents.date
        break
      case 'monitoring-status-overview':
        title = this.$t('モニタリング指標')
        updatedAt = monitoringStatusData.date
        break
    }

    return {
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
    const description = `${this.updatedAt} | ${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
    )}`

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
          content:
            this.title +
            ' | ' +
            this.$t('東京都') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            this.$t('対策サイト')
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
