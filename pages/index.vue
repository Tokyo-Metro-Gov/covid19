<template>
  <div v-scroll="onScroll">
    <page-header
      :icon-path="headerItem.iconPath"
      :title="headerItem.title"
      :updated-at="lastUpdateAsString"
    />
    <site-top-upper />
    <lazy-cards-tab v-if="$vuetify.breakpoint.smAndUp || showCardsTab" />
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { MetaInfo } from 'vue-meta'

import PageHeader from '@/components/PageHeader.vue'
import { Data as IData } from '@/libraries/auto_generated/data_converter/convertData'

type Data = {
  headerItem: {
    iconPath: string
    title: string
  }
  showCardsTab: boolean
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
    PageHeader,
  },
  data() {
    return {
      headerItem: {
        iconPath: mdiChartTimelineVariant,
        title: this.$t('都内の最新感染動向') as string,
      },
      showCardsTab: false,
    }
  },
  methods: {
    onScroll() {
      this.showCardsTab = true
    },
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
