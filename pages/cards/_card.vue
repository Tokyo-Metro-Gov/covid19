<template>
  <div>
    <confirmed-cases-details-card />
    <confirmed-cases-number-card />
    <confirmed-cases-attributes-card />
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
