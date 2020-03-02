<template>
  <div class="SideNavigation">
    <a href='/'>
      <div class="SideNavigation-HeadingContainer d-flex d-sm-block">
        <v-icon class="d-inline-block d-sm-none mr-4" @click="openNavi">
          mdi-menu
        </v-icon>
        <div class="SideNavigation-Logo mr-4">
          <img src="/logo.svg" />
        </div>
        <h1 class="SideNavigation-Heading">
          東京都公式
          <br />新型コロナウイルス対策サイト
        </h1>
      </div>
    </a>
    <v-divider />
    <div class="d-none d-sm-block" :class="{ open: isNaviOpen && isMobile }">
      <v-icon class="d-inline-block d-sm-none mx-4 mt-6" @click="closeNavi">
        mdi-close
      </v-icon>
      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem
            :link="item.link"
            :icon="item.icon"
            :title="item.title"
            :is-mobile="isMobile"
          />
          <v-divider v-show="item.divider" class="SideNavigation-Divider" />
        </v-container>
      </v-list>
      <div class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <a href="https://line.me/R/ti/p/%40822sysfc#~">
            <img src="/line.png" />
          </a>
          <a href="https://twitter.com/tokyo_bousai">
            <img src="/twitter.png" />
          </a>
        </div>
        <small class="SideNavigation-Copyright">
          Copyright (C) 2020 Tokyo Metropolitan Government. All Rights Reserved.
        </small>
      </div>
    </div>
  </div>
</template>
<script>
import ListItem from '@/components/ListItem'

export default {
  components: {
    ListItem
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true
    },
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-chart-timeline-variant',
          title: '都内の最新動向',
          link: '/'
        },
        {
          icon: 'covid',
          title: '新型コロナウイルス感染症が心配なときに',
          link: '/flow',
          divider: true
        },
        {
          icon: 'mdi-baby-carriage',
          title: 'お子様をお持ちの皆様へ',
          link:
            'https://www.kyoiku.metro.tokyo.lg.jp/press/press_release/2020/release20200228_02.html'
        },
        {
          icon: 'mdi-account-multiple',
          title: '都民の皆様へ',
          link:
            'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html'
        },
        {
          icon: 'mdi-domain',
          title: '企業の皆様・はたらく皆様へ',
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
          title: '東京都公式ホームページ',
          link:
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        },
        {
          title: '知事からのメッセージ',
          link: '/#'
        },
        {
          title: 'このサイトについて',
          link: '/about',
          divider: true
        }
      ]
    }
  },
  methods: {
    openNavi() {
      this.$emit('openNavi')
    },
    closeNavi() {
      this.$emit('closeNavi')
    }
  }
}
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  flex: 0 1 200px;
  background: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    width: 110px;
  }
  &-Heading {
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
  }
  &-Divider {
    margin: 12px 0;
  }
  &-Footer {
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
.open {
  position: absolute;
  top: 0;
  left: 0;
  display: block !important;
  width: 100%;
  z-index: 100;
  background-color: #fff;
}
</style>
