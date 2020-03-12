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
      <div class="DataView-Footer">
        <a class="Permalink" :href="permalink()">
          <time :datetime="date">{{ $t('{date} 更新', { date }) }}</time>
        </a>
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
      </div>
      <div v-if="this.$route.query.embed != 'true'" class="DataView-Share py-2">
        <button @click="openGraphEmbed = true">
          <v-icon class="icon-resize embed" size="40">
            mdi-code-tags
          </v-icon>
          <div class="share-text">
            {{ $t('埋め込む') }}
          </div>
        </button>
        <button @click="twitter">
          <v-icon class="icon-resize twitter" size="40">
            mdi-twitter
          </v-icon>
          <div class="share-text">
            Twitter
          </div>
        </button>
        <button @click="facebook">
          <v-icon class="icon-resize facebook" size="73">
            mdi-facebook
          </v-icon>
          <div class="share-text">
            Facebook
          </div>
        </button>
        <button @click="line">
          <v-icon class="icon-resize line" size="75">
            fab fa-line
          </v-icon>
          <div class="share-text">
            LINE
          </div>
        </button>
      </div>
      <div v-if="openGraphEmbed" class="DataView-Embed pa-2">
        <button @click="openGraphEmbed = false">
          <v-icon size="16">
            mdi-close
          </v-icon>
        </button>
        <div>
          {{ $t('グラフの埋め込み') }}
        </div>
        <textarea v-model="graphEmbedValue" />
      </div>
    </div>
  </v-card>
</template>

<i18n>
{
  "ja": {
    "{date} 更新": "{date} 更新",
    "オープンデータへのリンク": "オープンデータへのリンク",
    "埋め込む": "埋め込む",
    "グラフの埋め込み": "グラフの埋め込み"
  },
  "en": {
    "{date} 更新": "Last update: {date}",
    "オープンデータへのリンク": "Link to Open Data",
    "埋め込む": "Embed",
    "グラフの埋め込み": "Embed Graph"
  },
  "zh-cn": {
    "{date} 更新": "{date} 更新",
    "オープンデータへのリンク": "公开数据的链接",
    "埋め込む": "嵌入",
    "グラフの埋め込み": "嵌入图表"
  },
  "zh-tw": {
    "{date} 更新": "{date} 更新",
    "オープンデータへのリンク": "開放資料連結",
    "埋め込む": "嵌入",
    "グラフの埋め込み": "嵌入圖表"
  },
  "ko": {
    "{date} 更新": "{date} 갱신",
    "オープンデータへのリンク": "공공데이터에의 링크",
    "埋め込む": "퍼가기",
    "グラフの埋め込み": "그래프를 퍼가기"
  },
  "ja-basic": {
    "{date} 更新": "{date} に あたらしく しました",
    "オープンデータへのリンク": "オープンデータ という ページを みたいとき",
    "埋め込む": "うめこむ",
    "グラフの埋め込み": "グラフのうめこみ"
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

  openGraphEmbed: boolean = false

  get graphEmbedValue() {
    const graphEmbedValue =
      '<iframe width="560" height="315" src="' +
      this.permalink(true, true) +
      '" frameborder="0"></iframe>'
    return graphEmbedValue
  }

  permalink(host: boolean = false, embed: boolean = false) {
    let permalink = '/cards/' + this.titleId
    if (embed) {
      permalink = permalink + '?embed=true'
    }
    permalink = this.localePath(permalink)

    if (host) {
      permalink = location.protocol + '//' + location.host + permalink
    }

    return permalink
  }

  twitter() {
    const url = 'https://twitter.com/intent/tweet?url=' + this.permalink(true)
    window.open(url)
  }

  facebook() {
    const url = 'https://www.facebook.com/sharer.php?u=' + this.permalink(true)
    window.open(url)
  }

  line() {
    const url =
      'https://social-plugins.line.me/lineit/share?url=' + this.permalink(true)
    window.open(url)
  }
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
  &-Embed {
    background-color: $gray-5;
  }
  &-Footer {
    @include font-size(12);
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    color: $gray-3 !important;
    text-align: right;
    background-color: $white !important;

    .Permalink {
      color: $gray-3 !important;
    }
    .OpenDataLink {
      text-decoration: none;
      .ExternalLinkIcon {
        vertical-align: text-bottom;
      }
    }
  }
  &-Share {
    display: flex;
    justify-content: space-around;
    background-color: $white !important;

    .icon-resize {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      margin-left: 4px;
      margin-right: 4px;
      margin-bottom: 8px;

      &.embed {
        background: #f2f2f2;
        border: 1px solid #e4e4e4;
      }
      &.twitter {
        color: #fff;
        background: #2a96eb;
      }
      &.facebook {
        color: #364e8a;
      }
      &.line {
        color: #1cb127;
      }
    }
    .share-text {
      color: rgb(3, 3, 3);
      font-size: 13px;
    }
  }
}
textarea {
  font: 400 11px system-ui;
  width: 100%;
  height: 2.4rem;
}
</style>
