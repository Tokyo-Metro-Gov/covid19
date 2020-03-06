<template>
  <v-app class="app">
    <div v-if="loading" class="loader">
      <img src="/logo.svg" alt="東京都" />
      <scale-loader color="#00A040" />
    </div>
    <div v-else class="appContainer">
      <div class="naviContainer">
        <SideNavigation
          :is-navi-open="isNaviOpen"
          :class="{ open: isNaviOpen }"
          @openNavi="showNavi"
          @closeNavi="hideNavi"
        />
      </div>
      <div class="mainContainer" :class="{ open: isNaviOpen }">
        <v-container class="px-4 py-8">
          <nuxt />
        </v-container>
      </div>
    </div>
  </v-app>
</template>
<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import SideNavigation from '@/components/SideNavigation'
export default {
  components: {
    ScaleLoader,
    SideNavigation
  },
  data() {
    return {
      isNaviOpen: false,
      loading: true
    }
  },
  mounted() {
    this.loading = false
  },
  methods: {
    showNavi() {
      this.isNaviOpen = true
    },
    hideNavi() {
      this.isNaviOpen = false
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://stopcovid19.metro.tokyo.lg.jp${this.$route.path}`
        }
      ]
    }
  },
  head() {
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
}
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
    grid-template-columns: 240px auto;
  }
  @include largerThan($huge) {
    grid-template-columns: 325px auto;
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
  overflow-x: hidden;
  overflow-y: auto;
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
