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
          icon: 'mdi-chart-timeline-variant',
          title: '最新感染動向',
          link: '/'
        },
        {
          icon: 'mdi-human',
          title: '感染症が心配な方へ',
          link: 'https://www.google.com',
          divider: true
        },
        {
          icon: 'mdi-baby-carriage',
          title: 'お子様をお持ちの皆さんへ',
          link: '/forparents'
        },
        {
          icon: 'mdi-account-multiple',
          title: '都民の皆さんへ',
          link: '/forcitizen'
        },
        {
          icon: 'mdi-domain',
          title: '企業の皆さんへ',
          link: '/forenterprize',
          divider: true
        },
        {
          title: '公式発表',
          link: '/announcement'
        },
        {
          title: '東京都公式ホームページ',
          link: '/announcement'
        },
        {
          title: 'このサイトについて',
          link: '/announcement'
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
