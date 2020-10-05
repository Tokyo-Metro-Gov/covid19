<template>
  <v-sheet ref="Side" class="SideNavigation">
    <v-navigation-drawer
      v-model="drawer"
      floating
      tabindex="-1"
      touchless
      stateless
      hide-overlay
      width="100%"
    >
      <v-app-bar
        id="header"
        class="SideNavigation-Header"
        flat
        floating
        height="64px"
        min-height="64px"
        color="#fff"
      >
        <v-input
          class="SideNavigation-OpenIcon"
          :aria-label="$t('サイドメニュー項目を開く')"
          :prepend-icon="mdiMenu"
          @click.stop="drawer = true"
        />
        <h1 class="SideNavigation-HeaderTitle">
          <app-link :to="localePath('/')" class="SideNavigation-HeaderLink">
            <img
              class="SideNavigation-HeaderLogo"
              :aria-label="$t('東京都')"
              :src="'/logo.svg?inline'"
            />
            <div class="SideNavigation-HeaderText">
              {{ $t('menu/新型コロナウイルス感染症') }}<br />{{
                $t('menu/対策サイト')
              }}
            </div>
          </app-link>
        </h1>
      </v-app-bar>

      <v-item-group id="body" class="SideNavigation-Body">
        <v-icon
          class="SideNavigation-CloseIcon"
          :aria-label="$t('サイドメニュー項目を閉じる')"
          @click.stop="drawer = false"
        >
          {{ mdiClose }}
        </v-icon>

        <nav class="SideNavigation-Menu">
          <div class="SideNavigation-Language">
            <div
              v-if="$i18n.locales.length > 1"
              class="SideNavigation-Language"
            >
              <label
                class="SideNavigation-LanguageLabel"
                for="LanguageSelector"
              >
                {{ $t('多言語対応選択メニュー') }}
              </label>
              <language-selector />
            </div>
          </div>
          <menu-list :items="items" @blur="$refs.MainPage.focus()" />
        </nav>
      </v-item-group>

      <v-item-group id="footer" class="SideNavigation-Footer">
        <div class="SideNavigation-Social">
          <app-link
            to="https://line.me/R/ti/p/%40822sysfc"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/line.webp" type="image/webp" />
              <img src="/line.png" alt="LINE" />
            </picture>
          </app-link>
          <app-link
            to="https://twitter.com/tokyo_bousai"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/twitter.webp" type="image/webp" />
              <img src="/twitter.png" alt="Twitter" />
            </picture>
          </app-link>
          <app-link
            to="https://www.facebook.com/tochokoho"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/facebook.webp" type="image/webp" />
              <img src="/facebook.png" alt="Facebook" />
            </picture>
          </app-link>
          <app-link
            to="https://github.com/tokyo-metropolitan-gov/covid19"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/github.webp" type="image/webp" />
              <img src="/github.png" alt="GitHub" />
            </picture>
          </app-link>
          <app-link
            to="https://www.youtube.com/user/tokyo/videos"
            :show-icon="false"
            class="SideNavigation-SocialLink"
          >
            <picture>
              <source srcset="/youtube.webp" type="image/webp" />
              <img src="/youtube.png" alt="YouTube" />
            </picture>
          </app-link>
        </div>
        <small class="SideNavigation-Copyright">
          {{ $t('このサイトの内容物は') }}
          <app-link
            :to="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
            :icon-size="12"
            class="SideNavigation-LicenseLink"
          >
            {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
          </app-link>
          {{ $t('の下に提供されています。') }}
          <br />
          &copy; 2020 Tokyo Metropolitan Government
        </small>
      </v-item-group>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script lang="ts">
import {
  mdiAccountMultiple,
  mdiChartTimelineVariant,
  mdiClose,
  mdiDomain,
  mdiMenu,
} from '@mdi/js'
import isDesktopOrTablet from '@nuxtjs/device'
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'

import AppLink from '@/components/AppLink.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import MenuList from '@/components/MenuList.vue'

type Item = {
  icon?: string | object
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList,
    AppLink,
  },
  props: {
    mdiClose: {
      type: String,
      default: () => mdiClose,
    },
    mdiMenu: {
      type: String,
      default: () => mdiMenu,
    },
    mdiChartTimelineVariant: {
      type: String,
      default: () => mdiChartTimelineVariant,
    },
    mdiAccountMultiple: {
      type: String,
      default: () => mdiAccountMultiple,
    },
    mdiDomain: {
      type: String,
      default: () => mdiDomain,
    },
    drawer: {
      type: [Boolean, Function],
      default: () => isDesktopOrTablet,
    },
  },
  computed: {
    items(): Item[] {
      return [
        {
          icon: mdiChartTimelineVariant,
          title: this.$t('都内の最新感染動向'),
          link: `${this.localePath('/')}`,
        },
        {
          icon: 'CovidIcon',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: `${this.localePath('/flow')}`,
        },
        {
          icon: 'CovidIcon',
          title: this.$t('新型コロナウイルスの感染が判明した方へ'),
          link:
            'https://www.fukushihoken.metro.tokyo.lg.jp/oshirase/corona_0401.html',
        },
        {
          icon: 'MaskTrashIcon',
          title: this.$t('ご家庭でのマスク等の捨て方'),
          link:
            'https://www.kankyo.metro.tokyo.lg.jp/resource/500200a20200221162304660.files/200327_chirashi.pdf',
          divider: true,
        },
        {
          icon: 'ParentIcon',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: `${this.localePath('/parent')}`,
        },
        {
          icon: mdiAccountMultiple,
          title: this.$t('都民の皆様へ'),
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html',
        },
        {
          icon: mdiDomain,
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: `${this.localePath('/worker')}`,
          divider: true,
        },
        {
          title: this.$t('東京都新型コロナウイルス感染症対策本部報'),
          link:
            'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1010035/index.html',
        },
        {
          title: this.$t('東京都 新型コロナウイルス感染症 支援情報ナビ'),
          link: 'https://covid19.supportnavi.metro.tokyo.lg.jp/',
        },
        {
          title: this.$t('都民利用施設・都主催イベントに関する情報'),
          link:
            'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event00.html',
        },
        {
          title: this.$t('東京都における滞在人口の増減'),
          link:
            'https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html',
        },
        {
          title: this.$t('知事からのメッセージ'),
          link:
            'https://www.metro.tokyo.lg.jp/tosei/governor/governor/katsudo/2020/03/03_00.html',
        },
        {
          title: this.$t('当サイトについて'),
          link: `${this.localePath('/about')}`,
        },
        {
          title: this.$t('お問い合わせ先一覧'),
          link: `${this.localePath('/contacts')}`,
        },
        {
          title: this.$t('東京都公式ホームページ'),
          link: 'https://www.metro.tokyo.lg.jp/',
        },
      ]
    },
  },
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  min-height: 64px;
  @include largerThan($small) {
    padding: 20px 0 96px;
  }
  @include lessThan($small) {
    display: flex;
    padding-left: 12px;
  }
  @include lessThan($tiny) {
    padding-left: 10px;
  }
}

