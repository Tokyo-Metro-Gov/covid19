<template>
  <v-app class="app">
    <div class="d-sm-flex">
      <SideNavigation @openNavi="hideContents" @closeNavi="showContents" :isMobile="isMobile" />
      <div class="mainContainer px-4" :class="{hide: isMobile && isContentsHide}">
        <v-container>
          <nuxt />
        </v-container>
      </div>
    </div>
  </v-app>
</template>
<script>
import SideNavigation from '@/components/SideNavigation'

export default {
  components: {
    SideNavigation
  },
  data() {
    return {
      isContentsHide: false,
      isMobile: false,
    }
  },
  methods:{
    handleResize: function() {
      this.isMobile = window.innerWidth < 600;
    },
    hideContents: function(){
      this.isContentsHide = true;
    },
    showContents: function(){
      this.isContentsHide = false;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style>
.app {
  background-color: inherit !important;
}
.mainContainer {
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
.hide {
  display: none;
}
</style>
