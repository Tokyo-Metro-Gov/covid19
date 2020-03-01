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
      items: [
        {
          icon: 'mdi-apps',
          title: '東京都最新感染動向',
          link: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '症状が心配な方へ',
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html',
          divider: true
        },
        {
          icon: 'mdi-account-child',
          title: 'お子さんをお持ちのみなさんへ',
          link:
            'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '都民の皆さんへ',
          link:
            'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '企業の皆さんへ',
          link:
            'https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html',
          divider: true
        },
        {
          title: '公式発表',
          link:
            '/https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        },
        {
          title: '公式ホームページ',
          link:
            '/https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        }
      ],
      title: 'Covid-19'
    }
  }
}
</script>