.SideNavigation-OpenIcon {
  position: relative;
  top: 0;
  left: 0;
  padding: 32px 8px 18px 2px;
  font-size: 28px;
  @include largerThan($small) {
    @include visually-hidden;
  }
  @include lessThan($tiny) {
    font-size: 24px;
  }
}

.SideNavigation-CloseIcon {
  position: relative;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 12px;
  font-size: 28px;
  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }
  @include largerThan($small) {
    @include visually-hidden;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  color: #707070;
  @include font-size(13);
  @include largerThan($small) {
    margin: 10px 0 0 0;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  height: 64px;
  @include lessThan($tiny) {
    justify-content: space-between;
  }
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
    outline: dotted $gray-3 1px;
  }
  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

.SideNavigation-HeaderText {
  margin: 10px 0 0 0;
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }
  @include lessThan($tiny) {
    margin: 0;
  }
}

.v-navigation-drawer {
  position: relative;
  overflow-y: visible;
  z-index: 0;
  @include largerThan($small) {
    width: 256px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none none;
    }
  }

  .SideNavigation-Body {
    padding: 20px 20px 20px 20px;
    position: relative;
    @include largerThan($small) {
      width: inherit;
    }
    @include lessThan($small) {
      padding: 0 36px 36px 0;
      top: 0;
      bottom: 0;
      left: 0;
      display: block !important;
      background-color: $white;
      width: 100%;
      height: 100%;
      -webkit-overflow-scrolling: touch;
    }
  }

  .v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close)
    + .v-navigation-drawer__content {
    visibility: visible;
  }
  .v-navigation-drawer--is-mobile::after(.v-navigation-drawer--close)
    + .v-navigation-drawer__content {
    @include visually-hidden;
  }
  .v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {
    min-width: inherit;
  }

  .SideNavigation-Menu {
    @include lessThan($small) {
      padding-top: 50px;
    }
  }

  .SideNavigation-LanguageLabel {
    display: block;
    margin-bottom: 5px;
    @include font-size(14);
  }

  .SideNavigation-Footer {
    position: relative;
    padding: 0 20px 20px 12px;
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
    &:visited,
    &:active {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      color: inherit;
      text-decoration: none;
      border: 1px dotted $gray-3;
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
    margin-top: 15px;
    color: $gray-1;
    line-height: 1.3;
    font-weight: bold;
    @include font-size(10);
  }

  .SideNavigation-LicenseLink {
    &:focus {
      outline: 1px dotted $gray-3;
    }
  }
}
</style>
