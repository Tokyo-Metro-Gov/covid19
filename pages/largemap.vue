<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon">
      {{ headerItem.title }}
    </page-header>
    <v-row class="DataBlock">
      <tokyo-city-map-card />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import TokyoCityMapCard from '@/components/cards/TokyoCityMapCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    TokyoCityMapCard
  },
  data() {
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('東京都23区の人口推移（参考値）'),
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('東京都23区の人口推移（参考値）') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
