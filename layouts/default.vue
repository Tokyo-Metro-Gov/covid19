<template>
  <v-app class="app">
    <div v-if="loading" class="loader">
      <img src="/logo.svg" alt="東京都" />
      <scale-loader color="#00A040" />
    </div>
    <div v-else class="appContainer">
      <div class="naviContainer">
        <SideNavigation
          :is-navi-open="isOpenNavigation"
          :class="{ open: isOpenNavigation }"
          @openNavi="openNavigation"
          @closeNavi="hideNavigation"
        />
      </div>
      <div class="mainContainer" :class="{ open: isOpenNavigation }">
        <v-container class="px-4 py-8">
          <nuxt />
        </v-container>
      </div>
    </div>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import SideNavigation from '@/components/SideNavigation.vue'

type LocalData = {
  isOpenNavigation: boolean
  loading: boolean
}

export default Vue.extend({
  components: {
    ScaleLoader,
    SideNavigation
  },
  data(): LocalData {
    return {
      isOpenNavigation: false,
      loading: true
    }
  },
  mounted() {
    this.loading = false
  },
  methods: {
    openNavigation(): void {
      this.isOpenNavigation = true
    },
    hideNavigation(): void {
      this.isOpenNavigation = false
    }
  },
  head(): MetaInfo {
    const { htmlAttrs } = this.$nuxtI18nSeo()
    return {
      htmlAttrs,
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
.app {
  max-width: 1440px;
  margin: 0 auto;
  background-color: inherit !important;
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
      padding-top: 16px !important;
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
