<template>
  <a class="OpenDataLink" :href="url" target="_blank" rel="noopener">
    {{ $t('オープンデータへのリンク') }}
    <v-icon class="ExternalLinkIcon" size="15">
      mdi-open-in-new
    </v-icon>
  </a>
</template>

<i18n>
{
  "ja": {
    "オープンデータへのリンク": "オープンデータへのリンク"
  },
  "en": {
    "オープンデータへのリンク": "Link to Open Data"
  },
  "zh-cn": {
    "オープンデータへのリンク": "公开数据的链接"
  },
  "zh-tw": {
    "オープンデータへのリンク": "開放資料連結"
  },
  "ko": {
    "オープンデータへのリンク": "공공데이터에의 링크"
  },
  "ja-basic": {
    "オープンデータへのリンク": "オープンデータ という ページを みたいとき"
  }
}
</i18n>
<style lang="scss">
.OpenDataLink {
  text-decoration: none;
  .ExternalLinkIcon {
    vertical-align: text-bottom;
  }
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class OpenDataLink extends Vue {
  @Prop() private url!: string
}
</script>
