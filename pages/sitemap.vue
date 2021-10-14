<template>
  <div class="Worker">
    <page-header :title="$t('サイトマップ')" />
    <static-card>
      <h3>
        <app-link :to="localePath('/')" class="Sitemap-titleLink">
          <v-icon class="mr-2">
            {{ mdiChartTimelineVariant }}
          </v-icon>
          {{ $t('都内の最新感染動向') }}
        </app-link>
      </h3>
      <section>
        <h4>
          <app-link :to="localePath('/')" class="Sitemap-titleLink">
            {{ $t('注目の指標') }}
          </app-link>
        </h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('注目の指標')"
            :key="`cards-monitoring${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
      <section>
        <h4>
          <app-link :to="localePath('/monitoring')" class="Sitemap-titleLink">
            {{ $t('モニタリング項目') }}
          </app-link>
        </h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('モニタリング項目')"
            :key="`cards-monitoring${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
      <section>
        <h4>
          <app-link :to="localePath('/reference')" class="Sitemap-titleLink">
            {{ $t('その他 参考指標') }}
          </app-link>
        </h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('その他 参考指標')"
            :key="`cards-reference${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/parent')" class="Sitemap-titleLink">
          <span class="Sitemap-titleIcon">
            <parent-icon />
          </span>
          {{ $t('お子様をお持ちの皆様へ') }}
        </app-link>
      </h3>
      <p>
        {{ $t('子供たちの学びを支援するコンテンツ等について') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/worker')" class="Sitemap-titleLink">
          <v-icon class="mr-2">
            {{ mdiDomain }}
          </v-icon>
          {{ $t('企業の皆様・はたらく皆様へ') }}
        </app-link>
      </h3>
      <p>
        {{ $t('事業者の皆様に対する支援情報およびテレワーク等の推進について') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/about')" class="Sitemap-titleLink">
          {{ $t('当サイトについて') }}
        </app-link>
      </h3>
      <p>
        {{ $t('サイトの目的、アクセシビリティ方針、ブラウザ環境等について') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          :to="localePath('/accessibility-results')"
          class="Sitemap-titleLink"
        >
          {{ $t('ウェブアクセシビリティ試験結果（2021年度）') }}
        </app-link>
      </h3>
      <p>
        {{ $t('ウェブアクセシビリティ試験結果（2021年度）について') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/contacts')" class="Sitemap-titleLink">
          {{ $t('お問い合わせ先一覧') }}
        </app-link>
      </h3>
      <p>
        {{ $t('当サイトに関する各種お問い合わせ先一覧') }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant, mdiDomain } from '@mdi/js'
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

import cardData from '@/assets/json/cardRoutesSettings.json'
import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'
import ParentIcon from '@/static/parent.svg'
import { Settings } from '@/types/cardRoutesSettings'

type Data = {
  mdiChartTimelineVariant: string
  mdiDomain: string
  cardData: Settings[]
}
type Methods = {
  getCardRoutes(category: string): Settings[]
}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
    ParentIcon,
  },
  data() {
    return {
      mdiChartTimelineVariant,
      mdiDomain,
      cardData,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('サイトマップ') as string,
    }
  },
  methods: {
    getCardRoutes(category: string) {
      return this.cardData.filter((v) => v.category === category)
    },
  },
})
</script>

<style lang="scss" scoped>
.Sitemap-titleLink {
  display: flex;
  color: $green-1;

  ::v-deep .v-icon {
    color: $green-1;
  }

  svg {
    fill: $green-1;
  }
}

.Sitemap-titleIcon {
  margin-right: 4px;
  min-width: 24px;
}

.Sitemap-list {
  list-style: none;
  margin-top: 12px;
}

.Sitemap-item {
  display: inline-block;
  margin: 0 12px 12px 0;
}

.Sitemap-linkButton {
  @include button-text('sm');

  &:hover {
    text-decoration: none;
  }
}
</style>
