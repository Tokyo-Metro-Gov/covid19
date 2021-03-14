<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon-path="headerItem.iconPath">{{
        headerItem.title
      }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="updatedAt">{{ formattedDateForDisplay }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }}</span>
      </div>
    </div>
    <whats-new :items="newsItems" :is-emergency="false" />
    <infection-medicalcareprovision-status />
    <monitoring-comment-card />
    <div class="row mb-4">
      <staying-population />
      <consultation />
    </div>
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'

import Consultation from '@/components/Consultation.vue'
import MonitoringCommentCard from '@/components/MonitoringCommentCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import StayingPopulation from '@/components/StayingPopulation.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import { Data as IData } from '@/libraries/auto_generated/data_converter/convertData'
import { News as INews } from '@/libraries/auto_generated/data_converter/convertNews'
import { Registry } from '@/libraries/Registry'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

const data: IData = Registry.DataRepository.data
const newsData: INews = Registry.NewsRepository.data

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    MonitoringCommentCard,
    Consultation,
    StayingPopulation,
  },
  data() {
    const { lastUpdate } = data

    return {
      headerItem: {
        iconPath: mdiChartTimelineVariant,
        title: this.$t('都内の最新感染動向'),
      },
      lastUpdate,
      newsItems: newsData.newsItems,
    }
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.lastUpdate)
    },
    formattedDateForDisplay() {
      return `${this.$d(new Date(this.$data.lastUpdate), 'dateTime')} JST`
    },
  },
})
</script>

<style lang="scss" scoped>
.MainPage {
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
}
</style>
