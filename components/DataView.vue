<template>
  <v-card class="DataView" :loading="loading">
    <div class="DataView-Inner">
      <div class="DataView-Header">
        <h3
          class="DataView-Title"
          :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
        >
          {{ title }}
        </h3>
        <slot name="infoPanel" />
      </div>
      <div class="DataView-Description">
        <slot name="description" />
      </div>
      <div>
        <slot name="button" />
      </div>
      <div class="DataView-CardText">
        <slot />
      </div>
      <div v-if="this.$slots.dataTable" class="DataView-Details">
        <details v-if="showDetails">
          <summary class="DataView-DetailsSummary" @click="toggleDetails">{{
            $t('テーブルを表示')
          }}</summary>
          <slot name="dataTable" />
        </details>
        <template v-else>
          <slot name="dataTable" />
        </template>
      </div>
      <div class="DataView-Description">
        <slot name="footer-description" />
      </div>
      <div class="DataView-Footer">
        <div class="Footer-Left">
          <slot name="footer" />
          <div>
            <a class="Permalink" :href="permalink()">
              <time :datetime="formattedDate">
                {{ $t('{date} 更新', { date }) }}
              </time>
            </a>
          </div>
        </div>

        <div v-if="this.$route.query.embed != 'true'" class="Footer-Right">
          <button class="DataView-Share-Opener" @click="toggleShareMenu">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="$t('{title}のグラフをシェア', { title })"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z"
                fill="#808080"
              />
            </svg>
          </button>
          <div
            v-if="displayShare"
            class="DataView-Share-Buttons py-2"
            @click="stopClosingShareMenu"
          >
            <div class="Close-Button">
              <v-icon :aria-label="$t('閉じる')" @click="closeShareMenu">
                mdi-close
              </v-icon>
            </div>

            <h4>{{ $t('埋め込み用コード') }}</h4>

            <div class="EmbedCode">
              <v-icon
                v-if="isCopyAvailable()"
                class="EmbedCode-Copy"
                :aria-label="$t('クリップボードにコピー')"
                @click="copyEmbedCode"
              >
                mdi-clipboard-outline
              </v-icon>
              {{ graphEmbedValue }}
            </div>

            <div class="Buttons">
              <button
                :aria-label="$t('LINEで{title}のグラフをシェア', { title })"
                @click="line"
              >
                <picture>
                  <source
                    srcset="/line.webp"
                    type="image/webp"
                    class="icon-resize line"
                  />
                  <img src="/line.png" alt="LINE" class="icon-resize line" />
                </picture>
              </button>

              <button
                :aria-label="$t('Twitterで{title}のグラフをシェア', { title })"
                @click="twitter"
              >
                <picture>
                  <source
                    srcset="/twitter.webp"
                    type="image/webp"
                    class="icon-resize twitter"
                  />
                  <img
                    src="/twitter.png"
                    alt="Twitter"
                    class="icon-resize twitter"
                  />
                </picture>
              </button>

              <button
                :aria-label="$t('facebookで{title}のグラフをシェア', { title })"
                @click="facebook"
              >
                <picture>
                  <source
                    srcset="/facebook.webp"
                    type="image/webp"
                    class="icon-resize facebook"
                  />
                  <img
                    src="/facebook.png"
                    alt="facebook"
                    class="icon-resize facebook"
                  />
                </picture>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showOverlay" class="overlay">
      <div class="overlay-text">
        {{ $t('埋め込みコードをコピーしました') }}
      </div>
      <v-footer class="DataView-Footer">
        <time :datetime="date">{{ $t('{date} 更新', { date }) }}</time>
        <slot name="footer" />
      </v-footer>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      openGraphEmbed: false,
      displayShare: false,
      showOverlay: false,
      showDetails: false
    }
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    },
    graphEmbedValue(): string {
      const graphEmbedValue =
        '<iframe width="560" height="315" src="' +
        this.permalink(true, true) +
        '" frameborder="0"></iframe>'
      return graphEmbedValue
    },
    cardElements() {
      const parent = document.querySelector('.row.DataBlock') as HTMLElement
      const thisCard = this.$el.closest('.DataCard')
      const index = Array.prototype.indexOf.call(parent.children, thisCard) + 1
      const sideIndex = index % 2 === 0 ? index - 1 : index + 1

      const self = document.querySelector(
        `.DataCard:nth-child(${index}`
      ) as HTMLElement
      const side = document.querySelector(`.DataCard:nth-child(${sideIndex}
      `) as HTMLElement
      return [self, side]
    }
  },
  watch: {
    displayShare(isShow: boolean) {
      if (isShow) {
        document.documentElement.addEventListener('click', this.toggleShareMenu)
      } else {
        document.documentElement.removeEventListener(
          'click',
          this.toggleShareMenu
        )
      }
    }
  },
  mounted() {
    this.showDetails = true
    window.addEventListener('resize', this.handleCardHeight)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleCardHeight)
  },
  methods: {
    toggleShareMenu(e: Event) {
      e.stopPropagation()
      this.displayShare = !this.displayShare
    },
    closeShareMenu() {
      this.displayShare = false
    },
    isCopyAvailable() {
      return !!navigator.clipboard
    },
    copyEmbedCode() {
      const self = this
      navigator.clipboard.writeText(this.graphEmbedValue).then(() => {
        self.closeShareMenu()

        self.showOverlay = true
        setTimeout(() => {
          self.showOverlay = false
        }, 2000)
      })
    },
    stopClosingShareMenu(e: Event) {
      e.stopPropagation()
    },
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
    },
    twitter() {
      const url =
        'https://twitter.com/intent/tweet?text=' +
        this.title +
        ' / ' +
        this.$t('東京都') +
        this.$t('新型コロナウイルス感染症') +
        this.$t('対策サイト') +
        '&url=' +
        this.permalink(true) +
        '&' +
        'hashtags=StopCovid19JP'
      window.open(url)
    },
    facebook() {
      const url =
        'https://www.facebook.com/sharer.php?u=' + this.permalink(true)
      window.open(url)
    },
    line() {
      const url =
        'https://social-plugins.line.me/lineit/share?url=' +
        this.permalink(true)
      window.open(url)
    },
    handleCardHeight() {
      const [self, side] = this.cardElements
      if (self) {
        self.style.height = ''
        self.dataset.height = String(self.offsetHeight)
      }
      if (side) {
        side.style.height = ''
        side.dataset.height = String(side.offsetHeight)
      }
    },
    toggleDetails() {
      // アコーディオン開閉時にcardの高さを維持する
      const [self, side] = this.cardElements

      self.dataset.height = self.dataset.height || String(self.offsetHeight)
      side.dataset.height = side.dataset.height || String(side.offsetHeight)

      self.style.height =
        self.style.height === `auto` ? `${self.dataset.height}px` : 'auto'
      side.style.height =
        side.style.height === 'auto' ? 'auto' : `${side.dataset.height}px`
    }
  }
})
</script>

