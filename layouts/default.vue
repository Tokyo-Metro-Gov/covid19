<template>
  <v-app>
    <div class="d-sm-flex">
      <SideNavigation />
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
import ListItem from '@/components/ListItem'
import PageHeader from '@/components/PageHeader';
import SideNavigation from '@/components/SideNavigation'

export default {
  components: {
    ListItem,
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
.mainContainer {
  flex: 1 1 auto;
  overflow: hidden;
}
</style>
