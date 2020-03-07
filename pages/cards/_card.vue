<template>
  <div>
    <confirmed-cases-details-card v-if="this.$route.params.card == 'details-of-confirmed-cases'" />
    <confirmed-cases-number-card v-else-if="this.$route.params.card == 'number-of-confirmed-cases'" />
    <confirmed-cases-attributes-card v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'" />
  </div>
</template>

<script>
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard
  },
  // layout: 'card'
}
</script>

<style lang="scss">
</style>
