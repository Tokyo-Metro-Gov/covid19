<template>
  <div class="MainPage">
    <page-header :icon="headerItem.icon">
      {{ headerItem.title }}
    </page-header>
    <v-row class="DataBlock">
      <v-col cols="12" md="12" class="DataCard">
        <map-card
          :title="''"
          :caption="$t('※7:30〜8:30の平均値')"
          :title-id="'tokyo-city-title'"
          :chart-id="'tokyo-city-chart'"
          :map-id="'tokyo-city-map'"
          :initial-bounds="[
            [139.695239, 35.676437],
            [139.773774, 35.694493]
          ]"
          :map-height="640"
          :map-options="{ interactive: true }"
          :unit="'人'"
          :url="'https://ds.yahoo.co.jp/datapolicy/'"
          :source-link-header="
            $t('※本データは2020年3月31日までの掲載となります')
          "
          :heatmap-legend="[20000, 40000, 60000]"
          :link-string="$t('ヤフー・データソリューション')"
          :date="''"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import MapCard from '@/components/MapCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    MapCard
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
