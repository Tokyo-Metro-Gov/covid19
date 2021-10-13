<template>
  <v-col cols="12" md="6" class="DataCard MonitoringCommentCard">
    <client-only>
      <data-view
        :title="$t('感染状況・医療提供体制の分析')"
        title-id="monitoring-comment"
        :date="date"
        is-set-title-row
      >
        <template #infoPanel>
          <div class="MonitoringComment-date">
            {{
              $t('{date}時点', {
                date: formattedDate(
                  monitoringComment['総括コメント-感染状況'].date
                ),
              })
            }}
          </div>
        </template>

        <div>
          <ul>
            <li
              v-for="(comment, i) in translatedMonitoringSummarizedComments"
              :key="i"
              class="MonitoringComment-summary-item"
            >
              {{ comment }}
            </li>
          </ul>
          <section class="MonitoringCommentFrame">
            <h4 class="MonitoringCommentFrame-title">{{ $t('感染状況') }}</h4>
            <frame
              :level="monitoringComment['総括コメント-感染状況'].level - 1"
              :comment="commentMonitoring('総括コメント-感染状況')"
            />
          </section>
          <section class="MonitoringCommentFrame">
            <h4 class="MonitoringCommentFrame-title">
              {{ $t('医療提供体制') }}
            </h4>
            <frame
              :level="monitoringComment['総括コメント-医療提供体制'].level - 1"
              :comment="commentMonitoring('総括コメント-医療提供体制')"
            />
          </section>
          <div class="MonitoringCommentImage">
            <random-image />
            <div class="MonitoringCommentLink">
              <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
              <app-link
                to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"
              >
                {{ $t('専門家による分析・総括コメントの詳細はこちら') }}
              </app-link>
            </div>
          </div>
        </div>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import Frame from '@/components/index/CardsFeatured/MonitoringComment/Frame.vue'
import monitoringItemsData from '@/data/monitoring_items.json'
import {
  formatMonitoringComment,
  MonitoringComment,
} from '@/utils/formatMonitoringItems'
import RandomImage from '~/components/index/CardsFeatured/MonitoringComment/RandomImage.vue'

type CommentKey = {
  [key: string]: MonitoringComment
}

export default Vue.extend({
  components: {
    AppLink,
    DataView,
    Frame,
    RandomImage,
  },
  data(): {
    monitoringComment: CommentKey
    date: string
    mdiChevronRight: string
  } {
    const monitoringComment: CommentKey = formatMonitoringComment(
      monitoringItemsData.data
    )
    const date: string = monitoringItemsData.date as string

    return {
      monitoringComment,
      date,
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
    formattedDate(date): string {
      return this.$d(new Date(date), 'date')
    },
  },
})
</script>

<style lang="scss" scoped>
.MonitoringComment-date {
  text-align: right;

  @include font-size(14);
}

.MonitoringComment-summary-item {
  margin-bottom: 8px;

  @include font-size(14);
}

.MonitoringCommentFrame {
  margin: 20px 0;
}

.MonitoringCommentFrame-title {
  margin-bottom: 1px;
  color: $gray-3;
  font-weight: normal;

  @include font-size(14);
}

.MonitoringCommentImage {
  margin-top: 50px;
}

.MonitoringCommentLink {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

  @include font-size(14);
}
</style>
