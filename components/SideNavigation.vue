<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link to="/" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.svg" :alt="$t('東京都')" />
        </div>
        <h1 class="SideNavigation-Heading">
          {{ $t('新型コロナウイルス感染症') }}<br />{{ $t('対策サイト') }}
        </h1>
      </nuxt-link>
    </div>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('サイドメニュー項目を閉じる')"
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
          <a
            href="https://line.me/R/ti/p/%40822sysfc"
            target="_blank"
            rel="noopener"
          >
            <img src="/line.png" alt="LINE" />
          </a>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
        </div>
        <small class="SideNavigation-Copyright" lang="en">
          Copyright &copy; 2020 Tokyo Metropolitan Government. All Rights
          Reserved.
        </small>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "サイドメニュー項目を開く": "サイドメニュー項目を開く",
    "サイドメニュー項目を閉じる": "サイドメニュー項目を閉じる",
    "東京都": "東京都",
    "新型コロナウイルス感染症": "新型コロナウイルス感染症",
    "対策サイト": "対策サイト",
    "都内の最新感染動向": "都内の最新感染動向",
    "新型コロナウイルス感染症が心配なときに": "新型コロナウイルス感染症が心配なときに",
    "お子様をお持ちの皆様へ": "お子様をお持ちの皆様へ",
    "都民の皆様へ": "都民の皆様へ",
    "企業の皆様・はたらく皆様へ": "企業の皆様・はたらく皆様へ",
    "東京都新型コロナウイルス感染症対策本部報": "東京都新型コロナウイルス感染症対策本部報",
    "東京都主催等 中止又は延期するイベント等": "東京都主催等 中止又は延期するイベント等",
    "東京都公式ホームページ": "東京都公式ホームページ",
    "知事からのメッセージ": "知事からのメッセージ",
    "当サイトについて": "当サイトについて"
  },
  "en": {
    "サイドメニュー項目を開く": "",
    "サイドメニュー項目を閉じる": "",
    "東京都": "Tokyo",
    "新型コロナウイルス感染症": "COVID-19",
    "対策サイト": "Task Force website",
    "都内の最新感染動向": "The latest update on COVID-19 in Tokyo",
    "新型コロナウイルス感染症が心配なときに": "What should be concerned on potential infection of COVID-19",
    "お子様をお持ちの皆様へ": "For families with children",
    "都民の皆様へ": "For citizens in Tokyo",
    "企業の皆様・はたらく皆様へ": "For enterprises, employees and SMEs",
    "東京都新型コロナウイルス感染症対策本部報": "Official statements from Tokyo COVID-19 Task Force",
    "東京都主催等 中止又は延期するイベント等": "Cancelled or Postponed public events",
    "東京都公式ホームページ": "Official website of the Tokyo Metropolitan Government",
    "知事からのメッセージ": "Message from Governor Koike on COVID-19",
    "当サイトについて": "About us"
  },
  "zh-cn": {
    "サイドメニュー項目を開く": "",
    "サイドメニュー項目を閉じる": "",
    "東京都": "东京都",
    "新型コロナウイルス感染症": "新型冠状病毒",
    "対策サイト": "资讯站",
    "都内の最新感染動向": "东京都内最新感染情况",
    "新型コロナウイルス感染症が心配なときに": "如果您担心自己感染时",
    "お子様をお持ちの皆様へ": "致各位家中有小孩子的家长",
    "都民の皆様へ": "致东京都居民",
    "企業の皆様・はたらく皆様へ": "致企业及员工",
    "東京都新型コロナウイルス感染症対策本部報": "东京都新型冠状病毒官方通告",
    "東京都主催等 中止又は延期するイベント等": "延期或取消的大型活动（仅限东京都主办等）",
    "東京都公式ホームページ": "东京都官方网站",
    "知事からのメッセージ": "东京都知事的话",
    "当サイトについて": "关于本站"
  },
  "zh-tw": {
    "サイドメニュー項目を開く": "",
    "サイドメニュー項目を閉じる": "",
    "東京都": "東京都",
    "新型コロナウイルス感染症": "新型冠狀病毒",
    "対策サイト": "戰情中心",
    "都内の最新感染動向": "東京都最新新型冠狀病毒感染情形",
    "新型コロナウイルス感染症が心配なときに": "若您擔心遭受感染",
    "お子様をお持ちの皆様へ": "給家中有小朋友的家長",
    "都民の皆様へ": "給東京都市民",
    "企業の皆様・はたらく皆様へ": "給企業與勞工",
    "東京都新型コロナウイルス感染症対策本部報": "東京都新型冠狀病毒官方公告",
    "東京都主催等 中止又は延期するイベント等": "大型活動延期或取消公告（限東京都主、協辦）",
    "東京都公式ホームページ": "東京都官方網站",
    "知事からのメッセージ": "東京都長的話",
    "当サイトについて": "關於本站"
  },
  "ko": {
    "サイドメニュー項目を開く": "",
    "サイドメニュー項目を閉じる": "",
    "東京都": "도쿄도청",
    "新型コロナウイルス感染症": "코로나19",
    "対策サイト": "TF 웹사이트",
    "都内の最新感染動向": "도쿄도청 확진자수 현황",
    "新型コロナウイルス感染症が心配なときに": "감염이 의심될 때",
    "お子様をお持ちの皆様へ": "아이가 있는 가정의 경우",
    "都民の皆様へ": "도쿄 거주자의 경우",
    "企業の皆様・はたらく皆様へ": "직장과 근로자의 경우",
    "東京都新型コロナウイルス感染症対策本部報": "도쿄도 코로나 TF 공식 발표",
    "東京都主催等 中止又は延期するイベント等": "대규모 행사 연기 또는 취소",
    "東京都公式ホームページ": "도쿄도청 공식 사이트",
    "知事からのメッセージ": "코로나19에 대한 도쿄 도지사의 메세지",
    "当サイトについて": "소개"
  },
  "ja-basic": {
    "サイドメニュー項目を開く": "",
    "サイドメニュー項目を閉じる": "",
    "東京都": "とうきょうと",
    "新型コロナウイルス感染症": "あたらしいコロナウイルスの",
    "対策サイト": "びょうきについて",
    "都内の最新感染動向": "とうきょうとでの コロナウイルスの あたらしいじょうほう",
    "新型コロナウイルス感染症が心配なときに": "コロナウイルスがこわいときに",
    "お子様をお持ちの皆様へ": "こどもが いる ひと へ",
    "都民の皆様へ": "とうきょうとに すんでいる ひと へ",
    "企業の皆様・はたらく皆様へ": "はたらいている ひと へ",
    "東京都新型コロナウイルス感染症対策本部報": "とうきょうと からの おしらせ",
    "東京都主催等 中止又は延期するイベント等": "コロナウイルスのため やめた あつまり",
    "東京都公式ホームページ": "とうきょうとの ウェブサイト",
    "知事からのメッセージ": "えらいひとからの ことば",
    "当サイトについて": "この ウェブサイトについて"
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
          title: this.$t('都内の最新感染動向'),
          link: '/'
        },
        {
          icon: 'covid',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: '/flow',
          divider: true
        },
        {
          icon: 'parent',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: '/parent'
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('都民の皆様へ'),
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: '/worker',
          divider: true
        },
        {
          title: this.$t('東京都新型コロナウイルス感染症対策本部報'),
          link:
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/index.html'
        },
        {
          title: this.$t('東京都主催等 中止又は延期するイベント等'),
          link:
            'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event02.html'
        },
        {
          title: this.$t('知事からのメッセージ'),
          link:
            'https://www.metro.tokyo.lg.jp/tosei/governor/governor/katsudo/2020/03/03_00.html'
        },
        {
          title: this.$t('当サイトについて'),
          link: '/about'
        },
        {
          title: this.$t('東京都公式ホームページ'),
          link: 'https://www.metro.tokyo.lg.jp/',
          divider: true
        }
      ]
    },
    isClass() {
      return item => (item.title.charAt(0) === '【' ? 'kerningLeft' : '')
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
  height: 100%;
  background: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 0 7px 20px;
    }
  }
  &-HeadingIcon {
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
    line-height: 1.2;
    color: $gray-1;
    font-weight: bold;
  }
}
.open {
  @include lessThan($small) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: z-index-of(opened-side-navigation);    
    background-color: $white;
  }
}
@include largerThan($small) {
  .pc-none {
    display: none;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-none {
    display: none;
  }
}
</style>
