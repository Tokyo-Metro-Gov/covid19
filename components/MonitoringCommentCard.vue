<template>
  <div class="MonitoringComment">
    <v-row class="MonitoringComment-row">
      <v-col class="pb-0">
        <h3 class="MonitoringComment-title">
          {{ $t('感染状況・医療提供体制の分析') }}
        </h3>
        <p class="MonitoringComment-summary">
          <span
            v-for="(comment, i) in translatedMonitoringSummarizedComments"
            :key="i"
          >
            {{ comment }}
          </span>
        </p>
        <h4 class="MonitoringCommentFrame-title">{{ $t('感染状況') }}</h4>
        <monitoring-comment-frame
          class="mb-4"
          :level="monitoringComment['総括コメント-感染状況'].level - 1"
          :comment="commentMonitoring('総括コメント-感染状況')"
        />
        <h4 class="MonitoringCommentFrame-title">
          {{ $t('医療提供体制') }}
        </h4>
        <monitoring-comment-frame
          :level="monitoringComment['総括コメント-医療提供体制'].level - 1"
          :comment="commentMonitoring('総括コメント-医療提供体制')"
        />
      </v-col>
    </v-row>
    <v-row class="MonitoringComment-row">
      <v-col class="pb-0">
        <div class="MonitoringComment-description">
          <div class="MonitoringComment-link">
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
            >
              {{ $t('専門家による分析・総括コメントの詳細はこちら') }}
            </app-link>
          </div>
          <monitoring-comment-card-image-swipe />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'
import MonitoringCommentCardImageSwipe from '@/components/MonitoringCommentCardImageSwipe.vue'
import MonitoringCommentFrame from '@/components/MonitoringCommentFrame.vue'
import monitoringItemsData from '@/data/monitoring_items.json'
import {
  formatMonitoringComment,
  MonitoringComment,
} from '@/utils/formatMonitoringItems'

type CommentKey = {
  [key: string]: MonitoringComment
}

export default Vue.extend({
  components: {
    AppLink,
    MonitoringCommentFrame,
    MonitoringCommentCardImageSwipe,
  },
  data(): {
    monitoringComment: CommentKey
    mdiChevronRight: string
  } {
    const monitoringComment: CommentKey = formatMonitoringComment(
      monitoringItemsData.data
    )

    return {
      monitoringComment,
      mdiChevronRight,
    }
  },
  computed: {
    translatedMonitoringSummarizedComments(): Array<String> {
      const comments = monitoringItemsData.data.専門家3行コメント
      if (['ja', 'ja-basic'].includes(this.$i18n.locale)) {
        return comments.map((comment) => comment['@ja'])
      } else {
        return comments.map((comment) => comment['@en'])
      }
    },
  },
  methods: {
    commentMonitoring(item: string) {
      return ['ja', 'ja-basic'].includes(this.$root.$i18n.locale)
        ? this.monitoringComment[item].display['@ja']
        : this.monitoringComment[item].display['@en']
    },
  },
})
</script>

<style lang="scss" scoped>
.MonitoringComment {
  @include card-container();

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px 12px 10px 12px;
  margin: 0 0 10px 0;

  .MonitoringComment-title {
    @include card-h2();

    margin-bottom: 12px;
  }

  .MonitoringComment-row {
    flex: 0 0 50%;
    margin: 0;

    @include lessThan($medium) {
      flex-basis: 100%;
    }
  }

  .MonitoringComment-summary {
    @include font-size(12);
  }

  .MonitoringCommentFrame-title {
    margin-bottom: 1px;
    color: $gray-3;
    font-weight: normal;

    @include font-size(14);
  }

  .MonitoringComment-description {
    text-align: center;

    @include font-size(14);
    > a {
      @include text-link();
    }
  }

  .MonitoringComment-link {
    text-align: right;
    margin-bottom: 16px;
  }
}
</style>
