<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer">
      <div class="SideNavigation-Logo">
        <img src="/logo.svg" />
      </div>
      <h1 class="SideNavigation-Heading">
        東京都公式
        <br />COVID19対策サイト
      </h1>
      <v-divider />
    </div>
    <v-list :flat="true">
      <v-container
        v-for="(item, i) in items"
        :key="i"
        class="SideNavigation-ListItemContainer"
      >
        <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
        <v-divider v-show="item.divider" class="SideNavigation-Divider" />
      </v-container>
    </v-list>
    <div class="SideNavigation-Footer">
      <div class="SideNavigation-SocialLinkContainer">
        <a href="https://line.me/R/ti/p/%40822sysfc#~">
          <img src="/line.png" />
        </a>
        <a href="https://twitter.com/tocho_koho">
          <img src="/twitter.png" />
        </a>
      </div>
      <small class="SideNavigation-Copyright">
        Copyright (C) 2020 Tokyo Metropolitan Government. All Rights Reserved.
      </small>
    </div>
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
          link: '/#',
          divider: true
        }
      ],
      title: 'Covid-19'
    }
  }
}
</script>
<style lang="scss" scoped>
.SideNavigation {
  min-height: calc(100vh - 140px);
  margin-bottom: 140px;
  &-HeadingContainer {
    padding: 20px 20px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin-top: 20px;
    width: 110px;
    box-sizing: border-box;
    & img {
      width: 100%;
    }
  }
  &-Heading {
    margin: 8px 0 30px;
    font-size: 13px;
    color: #898989;
  }
  &-Divider {
    margin: 12px 0;
  }
  &-Footer {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
  }
  &-SocialLinkContainer {
    display: flex;
    & img {
      width: 30px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    font-size: 8px;
    line-height: 11px;
    color: $gray-1;
    font-weight: bold;
  }
}
</style>
