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
        <div class="Footer-Left">
          <a
            v-if="url"
            class="OpenDataLink"
            :href="url"
            target="_blank"
            rel="noopener"
          >
            {{ $t('オープンデータを入手') }}
            <v-icon class="ExternalLinkIcon" size="15">
              mdi-open-in-new
            </v-icon>
          </a>
          <br />
          <a class="Permalink" :href="permalink()">
            <time :datetime="formattedDate">
              {{ $t('{date} 更新', { date }) }}
            </time>
          </a>
        </div>

        <div v-if="this.$route.query.embed != 'true'" class="Footer-Right">
          <div v-if="displayShare" class="DataView-Share-Buttons py-2">
            <div class="Close-Button">
              <v-icon @click="closeShareMenu">
                mdi-close
              </v-icon>
            </div>

            <h4>埋め込み用コード</h4>

            <div class="EmbedCode">
              <v-icon
                v-if="isCopyAvailable"
                class="EmbedCode-Copy"
                @click="copyEmbedCode"
              >
                far fa-clipboard
              </v-icon>
              {{ graphEmbedValue }}
            </div>

            <div class="Buttons">
              <button @click="twitter">
                <v-icon class="icon-resize twitter" size="30">
                  mdi-twitter
                </v-icon>
              </button>

              <button @click="facebook">
                <v-icon class="icon-resize facebook" size="34">
                  mdi-facebook
                </v-icon>
              </button>

              <button @click="line">
                <v-icon class="icon-resize line" size="34">
                  fab fa-line
                </v-icon>
              </button>
            </div>
          </div>
          <div class="DataView-Share-Opener">
            <v-icon class="share-button" @click="toggleShareMenu">
              fas fa-share-square
            </v-icon>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showOverlay" class="overlay">
      <div class="overlay-text">
        埋め込みURLをコピーしました
      </div>
    </div>
  </v-card>
</template>

<i18n>
{
  "ja": {
    "{date} 更新": "{date} 更新",
    "オープンデータを入手": "オープンデータを入手",
    "埋め込む": "埋め込む",
    "グラフの埋め込み": "グラフの埋め込み"
  },
  "en": {
    "{date} 更新": "Last update: {date}",
    "オープンデータを入手": "Get Open Data",
    "埋め込む": "Embed",
    "グラフの埋め込み": "Embed Graph"
  },
  "zh-cn": {
    "{date} 更新": "{date} 更新",
    "オープンデータを入手": "公开数据的链接",
    "埋め込む": "嵌入",
    "グラフの埋め込み": "嵌入图表"
  },
  "zh-tw": {
    "{date} 更新": "{date} 更新",
    "オープンデータを入手": "開放資料連結",
    "埋め込む": "嵌入",
    "グラフの埋め込み": "嵌入圖表"
  },
  "ko": {
    "{date} 更新": "{date} 갱신",
    "オープンデータを入手": "공공데이터에의 링크",
    "埋め込む": "퍼가기",
    "グラフの埋め込み": "그래프를 퍼가기"
  },
  "ja-basic": {
    "{date} 更新": "{date} に あたらしく しました",
    "オープンデータを入手": "オープンデータを みる",
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

  displayShare: boolean = false

  showOverlay: boolean = false

  get graphEmbedValue() {
    const graphEmbedValue =
      '<iframe width="560" height="315" src="' +
      this.permalink(true, true) +
      '" frameborder="0"></iframe>'
    return graphEmbedValue
  }

  toggleShareMenu() {
    this.displayShare = !this.displayShare
  }

  closeShareMenu() {
    this.displayShare = false
  }

  isCopyAvailable() {
    return !!navigator.clipboard
  }

  copyEmbedCode() {
    const self = this
    navigator.clipboard.writeText(this.graphEmbedValue).then(() => {
      self.closeShareMenu()

      self.showOverlay = true
      setTimeout(() => {
        self.showOverlay = false
      }, 2000)
    })
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
    position: relative;
    @include font-size(12);
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
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

    .Footer-Right {
      .DataView-Share-Buttons {
        position: absolute;
        padding: 8px;
        right: 0px;
        bottom: 2.5em;
        width: 240px;
        border: solid 1px #eee;
        background: $white !important;
        border-radius: 8px;
        text-align: left;
        font-size: 1rem;
        z-index: 9000;

        > * {
          padding: 4px 0px;
        }

        > .Close-Button {
          display: flex;
          justify-content: flex-end;
          color: $gray-3;
        }

        > .EmbedCode {
          position: relative;
          padding: 4px;
          color: rgb(3, 3, 3);
          border: solid 1px #eee;
          border-radius: 8px;

          font-size: 12px;

          .EmbedCode-Copy {
            position: absolute;
            top: 0.3em;
            right: 0.3em;
            color: $gray-3;
          }
        }

        > .Buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;

          .icon-resize {
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-size: 30px;
            margin-left: 4px;
            margin-right: 4px;
            margin-bottom: 8px;

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

            .share-text {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    opacity: 0.8;

    > .overlay-text {
      text-align: center;
      padding: 2em;
      width: 60%;
      background: $gray-2;
      border-radius: 8px;
      color: $white !important;
    }
  }
}

textarea {
  font: 400 11px system-ui;
  width: 100%;
  height: 2.4rem;
}
</style>
