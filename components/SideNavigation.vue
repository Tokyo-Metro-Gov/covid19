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
            <img src="/logo.svg" :alt="$t('山口県')" />
          </div>
          {{ $t('新型コロナウイルス感染症') }}<br />{{
            $t('対策サイト（非公式）')
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
          <!-- <LanguageSelector /> -->
        </div>
      </nav>
      <v-footer class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <!--
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
		  -->
          <a
            href="https://www.facebook.com/stopcovid19yamaguchi/"
            target="_blank"
            rel="noopener"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://github.com/nishidayoshikatsu/covid19-yamaguchi"
            target="_blank"
            rel="noopener"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>
        <!--
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
          2020 Tokyo Metropolitan Government
        </small>
		-->
        <div class="SideNavigation-SponsorLinkContainer">
          <br />
          Powered by:<br />
          <a href="https://www.sakura.ad.jp/" target="_blank" rel="noopener">
            <span class="image-title">さくらインターネット</span>
            <img
              class="sakura-internet-logo"
              src="/sakura.svg"
              width="176px"
              height="62px"
              alt="さくらインターネット"
            />
          </a>
        </div>
      </v-footer>
    </div>
  </div>
</template>

<i18n src="./SideNavigation.i18n.json"></i18n>

<script>
import ListItem from '@/components/ListItem'
// import LanguageSelector from '@/components/LanguageSelector.vue'

export default {
  components: {
    ListItem
    // LanguageSelector
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
          title: this.$t('山口県内の最新感染動向'),
          link: this.localePath('/')
        },
        /*
		{
          icon: 'covid',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: this.localePath('/flow'),
          divider: true
		},
		*/
        {
          title: this.$t('新型コロナウイルスに関連する相談窓口'),
          link:
            'https://www.pref.yamaguchi.lg.jp/cms/a11000/sodan/koronasoudan.html',
          divider: true
        },
        {
          icon: 'parent',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: this.localePath('/parent')
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('山口県民の皆様へ'),
          link:
            'https://www.pref.yamaguchi.lg.jp/cms/a11000/korona_kanren/kanren_link.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link:
            'https://www.pref.yamaguchi.lg.jp/cms/a16300/kinyuu/202002210001.html'
          // link: this.localePath('/worker'),
          // divider: true
        },
        {
          title: this.$t(
            '新型コロナウイルス発生に伴う県主催イベント等の中止・延期について'
          ),
          link:
            'https://www.pref.yamaguchi.lg.jp/cms/a15200/kansensyou/202002250001.html'
        },
        {
          title: this.$t(
            '新型コロナウイルス発生に伴う県有施設等の休館等について'
          ),
          link:
            'https://www.pref.yamaguchi.lg.jp/cms/a15200/kansensyou/202002280001.html'
        },
        {
          title: this.$t('知事からのメッセージ'),
          link:
            'https://www.pref.yamaguchi.lg.jp/cms/a10000/chijiroom/top-page.html'
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('山口県公式ホームページ'),
          link: 'https://www.pref.yamaguchi.lg.jp/'
        },
        {
          title: this.$t('山口県感染症情報センターホームページ'),
          link:
            'http://kanpoken.pref.yamaguchi.lg.jp/jyoho/page5-7/page5-7-31.html',
          divider: true
        },
        {
          title: this.$t('※当サイトは山口県内外の有志が開設したものです。'),
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
  &-LanguageMenu {
    padding: 0 20px;
    background: #fff;
  }
  &-Footer {
    padding-left: 20px;
    padding-top: 10px;
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
  &-SponsorLinkContainer {
    overflow: visible;
    //padding-top: 0.8rem;
    white-space: normal;
    font-size: 0.82rem;
    color: $gray-1;
    margin-left: 60px;
    & a {
      color: #333;
      text-decoration: none;
    }
    & a:hover {
      opacity: 0.6;
    }
    & img {
      padding-bottom: 0.9rem;
    }
    & img.justdouit-logo {
      margin: 0 0 0 -3px;
      width: 132px;
    }
    & img.sakura-internet-logo {
      margin: -6px 0 0 -14px;
      width: 176px;
    }
    & .image-title {
      display: inline-block;
      width: 0;
      height: 1.5rem;
      overflow: hidden;
    }
    & .no-image-title {
      display: inline-block;
      line-height: 1.8rem;
      color: #444;
      font-size: 1.5rem;
      font-weight: 400;
    }
    & .cc-by-logo {
      width: auto;
      height: 1.8rem;
      vertical-align: text-top;
    }
    & a.license {
      display: inline-block;
      margin: -0.7rem 0 0.2rem 0;
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
