<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        class="SideNavigation-OpenIcon"
        :aria-label="$t('Navi Open')"
        @click="$emit('openNavi', $event)"
      >
        mdi-menu
      </v-icon>
      <h1 class="SideNavigation-Heading">
        <nuxt-link :to="localePath('/')" class="SideNavigation-HeadingLink">
          <div class="SideNavigation-HeaderLogo">
            <img src="/logo.svg" :alt="$t('Prefecture')" />
          </div>
          <div class="SideNavigation-HeaderLogoLinkText">
            {{ $t('COVID-19') }}<br />{{ $t('Measures site') }}
          </div>
        </nuxt-link>
      </h1>
    </header>
    <div :class="['SideNavigation-Body', { '-opened': isNaviOpen }]">
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('Navi Close')"
        @click="$emit('closeNavi', $event)"
      >
        mdi-close
      </v-icon>
      <nav class="SideNavigation-Menu">
        <MenuList :items="items" @click="$emit('closeNavi', $event)" />
      </nav>
      <footer class="SideNavigation-Footer">
        <div class="SideNavigation-Social">
          <a
            href="https://github.com/civictechzenchiba/covid19-chiba"
            target="_blank"
            rel="noopener"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/github.webp" type="image/webp" />
              <img src="/github.png" alt="GitHub" />
            </picture>
          </a>
        </div>
        <small class="SideNavigation-Copyright">
          <a
            href="//creativecommons.org/licenses/by/4.0/deed.ja"
            target="_blank"
            rel="noopener"
            class="license"
          >
            Under
            <img
              src="@/assets/images/cc-by-icon.svg?inline"
              alt="CC BY 4.0"
              class="license__icon"
            />
          </a>
        </small>
        <div class="sponsor">
          <dl>
            <dt>Data by:</dt>
            <dd>
              <a
                href="https://www.pref.chiba.lg.jp/"
                target="_blank"
                rel="noopener"
                class="sponsor__data"
              >
                {{ $t('Chiba Prefecture') }}
              </a>
            </dd>
            <dd>
              <a
                href="https://www.city.chiba.jp/hokenfukushi/kenkou/kikaku/kansensyoujyouhou.html"
                target="_blank"
                rel="noopener"
                class="sponsor__data"
              >
                {{ $t('Chiba City') }}
              </a>
            </dd>
          </dl>
        </div>
        <div class="sponsor">
          Operations by:<br />
          <a
            href="https://sites.google.com/view/civictechzenchiba/"
            target="_blank"
            rel="noopener"
            class="sponsor__image"
          >
            <span>CivicTechZenChiba</span>
            <img
              src="@/assets/images/civictechzenchiba-icon.jpg"
              alt="CivicTechZenChiba Icon"
            />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "Navi Open": "サイドメニュー項目を開く",
    "Navi Close": "サイドメニュー項目を閉じる",
    "Prefecture": "千葉県",
    "COVID-19": "新型コロナウイルス感染症",
    "Measures site": "対策サイト",
    "Chiba Prefecture": "千葉県",
    "Chiba City": "千葉市",
    "The latest updates": "県内の最新感染動向",
    "Information": "お知らせ一覧",
    "for Families with children": "お子様をお持ちの皆様へ",
    "for Citizens": "県民の皆様へ",
    "for Enterprises and Employees": "企業の皆様・はたらく皆様へ",
    "Official statements from Task Force": "新型コロナウイルス感染症への対応について",
    "About information counter": "電話相談窓口について",
    "Cancelled public events": "臨時休館情報",
    "Government official website": "千葉県公式ホームページ",
    "Message from Governor Morita": "知事からのメッセージ",
    "About us": "当サイトについて"
  }
}
</i18n>

<script>
import MenuList from '@/components/MenuList'

