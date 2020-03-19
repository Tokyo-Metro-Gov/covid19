<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="$emit('openNavi', $event)"
      >
        mdi-menu
      </v-icon>
      <h1 class="SideNavigation-Heading">
        <nuxt-link :to="localePath('/')" class="SideNavigation-HeadingLink">
          <div class="SideNavigation-HeaderLogo">
            <img src="/logo.svg" :alt="$t('福井県')" />
          </div>
          <div class="SideNavigation-HeaderLogoLinkText">
            {{ $t('福井県') }}<br />{{ $t('新型コロナウイルス対策サイト（非公式）') }}
          </div>
        </nuxt-link>
      </h1>
    </header>
    <div :class="['SideNavigation-Body', { '-opened': isNaviOpen }]">
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('closeNavi', $event)"
      >
        mdi-close
      </v-icon>

      <nav class="SideNavigation-Menu">
        <MenuList :items="items" @click="$emit('closeNavi', $event)" />
      </nav>

      <div class="SideNavigation-Language">
        <!--<label class="SideNavigation-LanguageLabel" for="LanguageSelector">
          {{ $t('多言語対応選択メニュー') }}
        </label>
        <LanguageSelector />-->
      </div>

      <footer class="SideNavigation-Footer">
        <!--<div class="SideNavigation-Social">
          <a
            href="https://line.me/R/ti/p/%40822sysfc"
            target="_blank"
            rel="noopener"
            class="SideNavigation-SocialLink"
          >
            <img src="/line.png" alt="LINE" />
          </a>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener"
            class="SideNavigation-SocialLink"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/tochokoho"
            target="_blank"
            rel="noopener"
            class="SideNavigation-SocialLink"
          >
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://github.com/tokyo-metropolitan-gov/covid19"
            target="_blank"
            rel="noopener"
            class="SideNavigation-SocialLink"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>-->
        <small class="SideNavigation-Copyright">
            Operations by:<br>
            <a href="https://www.t-catv.co.jp/" target="_blank"><img src="/catvlogo.svg" :alt="$t('福井県')" /></a>
        </small>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import MenuList from '@/components/MenuList.vue'

type Item = {
  icon?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items(): Item[] {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('県内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'CovidIcon',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: 'https://www.pref.fukui.lg.jp/doc/kouho/navi.html',
          divider: true
        },
        {
          icon: 'mdi-account-multiple',
          title: this.$t('県民の皆様へ'),
          link: 'https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html#kenmin'
        },
        {
          icon: 'ParentIcon',
          title: this.$t('保護者の皆様へ'),
          link: 'https://www.pref.fukui.lg.jp/doc/kyousei/korona_kyouiku.html'
        },
        {
          icon: 'mdi-domain',
          title: this.$t('企業の皆様へ'),
          link: 'https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html#kigyou',
        },
        {
          icon: 'mdi-domain',
          title: this.$t('医療機関の皆様へ'),
          link: 'https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html#iryou',
          divider: true
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        },
        {
          title: this.$t('福井県公式ホームページ'),
          link: 'https://www.pref.fukui.lg.jp/'
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
        const $Side = this.$refs.Side as HTMLEmbedElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    }
  }
})
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
  padding: 40px 20px 25px;
  @include lessThan($small) {
    display: flex;
    padding: 14px 0 13px 20px;
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
  margin-right: 20px;
  @include lessThan($tiny) {
    margin-right: 10px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  width: 21px;
  margin-top: 20px;
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
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
}

.SideNavigation-Language {
  padding-top: 20px;
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
  font-size: 12px;
  line-height: 1.2;
  font-weight: bold;
}

.SideNavigation-Copyright img {
    width: 150px;
    margin: 10px 0 0 0;
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}
</style>
