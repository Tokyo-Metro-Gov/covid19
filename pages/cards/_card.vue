<template>
  <div>
    <confirmed-cases-details-card v-if="this.$route.params.card == 'details-of-confirmed-cases'" />
    <confirmed-cases-number-card v-else-if="this.$route.params.card == 'number-of-confirmed-cases'" />
    <confirmed-cases-attributes-card v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'" />
    <tested-number-card v-else-if="this.$route.params.card == 'number-of-tested'" />
    <telephone-advisory-reports-number-card v-else-if="this.$route.params.card == 'number-of-reports-to-covid19-telephone-advisory-center'" />
    <consultation-desk-reports-number-card v-else-if="this.$route.params.card == 'number-of-reports-to-covid19-consultation-desk'" />
    <metro-card v-else-if="this.$route.params.card == 'predicted-number-of-toei-subway-passengers'" />
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
    MetroCard,
  },
  // layout: 'card'
}
</script>

<style lang="scss">
</style>
