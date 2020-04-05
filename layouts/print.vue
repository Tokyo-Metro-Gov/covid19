<template>
  <v-app class="app-print">
    <div v-if="loading" class="loader">
      <img src="/logo.svg" :alt="$t('東京都')" />
      <scale-loader color="#00A040" />
    </div>
    <div v-else class="print-container">
      <div class="PrintMeta">
        <div class="PrintMeta-HeadingWrapper">
          <div class="PrintMeta-Logo">
            <img src="/logo.svg" :alt="$t('東京都')" />
          </div>
          <h1 class="PrintMeta-Heading">
            {{ $t('新型コロナウイルス感染症') }}
            <br />
            {{ $t('対策サイト') }}
          </h1>
        </div>
        <div class="PrintMeta-QRWrapper">
          <div class="PrintMeta-QR flex-shrink-0" flat tile color="transparent">
            <img src="/site-qr.svg" :alt="$t('2次元コード')" />
          </div>
          <div class="flex-shrink-0" flat tile color="transparent">
            <p class="PrintMeta-Text">
              {{ $t('※最新の情報はWebページをご覧ください') }}
            </p>
            <p class="PrintMeta-Link">https://stopcovid19.metro.tokyo.lg.jp/</p>
          </div>
        </div>
      </div>
      <nuxt />
    </div>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default Vue.extend({
  components: {
    ScaleLoader
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loading = false
    window.addEventListener('load', this.print)
  },
  beforeDestroy() {
    window.removeEventListener('load', this.print)
  },
  methods: {
    print() {
      window.print()
    }
  },
  head(): MetaInfo {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://stopcovid19.metro.tokyo.lg.jp${this.$route.path}`
        }
      ]
    }
  }
})
</script>
<style lang="scss">
.app-print {
  margin: 0 auto;
  background-color: inherit !important;
}

.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  img {
    display: block;
    margin: 0 auto 20px;
  }
}
</style>

<style lang="scss" scoped>
* {
  // Chromeでbackgroundを印刷する設定
  // FirefoxはCSSでの設定では無理そうなので、いったん諦めました
  -webkit-print-color-adjust: exact;
}

.print-container {
  // v-containerの仕様のうち必要なものを書く
  padding: 12px 12px 0 12px;
  margin-right: auto;
  margin-left: auto;
  @media screen {
    @media (min-width: 960px) {
      max-width: 900px;
    }
    @media (min-width: 1264px) {
      max-width: 1185px;
    }
  }
  @media print {
    width: 1050px;
  }
}

.PrintMeta {
  margin-bottom: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &-HeadingWrapper {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 20px 0 0;
  }

  &-Logo {
    margin: 0 16px 0 0;
    width: 110px;
  }

  &-Heading {
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
    text-decoration: none;
  }

  &-QRWrapper {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 0 auto;
  }

  &-QR {
    height: 60px;
    width: 60px;
    margin-right: 1em;

    img {
      max-width: 100%;
    }
  }

  &-Text {
    font-size: 13px;
    color: gray;
    margin-bottom: 0;
    padding-top: 1em;
    width: max-content;
  }

  &-Link {
    font-size: 13px;
    color: gray;
    margin-bottom: 0;
    width: max-content;
  }
}
</style>
