<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon sp-inline-block"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link to="/" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.svg" />
        </div>
        <h1 class="SideNavigation-Heading">
          <span class="SideNavigation-HeadingTitle">
            {{ $t('Tokyo') }}<br />
          </span>
          {{ $t('COVID-19') }}<br class="SideNavigation-HeadingMobileBreak" />{{
            $t('Measures site')
          }}
        </h1>
      </nuxt-link>
    </div>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon sp-inline-block"
        @click="closeNavi"
      >
        mdi-close
      </v-icon>
      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
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

<i18n>
{
  "ja": {
    "Tokyo": "東京都",
    "COVID-19": "新型コロナウイルス",
    "Measures site": "対策サイト",
    "Tokyo Metropolitan Government": "東京都",
    "Tokyo COVID-19 Task Force": "新型コロナウイルス感染症対策本部",
    "The latest updates": "都内の最新感染動向",
    "If you have any symptoms": "新型コロナウイルス感染症が心配なときに",
    "for Families with children": "お子様をお持ちの皆様へ",
    "for Citizens": "都民の皆様へ",
    "for Enterprises and Employees": "企業の皆様・働く皆様へ",
    "Official statements from Task Force": "東京都新型コロナイルス感染症対策本部報",
    "Cancelled public events": "【東京都主催等】中止または延期するイベント・説明会等",
    "Government official website": "東京都公式ホームページ",
    "Message from Governor Koike": "知事からのメッセージ",
    "About us": "当サイトについて"
  },
  "en": {
    "Tokyo": "Tokyo",
    "COVID-19": "COVID-19",
    "Measures site": "measures site",
    "Tokyo Metropolitan Government":     "Tokyo Metropolitan Government",
    "Tokyo COVID-19 Task Force":     "Tokyo COVID-19 Task Force",
    "The latest updates":     "The latest updates",
    "If you have any symptoms":     "If you have any symptoms",
    "for Families with children":     "for Families with children",
    "for Citizens":     "for Citizens",
    "for Enterprises and Employees":     "for Enterprises and Employees",
    "Official statements from Task Force":     "Official statements from Task Force",
    "Cancelled public events":     "Cancelled public events",
    "Government official website":     "Government official website",
    "Message from Governor Koike":     "Message from Governor Koike",
    "About us":     "About us"
  }
}
</i18n>

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
  computed: {
    items() {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('The latest updates'),
          link: '/'
        },
        {
          icon: 'covid',
          title: this.$t('If you have any symptoms'),
          link: '/flow',
          divider: true
        },
        {
          icon: 'parent',
          title: this.$t('for Families with children'),
          link: '/parent'
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('for Citizens'),
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('for Enterprises and Employees'),
          link: '/worker',
          divider: true
        },
        {
          title: this.$t('Official statements from Task Force'),
          link:
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        },
        {
          title: this.$t('Cancelled public events'),
          link:
            'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event02.html'
        },
        {
          title: this.$t('Message from Governor Koike'),
          link:
            'https://www.metro.tokyo.lg.jp/tosei/governor/governor/katsudo/2020/03/03_00.html'
        },
        {
          title: this.$t('About us'),
          link: '/about'
        },
        {
          title: this.$t('Government official website'),
          link: 'https://www.metro.tokyo.lg.jp/',
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
</style>
