<template>
  <div class="MonitoringComment">
    <div class="MonitoringComment-heading">
      <h3 class="MonitoringComment-title">
        {{ $t('感染状況・医療提供体制の分析') }}
      </h3>
    </div>
    <div class="MonitoringComment-comments">
      <v-row>
        <v-col>
          <v-col cols="12">
            <h4>{{ $t('感染状況') }}</h4>
            <monitoring-comment-frame
              :level="monitoringComment['総括コメント-感染状況'].level - 1"
              :comment="commentMonitoring('総括コメント-感染状況')"
            />
          </v-col>
          <v-col cols="12">
            <h4>{{ $t('医療提供体制') }}</h4>
            <monitoring-comment-frame
              :level="monitoringComment['総括コメント-医療提供体制'].level - 1"
              :comment="commentMonitoring('総括コメント-医療提供体制')"
            />
          </v-col>
        </v-col>
        <v-col>
          <div class="MonitoringComment-description">
            <div class="MonitoringComment-slide">
              <app-link
                to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
              >
                <img
                  width="240px"
                  alt="モニタリング項目サマリ"
                  src="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.images/0121bunseki.JPG"
                />
              </app-link>
            </div>
            <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
            >
              {{ $t('最新のモニタリング項目の分析・総括コメントについて') }}
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
  },
  data() {
    const monitoringComment: CommentKey = formatMonitoringComment(
      monitoringItemsData.data
    )
    return {
      monitoringComment,
      mdiChevronRight,
    }
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

  padding: 5px;
  margin-bottom: 10px;

  .MonitoringComment-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .MonitoringComment-title {
      display: flex;
      align-items: center;
      padding: 8px 10px;
      color: $gray-2;
      @include card-h2();
    }
  }

  .MonitoringComment-description {
    padding: 6px;
    text-align: center;

    @include font-size(14);
    > a {
      text-decoration: none;
      @include text-link();
    }
    .MonitoringComment-slide {
      text-align: center;
    }
  }

  .MonitoringComment-comments {
    h4 {
      margin-bottom: 1px;
      color: $gray-3;
      font-weight: normal;

      @include font-size(14);
    }

    margin: 0 10px 0 10px;
    padding: 2px;

    .row {
      .col {
        padding: 3px;
      }
    }
  }
}
</style>
