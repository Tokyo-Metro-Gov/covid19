<template>
  <div class="SideNavigation-Outer">
    <div class="SideNavigation-Container">
      <v-icon>mdi-menu</v-icon>
      <div class="SideNavigation-Logo">
        <img src="/logo.svg" />
      </div>
      <h1 class="SideNavigation-Heading">
        東京都公式
        <br />COVID19対策サイト
      </h1>
      <v-divider />
    </div>
    <v-list class="d-none d-sm-block">
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
  data() {
    return {
      items: [
        {
          icon: 'mdi-chart-timeline-variant',
          title: '最新感染動向',
          link: '/'
        },
        {
          icon: 'mdi-human',
          title: '感染症が心配な方へ',
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html',
          divider: true
        },
        {
          icon: 'mdi-baby-carriage',
          title: 'お子様をお持ちの皆さんへ',
          link:
            'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html'
        },
        {
          icon: 'mdi-account-multiple',
          title: '都民の皆さんへ',
          link:
            'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html'
        },
        {
          icon: 'mdi-domain',
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
.SideNavigation-Outer {
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
}
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
