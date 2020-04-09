<template>
  <div class="Parent">
    <h2>
      <v-icon size="24" class="WhatsNew-heading-icon">
        mdi-information
      </v-icon>
      お知らせ一覧
    </h2>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="newsItems"
        :hide-default-footer="true"
        :fixed-header="true"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        class="cardTable"
        @page-count="pageCount = $event"
      >
        <template v-slot:item.title="{ item }">
          <a v-if="item.link" :href="item.link" target="_blank" rel="noopener">
            {{ item.title }}
            <v-icon
              class="ExternalLinkIcon"
              size="12"
              aria-label="別タブで開く"
              role="img"
              :aria-hidden="false"
            >
              mdi-open-in-new
            </v-icon>
          </a>
          <span v-else>{{ item.title }}</span>
        </template>
        <template v-slot:item.date="{ item }">
          {{ formatDate(item.date) }}
        </template>
      </v-data-table>
      <v-container class="py-4">
        <v-pagination v-model="page" :length="pageCount" class="pagination" />
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import News from '@/data/news.json'
import { convertDateToISO8601Format } from '@/utils/formatDate'
import * as NewsUtils from '@/utils/newsUtils'
export default Vue.extend({
  components: {},
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: '日付',
          value: 'date',
          sortable: false,
          sort(as: string, bs: string): number {
            const a = new Date(convertDateToISO8601Format(as))
            const b = new Date(convertDateToISO8601Format(bs))
            return a > b ? 1 : a < b ? -1 : 0
          }
        },
        {
          text: 'タイトル',
          value: 'title',
          sortable: false
        }
      ],
      newsItems: News.newsItems
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
a {
  color: $link !important;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>

<style lang="scss">
.v-data-table-header-mobile {
  display: none;
}
.v-application .pagination .primary {
  background-color: $green-1 !important;
  border-color: $green-1 !important;
}
</style>
