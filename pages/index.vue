<template>
  <div>
    <site-top-upper />
    <cards-tabs />
    <cards-monitoring v-show="this.$route.query.tab !== 'reference'" />
    <cards-reference v-show="this.$route.query.tab === 'reference'" />
  </div>
</template>

<script>
import Vue from 'vue'
import SiteTopUpper from '@/components/SiteTopUpper.vue'
import CardsTabs from '@/components/CardsTabs.vue'
import CardsMonitoring from '@/components/CardsMonitoring.vue'
import CardsReference from '@/components/CardsReference.vue' 

export default Vue.extend({
  components: {
    SiteTopUpper,
    CardsTabs,
    CardsMonitoring,
    CardsReference
  }
})
</script>
