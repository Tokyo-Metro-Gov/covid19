<template>
  <div>
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
      title: `${this.$t('都内の最新感染動向')} : ${this.$t(
        'モニタリング項目'
      )}` as string,
    }
  },
}

export default options
</script>
