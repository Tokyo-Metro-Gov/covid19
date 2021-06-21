<template>
  <div class="SiteTopUpper">
    <whats-new :items="newsItems" />
    <infection-medical-care-provision-status />
    <monitoring-comment-card />
    <div class="row mb-4">
      <staying-population />
      <consultation />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Consultation from '@/components/index/SiteTopUpper/Consultation.vue'
import InfectionMedicalCareProvisionStatus from '@/components/index/SiteTopUpper/InfectionMedicalCareProvisionStatus.vue'
import MonitoringCommentCard from '@/components/index/SiteTopUpper/MonitoringComment/Card.vue'
import StayingPopulation from '@/components/index/SiteTopUpper/StayingPopulation.vue'
import WhatsNew from '@/components/index/SiteTopUpper/WhatsNew.vue'
import {
  News as INews,
  NewsItem as INewsItem,
} from '@/libraries/auto_generated/data_converter/convertNews'

type Data = {}
type Methods = {}
type Computed = {
  newsItems: INewsItem[]
  news: INews
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    WhatsNew,
    InfectionMedicalCareProvisionStatus,
    MonitoringCommentCard,
    Consultation,
    StayingPopulation,
  },
  computed: {
    newsItems() {
      return this.news.newsItems
    },
    news() {
      return this.$store.state.news
    },
  },
})
</script>
