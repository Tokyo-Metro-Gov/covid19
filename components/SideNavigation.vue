<template>
  <div>
    <div class="SideNavigation-Container">
      <div class="SideNavigation-Logo">
        <img src="/logo.svg">
      </div>
      <h1 class="SideNavigation-Heading">
        東京都公式
        <br>COVID19対策サイト
      </h1>
      <v-divider />
    </div>
    <v-list>
      <v-container v-for="(item, i) in items" :key="i">
        <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
        <v-divider v-show="item.divider" />
      </v-container>
    </v-list>
  </div>
</template>
<script>
import ListItem from '@/components/ListItem'
export default {
  components: {
    ListItem
  },
  props: ['clipped', 'miniVariant', 'drawer'],
  data() {
    return {
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
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        },
        {
          title: '公式ホームページ',
          link:
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        },
        {
          title: 'このサイトについて',
          link:
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        }
      ],
      title: 'Covid-19'
    }
  }
}
</script>
<style>
.SideNavigation-Container {
  padding: 20px 0 0 20px;
}
.SideNavigation-Logo {
  margin-top: 20px;
  width: 110px;
  box-sizing: border-box;
}
.SideNavigation-Logo img {
  width: 100%;
}
.SideNavigation-Heading {
  margin: 13px 0 30px;
  font-size: 13px;
  color: #898989;
}
</style>
