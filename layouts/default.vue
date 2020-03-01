<template>
  <v-app class="app">
    <div class="d-sm-flex">
      <SideNavigation class="navi" />
      <div class="mainContainer px-4">
        <page-header
          :icon="headerItem.icon"
          :title="headerItem.title"
          date="YYYY/MM/DD HH:MM"
        />
        <v-container>
          <nuxt />
        </v-container>
      </div>
    </div>
  </v-app>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import SideNavigation from '@/components/SideNavigation'

export default {
  components: {
    PageHeader,
    SideNavigation
  },
  data() {
    return {
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '最新感染動向'
      },
    }
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
