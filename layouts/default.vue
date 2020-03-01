<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="320"
      mini-variant-width="60"
    >
      <SideNavigation />
    </v-navigation-drawer>
    <v-app-bar app :flat="flat" :clipped-left="clipped">
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <page-header :icon="items[0].icon" :title="items[0].title" date="YYYY/MM/DD HH:MM" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
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
