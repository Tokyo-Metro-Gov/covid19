<template>
  <v-card class="DataView">
    <div class="DataView-Inner">
      <div class="DataView-Content">
        <div
          class="DataView-TitleContainer"
          :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
        >
          <h3 :id="titleId" class="DataView-Title">
            {{ title }}
          </h3>
          <div>
            <slot name="button" />
          </div>
        </div>
        <slot name="infoPanel" />
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
        <a class="Permalink" :href="permalink()">
          <time :datetime="date">{{ date }} 更新</time>
        </a>
        <a
          v-if="url"
          class="OpenDataLink"
          :href="url"
          target="_blank"
          rel="noopener"
        >
          オープンデータへのリンク
          <v-icon class="ExternalLinkIcon" size="15">
            mdi-open-in-new
          </v-icon>
        </a>
      </v-footer>
      <v-footer v-if="this.$route.query.embed != 'true'" class="DataView-Share">
        <button @click="openGraphEmbed = true">
          <v-icon class="icon-resize embed" size="40">
            mdi-code-tags
          </v-icon>
          <div class="share-text">
            埋め込む
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
      </v-footer>
      <v-footer v-if="openGraphEmbed">
        <button @click="openGraphEmbed = false">
          <v-icon size="16">
            mdi-close
          </v-icon>
        </button>
        <div>
          グラフの埋め込み
        </div>
        <textarea v-model="graphEmbedValue" />
      </v-footer>
    </div>
  </v-card>
</template>

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
    let permalink = ''
    if (host) {
      permalink = location.protocol + '//' + location.host
    }
    permalink = permalink + '/cards/' + this.titleId
    if (embed) {
      permalink = permalink + '?embed=true'
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
  &-Content {
    display: flex;
    justify-content: space-between;
  }
  &-DataInfo {
    position: absolute;
    top: 25px;
    right: 25px;
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
  &-TitleContainer {
    display: flex;
    flex-flow: column;
    color: $gray-2;
    &.with-infoPanel {
      width: calc(100% - 11em);
    }
  }
  &-Title {
    margin-bottom: 5px;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: normal;
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
