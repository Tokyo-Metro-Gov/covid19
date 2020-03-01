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
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ menu.title }}
            </v-list-item-title>
            <v-list-item-subtitle class="subtitle">
              {{ menu.subtitle }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-container
          v-for="(item, i) in items"
          :key="i"
        >
          <ListItem
            :link="item.link"
            :icon="item.icon"
            :title="item.title"
          />
          <v-divider v-show="item.divider" />
        </v-container>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :clipped-left="clipped"
    >
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
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
import ListItem from '@/components/ListItem'

export default {
  components: {
    ListItem
  },
  data () {
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
          link: 'https://www.google.com',
          divider: true
        },
        {
          icon: 'mdi-account-child',
          title: 'お子さんをお持ちのみなさんへ',
          link: '/forparents'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '都民の皆さんへ',
          link: '/forcitizen'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '企業の皆さんへ',
          link: '/forenterprize',
          divider: true
        },
        {
          icon: 'mdi-chart-bubble',
          title: '公式発表',
          link: '/announcement'
        }
      ],
      title: 'Covid-19'
    }
  }
}
</script>
