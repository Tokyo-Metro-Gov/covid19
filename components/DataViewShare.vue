<template>
  <div>
    <v-tooltip left nudge-right="20" nudge-bottom="4">
      <template #activator="{ on }">
        <button
          class="DataView-Share-Opener"
          @click="toggleShareMenu"
          v-on="on"
        >
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
      </template>
      <span>{{ $t('情報をシェアする') }}</span>
    </v-tooltip>

    <div
      v-if="displayShare"
      class="DataView-Share-Buttons py-2"
      @click="stopClosingShareMenu"
    >
      <div class="Close-Button">
        <v-icon :aria-label="$t('閉じる')" @click="closeShareMenu">
          {{ mdiClose }}
        </v-icon>
      </div>

      <h4>{{ $t('埋め込み用コード') }}</h4>

      <div class="EmbedCode">
        <v-icon
          v-if="isCopyAvailable()"
          class="EmbedCode-Copy"
          :aria-label="$t('クリップボードにコピー')"
          @click="copyEmbedCode"
          >{{ mdiClipboardOutline }}</v-icon
        >
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
            <img src="/twitter.png" alt="Twitter" class="icon-resize twitter" />
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
    <div v-if="showOverlay" class="overlay">
      <div class="overlay-text">
        {{ $t('埋め込み用コードをコピーしました') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiClipboardOutline, mdiClose } from '@mdi/js'
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      openGraphEmbed: false,
      displayShare: false,
      showOverlay: false,
      mdiClipboardOutline,
      mdiClose,
    }
  },
  computed: {
    graphEmbedValue(): string {
      const graphEmbedValue = `<iframe width="560" height="315" src="${this.permalink(
        true,
        true
      )}" frameborder="0"></iframe>`
      return graphEmbedValue
    },
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
    },
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
      navigator.clipboard.writeText(this.graphEmbedValue).then(() => {
        this.closeShareMenu()

        this.showOverlay = true
        setTimeout(() => {
          this.showOverlay = false
        }, 2000)
      })
    },
    stopClosingShareMenu(e: Event) {
      e.stopPropagation()
    },
    permalink(host: boolean = false, embed: boolean = false) {
      let permalink = `/cards/${this.titleId}`
      if (embed) {
        permalink = `${permalink}?embed=true`
      }
      permalink = this.localePath(permalink)

      if (host) {
        permalink = `${location.protocol}//${location.host}${permalink}`
      }
      return permalink
    },
    twitter() {
      const url = `https://twitter.com/intent/tweet?text=${
        this.title
      } / ${this.$t('東京都')}${this.$t('新型コロナウイルス感染症')}${this.$t(
        '対策サイト'
      )}&url=${this.permalink(true)}&hashtags=StopCovid19JP`
      window.open(url)
    },
    facebook() {
      const url = `https://www.facebook.com/sharer.php?u=${this.permalink(
        true
      )}`
      window.open(url)
    },
    line() {
      const url = `https://social-plugins.line.me/lineit/share?url=${this.permalink(
        true
      )}`
      window.open(url)
    },
  },
})
</script>

<style lang="scss">
/* stylelint-disable no-descending-specificity */

.DataView-Share-Opener {
  cursor: pointer;
  margin: -14px;
  padding: 14px;

  &:focus {
    outline: dotted $gray-3 1px;
  }
}

.DataView-Share-Buttons {
  position: absolute;
  padding: 8px;
  right: 2rem;
  bottom: 3em;
  width: 240px;
  border: solid 1px $gray-4;
  background: $white !important;
  border-radius: 8px;
  text-align: left;
  z-index: 2;
  @include font-size(16);

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
    @include font-size(12);

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
    @include font-size(16);
  }
}
</style>
