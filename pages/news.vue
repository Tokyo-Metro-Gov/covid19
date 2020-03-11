<template>
  <div class="Parent">
    <h3>お知らせ一覧</h3>
    <v-data-table
      :headers="headers"
      :items="newsItems"
      :hide-default-footer="true"
      :fixed-header="true"
      class="cardTable"
    />
  </div>
</template>
<script>
import News from '@/data/news.json'
export default {
  components: {},
  data() {
    return {
      headers: [
        {
          text: '日付',
          value: 'date',
          sortable: true
        },
        {
          text: 'タイトル',
          value: 'title.ja',
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
  }
}
</script>
<style lang="scss"></style>
