<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="220"
      mini-variant-width="60"
    >
      <SideNavigation />
    </v-navigation-drawer>
    <v-app-bar app :flat="flat" :clipped-left="clipped">
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <page-header
        :icon="headerItem.icon"
        :title="headerItem.title"
        date="YYYY/MM/DD HH:MM"
      />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
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
      miniVariant: false,
      clipped: false,
      drawer: false,
      flat: true,
      menu: {
        title: 'TOKYO METROPOLITAN GOVERNMENT',
        subtitle: 'Covid-19 Operation Dashboard'
      },
      title: 'Covid-19'
    }
  }
}
</script>