export default {
  components: {
    MenuList
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
          icon: 'mdi-information',
          title: this.$t('Information'),
          link: '/news'
        },
        {
          icon: 'ParentIcon',
          title: this.$t('for Families with children'),
          link: '/parent'
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('for Citizens'),
          link: 'https://www.pref.chiba.lg.jp/shippei/kansenshou/2019-ncov.html'
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
            'https://www.pref.chiba.lg.jp/cate/kfk/kenkou-iryou/kenkouzukuri/kansenshou/coronavirus.html'
        },
        {
          title: this.$t('About information counter'),
          link:
            'https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudan.html'
        },
        {
          title: this.$t('Cancelled public events'),
          link:
            'https://www.pref.chiba.lg.jp/kouhou/homepage/2019/ncov-index.html',
          divider: true
        },
        {
          title: this.$t('Message from Governor Morita'),
          link:
            'https://www.pref.chiba.lg.jp/kenfuku/kansenshou/ncov/mes-chiji.html'
        },
        {
          title: this.$t('About us'),
          link: '/about'
        },
        {
          title: this.$t('Government official website'),
          link: 'https://www.pref.chiba.lg.jp/',
          divider: true
        }
      ]
    }
  },
  watch: {
    $route: 'handleChageRoute'
  },
  methods: {
    handleChageRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side
        if ($Side) {
          $Side.focus()
        }
      })
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
  &:focus {
    outline: none;
  }
}
.SideNavigation-Header {
  padding: 20px 20px 0 20px;
  @include lessThan($small) {
    height: 64px;
    display: flex;
    padding: 0 20px 0 57px;
  }
}
.SideNavigation-Heading {
  font-size: 13px;
  color: $gray-3;
}
.SideNavigation-HeadingLink {
  display: flex;
  width: 100%;
  color: $gray-3;
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }
  &:hover,
  &:focus {
    font-weight: bold;
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
  @include lessThan($small) {
    align-items: center;
    height: 64px;
  }
  @include largerThan($small) {
    flex-direction: column;
  }
}
.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 90px;
  }
}
.SideNavigation-HeaderLogoLinkText {
  @include lessThan($small) {
    flex-grow: auto;
    margin-left: 16px;
  }
  @include lessThan($tiny) {
    margin-left: 10px;
  }
  @include largerThan($small) {
    margin-top: 15px;
  }
}
.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include largerThan($small) {
    display: none;
  }
}
.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include largerThan($small) {
    display: none;
  }
}
.SideNavigation-Body {
  padding: 0 20px 20px;
  background-color: #fff;
  @include lessThan($small) {
    display: none;
    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      width: 100%;
      z-index: z-index-of(opened-side-navigation);
      background-color: $white;
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}
.SideNavigation-Menu {
  padding-top: 20px;
  @include lessThan($small) {
    padding-top: 50px;
  }
}
.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  font-size: 0.85rem;
}
.SideNavigation-Footer {
  padding-top: 20px;
  background-color: $white;
}
.SideNavigation-Social {
  display: flex;
}
.SideNavigation-SocialLink {
  border: 1px dotted transparent;
  border-radius: 30px;
  color: $gray-3;
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }
  &:focus {
    border-color: $gray-3;
    outline: none;
  }
  & + & {
    margin-left: 10px;
  }
  img {
    width: 30px;
  }
}
.SideNavigation-Copyright {
  display: block;
  margin-top: 10px;
  color: $gray-1;
  font-size: 10px;
  line-height: 1.2;
  font-weight: bold;
}
.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}
.license {
  text-decoration: none;
  color: $gray-1;
  font-size: 16px;
  display: inline-block;
  &:focus {
    outline: 1px dotted $gray-3;
  }
  &__title {
    display: inline-block;
    width: 0;
    height: 1.5rem;
    overflow: hidden;
  }
  &__icon {
    display: inline-block;
    height: 24px;
  }
}
.sponsor {
  color: $gray-1;
  font-size: 16px;
  &:nth-child(n + 2) {
    margin-top: 12px;
  }
  &__data {
    font-size: 26px;
    text-decoration: none;
    color: $gray-1;
    &:hover {
      opacity: 0.6;
    }
    &:focus {
      outline: 1px dotted $gray-3;
    }
  }

  &__image {
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    &:focus {
      outline: 1px dotted $gray-3;
    }
    span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
    }
    img {
      width: 64px;
      height: 64px;
    }
  }
}
</style>
