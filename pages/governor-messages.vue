<template>
  <div class="News">
    <page-header class="mb-3" :icon="headerItem.icon">
      {{ $t('知事からのメッセージ') }}
    </page-header>
    <StaticCard>
      <ul>
        <li v-for="(item, i) in messageItems" :key="i" class="">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Message from '@/data/pref_message.json'
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
        icon: 'mdi-account-multiple'
      }
    }
    return data
  },

  computed: {
    messageItems(){
      return Message.messageItems
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