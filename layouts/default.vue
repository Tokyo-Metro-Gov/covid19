<template>
  <v-app class="app">
    <div class="d-sm-flex">
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
import SideNavigation from '@/components/SideNavigation'

export default {
  components: {
    SideNavigation
  }
}
</script>

<style>
.app {
  background-color: inherit !important;
}
.navi {
  flex: 1 1 200px;
}
.mainContainer {
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
</style>
