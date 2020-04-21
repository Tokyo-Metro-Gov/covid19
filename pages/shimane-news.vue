<template>
  <div class="News">
    <page-header class="mb-3" :icon="headerItem.icon">
      {{ $t('島根県内のお知らせ') }}
    </page-header>
    <StaticCard>
      <ul>
        <li v-for="(item, i) in newsItems" :key="i" class="">
          <a :href="item.url">
            <time
              class="WhatsNew-list-item-anchor-time px-2"
              :datetime="formattedDate(item.date)"
            >
              {{ item.date }}
            </time>
            {{ item.text }}
          </a>
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <div v-for="(item, i) in videoItems" :key="i">
        <p>
          {{ $t(item.text) }}
        </p>
        <iframe
          :src="item.url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import News from '@/data/news.json'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import { convertDateToISO8601Format } from '~/utils/formatDate'

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

  computed: {
    newsItems() {
      return News.newsItems
    },

    videoItems() {
      return News.videoItems
    }
  },

  methods: {
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    }
  },

  head(): MetaInfo {
    return {
      title: this.$t('県内各所のお知らせ') as string
    }
  }
})
</script>
