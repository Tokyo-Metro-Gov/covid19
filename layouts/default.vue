<template>
  <v-app dark>
    <v-navigation-drawer
      permanent
      app
      width=360
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
          <v-list-item
            v-if="item.to"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-else
            :href="item.href"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <v-divider v-show="item.divider"></v-divider>
        </v-container>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
    >
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
export default {
  data () {
    return {
      menu: {
        title: 'TOKYO METROPOLITAN GOVERNMENT',
        subtitle: 'Covid-19 Operation Dashboard'
      },
      items: [
        {
          icon: 'mdi-apps',
          title: '東京都最新感染動向',
          to: '/dashboard'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '症状が心配な方へ',
          href: 'https://www.google.com',
          divider: true
        },
        {
          icon: 'mdi-account-child',
          title: 'お子さんをお持ちのみなさんへ',
          to: '/forparents',
        },
        {
          icon: 'mdi-chart-bubble',
          title: '都民の皆さんへ',
          to: '/forcitizen',
        },
        {
          icon: 'mdi-chart-bubble',
          title: '企業の皆さんへ',
          to: '/forenterprize',
          divider: true
        },
        {
          icon: 'mdi-chart-bubble',
          title: '公式発表',
          to: '/announcement',
        },
      ],
      title: 'Vuetify.js'
    }
  }
}
</script>
