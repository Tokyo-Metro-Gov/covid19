<template>
  <v-app class="app">
    <v-overlay v-if="loading" color="#F8F9FA" opacity="1" z-index="9999">
      <div class="loader">
        <img src="/logo.svg" alt="東京都" />
        <scale-loader color="#00A040" />
      </div>
    </v-overlay>
    <div v-if="hasNavigation" class="appContainer">
      <div class="naviContainer">
        <side-navigation
          :is-navi-open="isOpenNavigation"
          :class="{ open: isOpenNavigation }"
          @openNavi="openNavigation"
          @closeNavi="hideNavigation"
        />
      </div>
      <main class="mainContainer" :class="{ open: isOpenNavigation }">
        <v-container class="px-4 py-8">
          <nuxt />
        </v-container>
      </main>
    </div>
    <div v-else class="embed">
      <v-container>
        <nuxt />
      </v-container>
    </div>
    <no-script />
    <development-mode-mark />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import Data from '@/data/data.json'
import SideNavigation from '@/components/SideNavigation.vue'
import NoScript from '@/components/NoScript.vue'
import DevelopmentModeMark from '@/components/DevelopmentModeMark.vue'
import { convertDateToSimpleFormat } from '@/utils/formatDate'

type LocalData = {
  hasNavigation: boolean
  isOpenNavigation: boolean
  loading: boolean
}

export default Vue.extend({
  components: {
    DevelopmentModeMark,
    ScaleLoader,
    SideNavigation,
    NoScript
  },
  data(): LocalData {
    let hasNavigation = true
    let loading = true
    if (this.$route.query.embed === 'true') {
      hasNavigation = false
      loading = false
    } else if (this.$route.query.ogp === 'true') {
      hasNavigation = false
      loading = false
    }

    return {
      hasNavigation,
      loading,
      isOpenNavigation: false
    }
  },
  mounted() {
    this.loading = false
    this.getMatchMedia().addListener(this.hideNavigation)
  },
  beforeDestroy() {
    this.getMatchMedia().removeListener(this.hideNavigation)
  },
  methods: {
    openNavigation(): void {
      this.isOpenNavigation = true
    },
    hideNavigation(): void {
      this.isOpenNavigation = false
    },
    getMatchMedia(): MediaQueryList {
      return window.matchMedia('(min-width: 601px)')
    }
  },
  head(): MetaInfo {
    const { htmlAttrs, meta } = this.$nuxtI18nSeo()
    const ogLocale =
      meta && meta.length > 0
        ? meta[0]
        : {
            hid: 'og:locale',
            name: 'og:locale',
            content: this.$i18n.locale
          }
    return {
      htmlAttrs,
      link: [
        {
          rel: 'canonical',
          href: `https://stopcovid19.metro.tokyo.lg.jp${this.$route.path}`
        },
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css'
        }
      ],
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: this.$tc('東京都')
        },
        {
          hid: 'description',
          name: 'description',
          content:
            convertDateToSimpleFormat(Data.lastUpdate) +
            ' 更新：　' +
            this.$tc(
              '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
            )
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content:
            this.$t('東京都') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            ' ' +
            this.$t('対策サイト')
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://stopcovid19.metro.tokyo.lg.jp${this.$route.path}`
        },
        ogLocale,
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.$t('東京都') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            ' ' +
            this.$t('対策サイト')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            convertDateToSimpleFormat(Data.lastUpdate) +
            ' 更新：　' +
            this.$tc(
              '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
            )
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$tc('ogp.og:image')
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content:
            this.$t('東京都') +
            ' ' +
            this.$t('新型コロナウイルス感染症') +
            ' ' +
            this.$t('対策サイト')
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.$tc('ogp.og:image')
        }
      ]
    }
  }
})
</script>
<style lang="scss">
.app {
  max-width: 1440px;
  margin: 0 auto;
  background-color: inherit !important;
}

.embed {
  .container {
    padding: 0 !important;
  }

  .DataCard {
    padding: 0 !important;
  }
}

.appContainer {
  position: relative;

  @include largerThan($small) {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto;
  }

  @include largerThan($huge) {
    grid-template-columns: 325px 1fr;
    grid-template-rows: auto;
  }
}

.naviContainer {
  background-color: $white;
}

@include lessThan($small) {
  .naviContainer {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: z-index-of(sp-navigation);
  }
}

@include largerThan($small) {
  .naviContainer {
    grid-column: 1/2;
    position: fixed;
    top: 0;
    overflow-y: auto;
    width: 240px;
    height: 100%;
    border-right: 1px solid $gray-4;
    border-left: 1px solid $gray-4;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
    overscroll-behavior: contain;
  }
}

@include largerThan($huge) {
  .naviContainer {
    width: 325px;
  }
}

.open {
  height: 100vh;

  @include largerThan($small) {
    overflow-x: hidden;
    overflow-y: auto;
  }
}

.mainContainer {
  grid-column: 2/3;
  overflow: hidden;

  @include lessThan($small) {
    .container {
      padding-top: 16px;
    }
  }
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
