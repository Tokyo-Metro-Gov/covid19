<template>
  <div v-scroll="onScroll">
    <div class="Header mb-3">
      <page-header :icon-path="headerItem.iconPath">{{
        headerItem.title
      }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="convertDate(lastUpdateAsString)">{{
          formatDate(lastUpdate)
        }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }}</span>
      </div>
    </div>
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
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

type Data = {
  headerItem: {
    iconPath: string
    title: string
  }
  showCardsTab: boolean
}
type Methods = {
  onScroll: () => void
  formatDate(date: Date): string
  convertDate(dateAsString: string): string
}
type Computed = {
  lastUpdate: Date
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
    formatDate(date) {
      return `${this.$d(date, 'dateTime')} JST`
    },
    convertDate(dateAsString) {
      return convertDatetimeToISO8601Format(dateAsString)
    },
  },
  computed: {
    lastUpdate() {
      return new Date(this.lastUpdateAsString)
    },
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
.Header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  @include lessThan($small) {
    flex-direction: column;
    align-items: baseline;
  }
}

.UpdatedAt {
  @include font-size(14);

  color: $gray-3;
  margin-bottom: 0.2rem;
}

.Annotation {
  @include font-size(12);

  color: $gray-3;
  @include largerThan($small) {
    margin: 0 0 0 auto;
  }
}
</style>
