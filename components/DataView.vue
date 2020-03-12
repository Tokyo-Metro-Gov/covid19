<template>
  <v-card class="DataView">
    <div class="DataView-Inner">
      <div class="DataView-Header">
        <h3
          class="DataView-Title"
          :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
        >
          {{ title }}
        </h3>
        <slot name="infoPanel" />
        <slot name="button" />
      </div>
      <div
        :class="
          $vuetify.breakpoint.xs
            ? 'DataView-CardTextForXS'
            : 'DataView-CardText'
        "
      >
        <slot />
      </div>
      <v-footer class="DataView-Footer">
        <time :datetime="date">{{ $t('{date} 更新', { date }) }}</time>
        <a
          v-if="url"
          class="OpenDataLink"
          :href="url"
          target="_blank"
          rel="noopener"
        >
          {{ $t('オープンデータへのリンク') }}
          <v-icon class="ExternalLinkIcon" size="15">
            mdi-open-in-new
          </v-icon>
        </a>
      </v-footer>
    </div>
  </v-card>
</template>

<i18n>
{
  "ja": {
    "{date} 更新": "{date} 更新",
    "オープンデータへのリンク": "オープンデータへのリンク"
  },
  "en": {
    "{date} 更新": "Last update: {date}",
    "オープンデータへのリンク": "Link to Open Data"
  },
  "zh-cn": {
    "{date} 更新": "{date} 更新",
    "オープンデータへのリンク": "公开数据的链接"
  },
  "zh-tw": {
    "{date} 更新": "{date} 更新",
    "オープンデータへのリンク": "開放資料連結"
  },
  "ko": {
    "{date} 更新": "{date} 갱신",
    "オープンデータへのリンク": "공공데이터에의 링크"
  },
  "ja-basic": {
    "{date} 更新": "{date} に あたらしく しました",
    "オープンデータへのリンク": "オープンデータ という ページを みたいとき"
  }
}
</i18n>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

@Component
export default class DataView extends Vue {
  @Prop() private title!: string
  @Prop() private titleId!: string
  @Prop() private date!: string
  @Prop() private url!: string
  @Prop() private info!: any // FIXME expect info as {lText:string, sText:string unit:string}

  formattedDate: string = convertDatetimeToISO8601Format(this.date)
}
</script>

<style lang="scss">
.DataView {
  @include card-container();
  height: 100%;
  &-Header {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    padding: 0 10px;
    @include largerThan($medium) {
      padding: 0 5px;
    }
    @include largerThan($large) {
      width: 100%;
      flex-flow: row;
      flex-wrap: wrap;
      padding: 0;
    }
  }
  &-DataInfo {
    &-summary {
      color: $gray-2;
      font-family: Hiragino Sans;
      font-style: normal;
      font-size: 30px;
      line-height: 30px;
      white-space: nowrap;
      &-unit {
        font-size: 0.6em;
        width: 100%;
      }
    }
    &-date {
      font-size: 12px;
      line-height: 12px;
      color: $gray-3;
      width: 100%;
      display: inline-block;
    }
  }
}
.DataView {
  &-Inner {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 22px;
    height: 100%;
  }
  &-Title {
    width: 100%;
    margin-bottom: 10px;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: normal;
    color: $gray-2;
    @include largerThan($large) {
      width: 50%;
      margin-bottom: 0;
    }
  }
  &-CardText {
    margin: 30px 0;
  }
  &-CardTextForXS {
    margin-bottom: 46px;
    margin-top: 70px;
  }
  &-Footer {
    @include font-size(12);
    padding: 0 !important;
    justify-content: space-between;
    flex-direction: row-reverse;
    color: $gray-3 !important;
    text-align: right;
    background-color: $white !important;
    .OpenDataLink {
      text-decoration: none;
      .ExternalLinkIcon {
        vertical-align: text-bottom;
      }
    }
  }
}
</style>
