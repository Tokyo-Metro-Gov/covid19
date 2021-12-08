<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        ref="Open"
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        :aria-haspopup="true"
        @click="$emit('open-navigation', $event)"
      >
        {{ mdiMenu }}
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <app-link :to="localePath('/')" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            :src="logoSrc"
            width="111"
            height="28"
            :alt="$t('東京都')"
          />
          <span class="SideNavigation-HeaderText">
            {{ $t('menu/新型コロナウイルス感染症') }}<br />{{
              $t('menu/対策サイト')
            }}
          </span>
        </app-link>
      </h1>
    </header>

    <div
      v-if="isNaviOpen || $vuetify.breakpoint.smAndUp"
      ref="SideBody"
      :class="['SideNavigation-Body', { '-opened': isNaviOpen }]"
    >
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('close-navigation', $event)"
      >
        {{ mdiClose }}
      </v-icon>

      <nav class="SideNavigation-Menu">
        <div class="SideNavigation-Language">
          <div v-if="$i18n.locales.length > 1" class="SideNavigation-Language">
            <label
              ref="LanguageLabel"
              class="SideNavigation-LanguageLabel"
              for="LanguageSelector"
              tabindex="-1"
            >
              {{ $t('多言語対応選択メニュー') }}
            </label>
            <language-selector />
          </div>
        </div>
        <menu-list
          :items="items"
          :item-titles="itemTitles"
          @click="$emit('close-navigation', $event)"
        />
      </nav>

      <footer class="SideNavigation-Footer">
        <ul class="SideNavigation-Social">
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://line.me/R/ti/p/%40822sysfc"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/line.webp" type="image/webp" />
                <img src="/line.png" width="130" height="130" alt="LINE" />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://twitter.com/tokyo_bousai"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/twitter.webp" type="image/webp" />
                <img
                  src="/twitter.png"
                  width="130"
                  height="130"
                  alt="Twitter"
                />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://www.facebook.com/tochokoho"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/facebook.webp" type="image/webp" />
                <img
                  src="/facebook.png"
                  width="130"
                  height="130"
                  alt="Facebook"
                />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://github.com/tokyo-metropolitan-gov/covid19"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/github.webp" type="image/webp" />
                <img src="/github.png" width="130" height="130" alt="GitHub" />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://www.youtube.com/user/tokyo/videos"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/youtube.webp" type="image/webp" />
                <img
                  src="/youtube.png"
                  width="130"
                  height="130"
                  alt="YouTube"
                />
              </picture>
            </app-link>
          </li>
        </ul>
        <i18n
          tag="small"
          path="このサイトの内容物は{creativeCommons}の下に提供されています（ただし商標等の他団体が権利を持つものは除く）。"
          class="SideNavigation-Copyright"
        >
          <template #creativeCommons>
            <app-link
              :to="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
              :icon-size="12"
            >
              {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
            </app-link>
          </template>
        </i18n>
        <small class="SideNavigation-Copyright">
          &copy; 2020 Tokyo Metropolitan Government
        </small>
        <div class="SideNavigation-GMarkWrapper">
          <app-link
            to="https://www.g-mark.org/award/describe/51112"
            :show-icon="false"
          >
            <img
              src="/.netlify/functions/g-mark"
              width="200"
              alt="GOOD DESIGN AWARD 2020年度受賞"
            />
          </app-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mdiAccountMultiple,
  mdiChartTimelineVariant,
  mdiClose,
  mdiDomain,
  mdiHumanPregnant,
  mdiMenu,
} from '@mdi/js'
import Vue from 'vue'
import type { TranslateResult } from 'vue-i18n'

import AppLink from '@/components/_shared/AppLink.vue'
import LanguageSelector from '@/components/_shared/SideNavigation/LanguageSelector.vue'
import MenuList from '@/components/_shared/SideNavigation/MenuList.vue'

type ItemTitle = {
  slug: string
  text: TranslateResult
  isExpand?: boolean
}

