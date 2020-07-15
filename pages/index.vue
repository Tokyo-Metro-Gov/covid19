<template>
  <div>
    {{ nav ? nav.languages : 'empty string' }}
    <site-top-upper />
    <cards-tabs />
    <cards-monitoring v-if="this.$route.query.tab !== 'reference'" />
    <cards-reference v-else />
  </div>
</template>

<script lang="ts">
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
  },
  data() {
    return {
      nav: typeof navigator !== 'undefined' ? navigator : null
    }
  }
})
</script>
