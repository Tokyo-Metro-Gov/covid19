<template>
  <v-app class="app">
    <div class="loader" v-if="loading">
      <img src="/logo.svg" />
      <scale-loader color="#000000" />
    </div>
    <div class="d-sm-flex" v-else>
      <SideNavigation class="navi" />
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
      loading: true
    }
  },
  mounted() {
    this.loading = false
  }
}
</script>
<style>
.app {
  background-color: inherit !important;
}
.navi {
  flex: 0 1 200px;
}
.mainContainer {
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
</style>