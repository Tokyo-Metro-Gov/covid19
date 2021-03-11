<template>
  <div class="MonitoringComment">
    <div class="MonitoringComment-heading">
      <h3 class="MonitoringComment-title">
        {{ $t('感染状況・医療提供体制の分析') }}
      </h3>
    </div>
    <div class="MonitoringComment-comments">
      <v-row class="MonitoringComment-row">
        <v-col class="MonitoringComment-col">
          <v-col cols="12">
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
              :level="monitoringComment['総括コメント-感染状況'].level - 1"
              :comment="commentMonitoring('総括コメント-感染状況')"
            />
          </v-col>
          <v-col cols="12">
            <h4 class="MonitoringCommentFrame-title">
              {{ $t('医療提供体制') }}
            </h4>
            <monitoring-comment-frame
              :level="monitoringComment['総括コメント-医療提供体制'].level - 1"
              :comment="commentMonitoring('総括コメント-医療提供体制')"
            />
          </v-col>
        </v-col>
        <v-col class="MonitoringComment-col">
          <div class="MonitoringComment-description">
            <monitoring-comment-card-image-swipe />
            <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
            >
              {{ $t('専門家による分析・総括コメントの詳細はこちら') }}
            </app-link>
          </div>
        </v-col>
      </v-row>
    </div>
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

<style lang="scss">
.MonitoringComment {
  @include card-container();

  padding: 5px 12px 10px 12px;
  margin: 0 0 10px 0;

  .MonitoringComment-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .MonitoringComment-title {
      display: flex;
      align-items: center;
      padding: 8px 6px;
      @include card-h2();
    }
  }

  .MonitoringComment-comments {
    margin: 0 10px 0 10px;
    padding: 2px;

    .MonitoringComment-row {
      .MonitoringComment-col {
        float: left;
        clear: both;
        padding: 3px;
        min-width: 300px;

        .MonitoringComment-summary {
          @include font-size(12);
        }

        .MonitoringCommentFrame-title {
          margin-bottom: 1px;
          color: $gray-3;
          font-weight: normal;

          @include font-size(14);
        }
      }
    }
  }

  .MonitoringComment-description {
    padding: 6px;
    text-align: center;

    @include font-size(14);
    > a {
      @include text-link();
    }
  }
}
</style>
