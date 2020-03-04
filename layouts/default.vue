<template>
  <v-app class="app">
    <div class="loader" v-if="loading">
      <img src="/logo.svg" />
      <scale-loader color="#00A040" />
    </div>
    <div class="appContainer" v-else>
      <SideNavigation
        @openNavi="showNavi"
        @closeNavi="hideNavi"
        :isNaviOpen="isNaviOpen"
        :class="{open: isNaviOpen}"
      />
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
  @include largerThan($small) {
    display: flex;
  }
}
.navi {
  flex: 0 1 200px;
}
.open {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
.mainContainer {
  flex: 1 1 auto;
  @include largerThan($small) {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100vh;
  }
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
