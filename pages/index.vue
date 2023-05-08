<template>
  <div>
    <div class="AttentionNote">
      <div class="AttentionNote-Emphasis">
        <p>
          {{
            $t(
              '新型コロナ感染症の５類移行に伴い、5月8日をもって本サイトの更新は停止いたします。'
            )
          }}
        </p>
        <i18n
          tag="p"
          path="新型コロナ感染症の感染動向等に関する情報については、{covid19portal}からご確認ください。"
        >
          <template #covid19portal>
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/index.html"
            >
              {{ $t('新型コロナ保健医療情報ポータル') }}
            </app-link>
          </template>
        </i18n>
      </div>

      <p>{{ $t('なお、本サイトは、５月末をもって閉鎖いたします。') }}</p>
      <i18n
        tag="p"
        path="過去のオープンデータについては、引き続き、{opendatacatalog}からご覧いただけます。"
      >
        <template #opendatacatalog>
          <app-link to="https://portal.data.metro.tokyo.lg.jp/1097/">
            {{ $t('東京都オープンデータカタログサイト') }}
          </app-link>
        </template>
      </i18n>
    </div>
    <page-header
      :icon-path="headerItem.iconPath"
      :title="headerItem.title"
      :updated-at="lastUpdateAsString"
    />
    <site-top-upper />
    <cards-tab />
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import type { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import CardsTab from '@/components/index/CardsTab.vue'
import SiteTopUpper from '@/components/index/SiteTopUpper.vue'
import { Data as IData } from '@/libraries/auto_generated/data_converter/convertData'

type Data = {
  headerItem: {
    iconPath: string
    title: string
  }
}
type Methods = {
  onScroll: () => void
}
type Computed = {
  lastUpdateAsString: string
  data: IData
}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: {
    AppLink,
    CardsTab,
    PageHeader,
    SiteTopUpper,
  },
  data() {
    return {
      headerItem: {
        iconPath: mdiChartTimelineVariant,
        title: this.$t('都内の最新感染動向') as string,
      },
    }
  },
  computed: {
    lastUpdateAsString() {
      return this.data.lastUpdate
    },
    data() {
      return this.$store.state.data
    },
  },
  head(): MetaInfo {
    return {
      title: this.$t('都内の最新感染動向') as string,
    }
  },
}

export default options
</script>

<style lang="scss" scoped>
.AttentionNote {
  margin-bottom: 28px;
  padding: 18px;
  background-color: $notice;
  border-radius: 4px;
  color: $gray-2;

  @include font-size(14);

  p {
    margin: 0;
  }

  &-Emphasis {
    @include font-size(16);

    margin-bottom: 16px;
  }
}
</style>
