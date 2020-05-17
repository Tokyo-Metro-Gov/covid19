<template>
  <div class="SideNavigation">
    <header class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link :to="localePath('/')" class="SideNavigation-HeadingLink">
        <h1 class="SideNavigation-Heading">
          <div class="SideNavigation-Logo">
            <img src="/logo.png" :alt="$t('新潟県')" />
          </div>
          (非公式){{ $t('新型コロナウイルス感染症') }}<br />{{
            $t('対策サイト')
          }}
        </h1>
      </nuxt-link>
    </header>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="closeNavi"
      >
        mdi-close
      </v-icon>
      <nav>
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
        <div class="SideNavigation-LanguageMenu">
          <!--<LanguageSelector />-->
        </div>
      </nav>
      <v-footer class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <a
            href="https://twitter.com/niigata_corona"
            target="_blank"
            rel="noopener"
          >
            <figure>
              <img src="/twitter.png" alt="Twitter" />
              <figcaption>新潟市<br />新型コロナ情報</figcaption>
            </figure>
          </a>
          <a
            href="https://twitter.com/Niigata_Press"
            target="_blank"
            rel="noopener"
          >
            <figure>
              <img src="/twitter.png" alt="Twitter" />
              <figcaption>新潟県広報課</figcaption>
            </figure>
          </a>
          <a
            href="https://github.com/CodeForNiigata/covid19"
            target="_blank"
            rel="noopener"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>
        <small class="SideNavigation-Copyright">
          {{ $t('このサイトの内容物は') }}
          <a
            rel="license"
            target="_blank"
            :href="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
          >
            {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
          </a>
          {{ $t('の下に提供されています。') }}
          <br />
          2020 Code For Niigata
        </small>
      </v-footer>
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
  computed: {
    items() {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('県内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'covid',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: this.localePath('/flow'),
          divider: true
        },
        {
          title: this.$t('新潟県対策本部会議開催状況'),
          link:
            'https://www.pref.niigata.lg.jp/sec/kikitaisaku/shingata-corona.html'
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('県民の皆様へ'),
          link:
            'https://www.pref.niigata.lg.jp/sec/kikitaisaku/shingata-corona.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: this.localePath('/worker'),
          divider: true
        },
        {
          icon: 'niigata',
          title: this.$t('県内 各市町村のコロナウイルス感染症情報'),
          link: this.localePath('/cities')
        },
        {
          title: this.$t(
            '新型コロナウイルス感染症対策情報（産業労働分野）まとめ'
          ),
          link: 'https://www.pref.niigata.lg.jp/sec/sangyoseisaku/corona-sangyo'
        },
        {
          title: this.$t(
            '新型コロナウィルス感染症の拡大防止による新潟県内のイベント中止および変更について'
          ),
          link: 'https://niigata-kankou.or.jp/news/105'
        },
        {
          title: this.$t('新型コロナウイルスの影響による公共交通機関への影響'),
          link: this.localePath('/transit')
        },
        {
          title: this.$t('県内のテイクアウト情報'),
          link: this.localePath('/takeout')
        },
        {
          title: this.$t('新潟県公式ホームページ'),
          link: 'https://www.pref.niigata.lg.jp/',
          divider: true
        },
        {
          title: this.$t('県からのお願い'),
          link:
            'https://www.pref.niigata.lg.jp/sec/kikitaisaku/shingata-corona.html',
          divider: true
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t(
            '新潟県(非公式)コロナウイルス対策サイトへの問い合わせ・要望フォーム'
          ),
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSfhbZBW70Ogoi3uuHkgxbdyeOJg2K5RnMC0Z0TZSc01SiWadQ/viewform', // eslint-disable-line prettier/prettier
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
      padding: 7px 10px;
    }
  }
  &-HeadingIcon {
    margin-right: 10px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    width: 21px;
    margin: 24px 16px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 5px 16px 15px 0;
    width: 110px;
    @include lessThan($small) {
      margin: 0 16px 0 0;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #707070;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      display: flex;
      align-items: center;
      width: 100%;
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
  &-LanguageMenu {
    padding: 0 20px;
    background: #fff;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SocialLinkContainer {
    display: flex;
    & a:not(:last-of-type) {
      margin-right: 5px;
    }
    & img {
      width: 30px;
    }
    & figure {
      text-align: center;
      & figcaption {
        font-size: 10px;
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
    height: 100%;
    overflow-y: scroll;
  }
}
@include lessThan($tiny) {
  .sp-logo {
    width: 100px;
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