type Item = {
  iconPath?: string
  svg?: string
  title: TranslateResult
  link: string
  slug: string
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList,
    AppLink,
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mdiClose,
      mdiMenu,
    }
  },
  computed: {
    itemTitles(): ItemTitle[] {
      return [
        {
          slug: 'covid19-info',
          text: this.$t('新型コロナウイルス感染症情報'),
          isExpand: false,
        },
        {
          slug: 'support-info',
          text: this.$t('支援情報等'),
          isExpand: false,
        },
        {
          slug: 'notice-from-tmg',
          text: this.$t('東京都からのお知らせ'),
          isExpand: true,
        },
        {
          slug: 'site-info',
          text: this.$t('サイト情報'),
          isExpand: false,
        },
      ]
    },
    items(): Item[] {
      return [
        {
          iconPath: mdiChartTimelineVariant,
          title: this.$t('都内の最新感染動向'),
          link: this.localePath('/'),
          slug: 'covid19-info',
        },
        {
          svg: 'CovidIcon',
          title: this.$t(
            '発熱症状がある方・新型コロナウイルス感染症が心配な方へ'
          ),
          link: 'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/soudan/coronasodan.html',
          slug: 'covid19-info',
        },
        {
          svg: 'CovidIcon',
          title: this.$t('新型コロナウイルス感染症で自宅・宿泊療養される方へ'),
          link: 'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/shien/index.html',
          slug: 'covid19-info',
        },
        {
          svg: 'SupportIcon',
          title: this.$t(
            '新型コロナウイルス感染症の患者発生状況に関するよくあるご質問'
          ),
          link: 'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/coronafaq.html',
          slug: 'covid19-info',
        },
        {
          svg: 'MaskTrashIcon',
          title: this.$t('ご家庭でのマスク等の捨て方'),
          link: 'https://www.kankyo.metro.tokyo.lg.jp/resource/500200a20200221162304660.files/200327_chirashi.pdf',
          slug: 'covid19-info',
        },
        {
          svg: 'ParentIcon',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: this.localePath('/parent'),
          slug: 'support-info',
        },
        {
          iconPath: mdiHumanPregnant,
          title: this.$t('妊産婦の皆様へ'),
          link: 'https://www.fukushihoken.metro.tokyo.lg.jp/oshirase/ninsanpu.html',
          slug: 'support-info',
        },
        {
          iconPath: mdiAccountMultiple,
          title: this.$t('都民の皆様へ'),
          link: 'https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html',
          slug: 'support-info',
        },
        {
          iconPath: mdiDomain,
          title: this.$t('企業の皆様・はたらく皆様へ'),
          link: this.localePath('/worker'),
          slug: 'support-info',
        },
        {
          title: this.$t('東京都 新型コロナウイルス感染症 支援情報ナビ'),
          link: 'https://covid19.supportnavi.metro.tokyo.lg.jp/',
          slug: 'support-info',
        },
        {
          title: this.$t('東京都新型コロナウイルス感染症対策本部報'),
          link: 'https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1010035/index.html',
          slug: 'notice-from-tmg',
        },
        {
          title: this.$t(
            '新型コロナウイルス感染症に罹患し回復された方の体験に基づくメッセージの紹介'
          ),
          link: 'https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-message-for-you-02.html',
          slug: 'notice-from-tmg',
        },
        {
          title: this.$t('都民利用施設・都主催イベントに関する情報'),
          link: 'https://www.seisakukikaku.metro.tokyo.lg.jp/information/event00.html',
          slug: 'notice-from-tmg',
        },
        {
          title: this.$t('東京都公式ホームページ'),
          link: 'https://www.metro.tokyo.lg.jp/',
          slug: 'notice-from-tmg',
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about'),
          slug: 'site-info',
        },
        {
          title: this.$t('ご意見はこちら（外部サービスを使用しています）'),
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSdSROCPyr6Aj6WoAoYfqcT6StDOEUB38Grug1EJjUYzppcEZg/viewform?usp=sf_link',
          slug: 'site-info',
        },
        {
          title: this.$t('お問い合わせ先一覧'),
          link: this.localePath('/contacts'),
          slug: 'site-info',
        },
        {
          title: this.$t('サイトマップ'),
          link: this.localePath('/sitemap'),
          slug: 'site-info',
        },
      ]
    },
    logoSrc(): string {
      switch (this.$i18n.locale) {
        case 'ja':
        case 'ja-basic':
        case 'zh-tw':
          return '/logo.svg'
        case 'ko':
          return '/logo-ko.png'
        case 'zh-cn':
          return '/logo-zh-cn.png'
        default:
          return '/logo-en.png'
      }
    },
  },
  watch: {
    $route: 'handleChangeRoute',
    isNaviOpen(value) {
      this.handleChangeAttribute(value)
      this.handleNavFocus(value)
    },
  },
  methods: {
    handleChangeAttribute(isNaviOpen: boolean) {
      return this.$nextTick().then(() => {
        const $SideBody = this.$refs.SideBody as HTMLElement | undefined
        if ($SideBody) {
          if (isNaviOpen) {
            $SideBody.setAttribute('role', 'dialog')
            $SideBody.setAttribute('aria-modal', 'true')
          } else {
            $SideBody.removeAttribute('role')
            $SideBody.removeAttribute('aria-modal')
          }
        }
      })
    },
    handleChangeRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    },
    handleNavFocus(isNaviOpen: boolean) {
      return this.$nextTick(() => {
        if (isNaviOpen) {
          const $LanguageLabel = this.$refs.LanguageLabel as HTMLElement
          $LanguageLabel.focus()
        } else {
          const $Open = this.$refs.Open as Vue
          const $OpenElement = $Open.$el as HTMLButtonElement
          $OpenElement.focus()
        }
      })
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
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;

  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }

  @include lessThan($small) {
    display: flex;
  }

  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;

  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }

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

  @include lessThan($tiny) {
    font-size: 24px;
    padding: 20px 10px;
  }

  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  color: $gray-3;
  font-weight: 600;

  @include font-size(13);

  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;

  @include lessThan($small) {
    height: 64px;
  }

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
    font-weight: 600;
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
  display: block;
  margin: 10px 0 0 0;

  @include lessThan($small) {
    margin: 0 0 0 10px;
  }

  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;

  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;

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
  padding-top: 20px;

  .SideNavigation-Social {
    display: flex;
    list-style: none;
    padding: 0;
    margin-bottom: 15px;

    .SideNavigation-SocialLink-ListItem {
      .SideNavigation-SocialLink {
        display: block;
        width: 30px;
        height: 30px;
        border: 1px dotted transparent;
        border-radius: 15px;
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
          border: 2px solid $focus;
          outline: none;
        }

        picture {
          img {
            width: 30px;
          }
        }
      }

      & + .SideNavigation-SocialLink-ListItem {
        margin-left: 10px;
      }
    }
  }
}

.SideNavigation-Copyright {
  display: inline-block;
  color: $gray-1;
  line-height: 1.3;
  font-weight: 600;

  @include font-size(10);
}

.SideNavigation-GMarkWrapper {
  margin-top: 16px;
}
</style>
