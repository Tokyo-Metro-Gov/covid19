<template>
  <v-app class="app">
    <div class="loader" v-if="loading">
      <img src="/logo.svg" />
      <scale-loader color="#00A040" />
    </div>
    <div class="d-sm-flex" v-else>
      <SideNavigation
        @openNavi="showNavi"
        @closeNavi="hideNavi"
        :isMobile="isMobile"
        :isNaviOpen="isNaviOpen"
        :class="{open: isMobile && isNaviOpen}"
      />
      <div class="mainContainer px-4">
        <v-container>
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
      isMobile: false,
      loading: true,
    }
  },
  methods:{
    handleResize: function() {
      this.isMobile = window.innerWidth < 600;
    },
    showNavi: function(){
      this.isNaviOpen = true;
    },
    hideNavi: function(){
      this.isNaviOpen = false;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.loading = false
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
<style lang="scss">
.app {
  max-width: 1440px;
  margin: 0 auto;
  background-color: inherit !important;
}
.navi {
  flex: 0 1 200px;
}
.open {
  height: 100vh;
}
.mainContainer {
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  img {
    margin-bottom: 20px;
  }
}
</style>
