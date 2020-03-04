<template>
  <v-app class="app">
    <div class="loader" v-if="loading">
      <img src="/logo.svg" />
      <scale-loader color="#00A040" />
    </div>
    <div class="appContainer" v-else>
      <div class="naviContainer">
        <SideNavigation
          @openNavi="showNavi"
          @closeNavi="hideNavi"
          :isNaviOpen="isNaviOpen"
          :class="{open: isNaviOpen}"
        />
      </div>
      <div class="mainContainer" :class="{open: isNaviOpen}">
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
    SideNavigation,
  },
  data() {
    return {
      isNaviOpen: false,
      loading: true,
    }
  },
  methods:{
    showNavi: function(){
      this.isNaviOpen = true;
    },
    hideNavi: function(){
      this.isNaviOpen = false;
    }
  },
  mounted() {
    this.loading = false
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
    height: 100vh;
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
  height: 100vh;
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