<style lang="scss">
/* stylelint-disable no-descending-specificity */

.DataView {
  @include card-container();

  height: 100%;

  .LegendStickyChart {
    margin: 16px 0;
    position: relative;
    overflow: hidden;
    .scrollable {
      overflow-x: scroll;
      &::-webkit-scrollbar {
        height: 4px;
        background-color: rgba(0, 0, 0, 0.01);
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.07);
      }
    }
    .sticky-legend {
      position: absolute;
      top: 0;
      pointer-events: none;
    }
  }

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
      font-family: Hiragino Sans, sans-serif;
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

  &-Inner {
    display: flex;
    flex-flow: column;
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
      margin-bottom: 0;
      &.with-infoPanel {
        width: 50%;
      }
    }
  }

  &-CardText {
    margin: 16px 0;
  }

  &-Description {
    margin: 10px 0 0;
    font-size: 12px;
    color: $gray-3;

    ul,
    ol {
      list-style-type: none;
      padding: 0;
    }
  }

  &-Details {
    margin: 10px 0;

    .v-data-table .text-end {
      text-align: right;
    }
  }

  &-DetailsSummary {
    @include font-size(14);

    color: $gray-2;
    cursor: pointer;
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
    margin-top: auto;
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

    .Footer-Left {
      text-align: left;
    }

    .Footer-Right {
      position: relative;
      display: flex;
      align-items: flex-end;

      .DataView-Share-Opener {
        cursor: pointer;
        margin-right: 6px;

        > svg {
          width: auto !important;
        }

        &:focus {
          outline: dotted $gray-3 1px;
        }
      }

      .DataView-Share-Buttons {
        position: absolute;
        padding: 8px;
        right: -4px;
        bottom: 1.5em;
        width: 240px;
        border: solid 1px $gray-4;
        background: $white !important;
        border-radius: 8px;
        text-align: left;
        font-size: 1rem;
        z-index: 2;

        > * {
          padding: 4px 0;
        }

        > .Close-Button {
          display: flex;
          justify-content: flex-end;
          color: $gray-3;

          button {
            border-radius: 50%;
            border: 1px solid #fff;

            &:focus {
              border: 1px dotted #707070;
              outline: none;
            }
          }
        }

        > .EmbedCode {
          position: relative;
          padding: 4px;
          padding-right: 30px;
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

          button {
            border-radius: 50%;
            border: solid 1px #eee;

            &:focus {
              border: 1px dotted #707070;
              outline: none;
            }
          }
        }

        > .Buttons {
          display: flex;
          justify-content: center;
          margin-top: 4px;

          .icon-resize {
            border-radius: 50%;
            font-size: 30px;

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

          button {
            width: 30px;
            height: 30px;
            margin-left: 4px;
            margin-right: 4px;

            &:focus {
              border-radius: 50%;
              border: 1px dotted #707070;
              outline: none;
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
    z-index: 1;
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
