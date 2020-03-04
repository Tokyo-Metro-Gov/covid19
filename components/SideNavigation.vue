<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon class="SideNavigation-HeadingIcon sp-inline-block" @click="openNavi">
        mdi-menu
      </v-icon>
      <nuxt-link to="/" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.svg" />
        </div>
        <h1 class="SideNavigation-Heading">
          <span class="SideNavigation-HeadingTitle">東京都<br /></span>
          新型コロナウイルス<br
            class="SideNavigation-HeadingMobileBreak"
          />対策サイト
        </h1>
      </nuxt-link>
    </div>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon class="SideNavigation-ListContainerIcon sp-inline-block" @click="closeNavi">
        mdi-close
      </v-icon>
      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          :class="isClass(item)"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem
            :link="item.link"
            :icon="item.icon"
            :title="item.title"
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
          title: '都内の最新感染動向',
          link: '/'
        },
        {
          icon: 'covid',
          title: '新型コロナウイルス感染症が心配なときに',
          link: '/flow',
          divider: true
        },
        {
          icon: 'parent',
          title: 'お子様をお持ちの皆様へ',
          link: '/parent'
        },
        {
          icon: 'mdi-account-multiple',
          title: '都民の皆様へ',
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html'
        },
        {
          icon: 'mdi-domain',
          title: '企業の皆様・はたらく皆様へ',
          link: '/worker',
          divider: true
        },
        {
          title: '東京都新型コロナウイルス感染症対策本部報',
          link:
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        },
        {
          title: '【東京都主催等】中止又は延期するイベント・説明会等',
          link:
            'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event02.html'
        },
        {
          title: '知事からのメッセージ',
          link:
            'https://www.metro.tokyo.lg.jp/tosei/governor/governor/katsudo/2020/03/03_00.html'
        },
        {
          title: '当サイトについて',
          link: '/about'
        },
        {
          title: '東京都公式ホームページ',
          link: 'https://www.metro.tokyo.lg.jp/',
          divider: true
        }
      ]
    }
  },
  computed: {
    isClass() {
      return item => item.title.charAt(0) === '【' ? 'kerningLeft' : ''
    },
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
  flex: 0 0 220px;
  background: #fff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 0 7px 20px;
    }
  }
  &-HeadingIcon {
    display: none;
    margin-right: 16px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    display: none;
    margin: 24px 16px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 20px 16px 0 0;
    width: 110px;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-HeadingTitle {
    @include lessThan($small) {
      display: none;
    }
  }
  &-HeadingMobileBreak {
    display: none;
    @include lessThan($small) {
      display: inline;
    }
  }
  &-HeadingDivider {
    margin: 0px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
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
  @include lessThan($small) {
    position: absolute;
    top: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: 100;
    background-color: #fff;
  }
}
@include largerThan($huge) {
  .SideNavigation {
    min-width: 325px;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-inline-block {
    display: inline-block;
  }
  .sp-none {
    display: none;
  }
}
.kerningLeft {
  text-indent: -.5em;
}
</style>
