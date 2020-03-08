<template>
  <div>
    <confirmed-cases-details-card
      v-if="
        this.$route.params.card == 'details-of-confirmed-cases'
      "
    />
    <confirmed-cases-number-card
      v-else-if="
        this.$route.params.card == 'number-of-confirmed-cases'
      "
    />
    <confirmed-cases-attributes-card
      v-else-if="
        this.$route.params.card == 'attributes-of-confirmed-cases'
      "
    />
    <tested-number-card
      v-else-if="
        this.$route.params.card == 'number-of-tested'
      "
    />
    <telephone-advisory-reports-number-card
      v-else-if="
        this.$route.params.card == 'number-of-reports-to-covid19-telephone-advisory-center'
      "
    />
    <consultation-desk-reports-number-card
      v-else-if="
        this.$route.params.card == 'number-of-reports-to-covid19-consultation-desk'
      "
    />
    <metro-card
      v-else-if="
        this.$route.params.card == 'predicted-number-of-toei-subway-passengers'
      "
    />
  </div>
</template>

<script>
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard
  },
  // layout: 'card',
  data() {
    let title
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = '検査陽性者の状況'
        break
      case 'number-of-confirmed-cases':
        title = '陽性患者数'
        break
      case 'attributes-of-confirmed-cases':
        title = '陽性患者の属性'
        break
      case 'number-of-tested':
        title = '検査実施数'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        title = '新型コロナコールセンター相談件数'
        break
      case 'number-of-reports-to-covid19-consultation-desk':
        title = '新型コロナ受診相談窓口相談件数'
        break
      case 'predicted-number-of-toei-subway-passengers':
        title = '都営地下鉄の利用者数の推移'
        break
    }

    const data = {
      title
    }
    return data
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          property: 'og:url',
          content: 'https://stopcovid19.metro.tokyo.lg.jp' + this.$route.path
        },
        {
          property: 'og:title',
          content: this.title + ' | 東京都 新型コロナウイルス感染症対策サイト'
        },
        { property: 'og:description', content: 'TOFIX' },
        { property: 'og:image', content: 'TOFIX' },
        { property: 'fb:app_id', content: 'TOFIX' }
      ]
    }
  }
}
</script>
