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
    <v-app-bar app :clipped-left="clipped">
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
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
      miniVariant: false,
      clipped: false,
      drawer: false,
      menu: {
        title: 'TOKYO METROPOLITAN GOVERNMENT',
        subtitle: 'Covid-19 Operation Dashboard'
      },
      title: 'Covid-19'
    }
  }
}
</script>
