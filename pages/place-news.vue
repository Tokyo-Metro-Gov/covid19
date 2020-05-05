<template>
  <div class="News">
    <page-header class="mb-3" :icon="headerItem.icon">
      {{ $t('県内各所のお知らせ') }}
    </page-header>
    <StaticCard v-for="(item, i) in newsItems" :key="i">
      <h3>{{ $t(item.place_name) }}</h3>
      <ul>
        <li>
          <a :href="item.url">
            {{ $t(item.title) }}
          </a>
        </li>
      </ul>
    </StaticCard>
    <p>
      {{
        $t(
          '※ 県内全てのお知らせを網羅できているわけではないことをご了承ください。'
        )
      }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PlaceNews from '@/data/place_news.json'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },

  data() {
    const data = {
      headerItem: {
        icon: 'mdi-information'
      }
    }
    return data
  },

  head(): MetaInfo {
    return {
      title: this.$t('県内各所のお知らせ') as string
    }
  },

  computed: {
    newsItems() {
      return PlaceNews.placeNewsItems
    }
  }
})
</script>
