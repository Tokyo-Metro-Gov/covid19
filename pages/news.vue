<template>
  <div :key="`news-${$i18n.locale}`" class="Parent">
    <h2>
      <v-icon size="24" class="WhatsNew-heading-icon">
        mdi-information
      </v-icon>
      {{ $t('News Index') }}
    </h2>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="localizedNewsItems"
        :hide-default-footer="true"
        :fixed-header="true"
        class="cardTable"
      >
        <template v-slot:item.title="{ item }">
          <a v-if="item.url" :href="item.url" target="_blank" rel="noopener">
            {{ item.title }}
            <v-icon size="12">mdi-open-in-new</v-icon>
          </a>
          <span v-else>{{ item.title }}</span>
        </template>
        <template v-slot:item.date="{ item }">
          {{ formatDate(item.date) }}
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<i18n>
{
  "ja": {
    "News Index": "お知らせ一覧",
    "Title": "タイトル",
    "Date": "日付"
  },
  "en": {
    "News Index": "News Index",
    "Title": "Title",
    "Date": "Date"
  },
  "zh-cn": {
    "News Index": "News Index",
    "Title": "Title",
    "Date": "Date"
  },
  "zh-tw": {
    "News Index": "News Index",
    "Title": "Title",
    "Date": "Date"
  },
  "ko": {
    "News Index": "News Index",
    "Title": "Title",
    "Date": "Date"
  },
  "ja-basic": {
    "News Index": "おしらせ いちらん",
    "Title": "けんめい",
    "Date": "ひづけ"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import News from '@/data/news.json'
import { convertDateToISO8601Format } from '@/utils/formatDate'
import * as NewsUtils from '@/utils/newsUtils'
export default Vue.extend({
  components: {},
  data() {
    return {
      headers: [
        {
          text: this.$t('Date'),
          value: 'date',
          sortable: true,
          sort(as: string, bs: string): number {
            const a = new Date(convertDateToISO8601Format(as))
            const b = new Date(convertDateToISO8601Format(bs))
            return a > b ? 1 : a < b ? -1 : 0
          }
        },
        {
          text: this.$t('Title'),
          value: 'title',
          sortable: false
        }
        /*
          {
            text: string
            value: string
            align?: 'start' | 'center' | 'end'
            sortable?: boolean
            filterable?: boolean
            divider?: boolean
            class?: string | string[]
            width?: string | number
            filter?: (value: any, search: string, item: any) => boolean
            sort?: (a: any, b: any) => number
          }
          */
      ],
      newsItems: News.newsItems
    }
  },
  computed: {
    localizedNewsItems: {
      cache: false, // Note: disable cache to re-generate when this.$i18n.locale is changed. Impleve this.
      get(): Array<any> {
        return NewsUtils.localize(this.newsItems, this.$i18n.locale)
      }
    }
  },
  methods: {
    formatDate(datestr: string): string {
      return NewsUtils.formatDate(datestr, this.$i18n.locale)
    }
  }
})
</script>
<style lang="scss" scoped>
h2 {
  margin-bottom: 1em;
}
</style>
