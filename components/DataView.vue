<template>
  <v-card ref="dataView" class="DataView" :loading="loading">
    <div class="DataView-Inner">
      <div class="DataView-Header">
        <h3
          class="DataView-Title"
          :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
        >
          {{ title }}
        </h3>
        <slot name="infoPanel" />
      </div>
      <div class="DataView-Description">
        <slot name="description" />
      </div>
      <div>
        <slot name="button" />
      </div>
      <div class="DataView-CardText">
        <slot />
      </div>
      <div class="DataView-Description">
        <slot name="additionalDescription" />
      </div>
      <div v-if="this.$slots.dataTable" class="DataView-Details">
        <v-expansion-panels v-if="showDetails" flat>
          <v-expansion-panel>
            <v-expansion-panel-header
              :hide-actions="true"
              :style="{ transition: 'none' }"
              @click="toggleDetails"
            >
              <template slot:actions>
                <div class="v-expansion-panel-header__icon">
                  <v-icon left>mdi-chevron-right</v-icon>
                </div>
              </template>
              <span class="expansion-panel-text">
                {{ $t('テーブルを表示') }}
              </span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <slot name="dataTable" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <template v-else>
          <slot name="dataTable" />
        </template>
      </div>
      <div class="DataView-Description">
        <slot name="footer-description" />
      </div>
      <div class="DataView-Footer">
        <div class="Footer-Left">
          <slot name="footer" />
          <div>
            <a class="Permalink" :href="permalink">
              <time :datetime="formattedDate">
                {{ $t('{date} 更新', { date }) }}
              </time>
            </a>
          </div>
        </div>

        <data-view-share
          v-if="this.$route.query.embed != 'true'"
          :title="title"
          :title-id="titleId"
          class="Footer-Right"
        />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import { EventBus, TOGGLE_EVENT } from '@/utils/card-event-bus'
import DataViewShare from '@/components/DataViewShare.vue'

export default Vue.extend({
  components: { DataViewShare },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      showDetails: false,
      openDetails: false
    }
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    },
    permalink(): string {
      const permalink = '/cards/' + this.titleId
      return this.localePath(permalink)
    }
  },
  mounted() {
    this.showDetails = true
  },
  methods: {
    toggleDetails() {
      this.openDetails = !this.openDetails
      EventBus.$emit(TOGGLE_EVENT, { dataView: this.$refs.dataView })
    }
  },
  head(): MetaInfo {
    // カードの個別ページの場合は、タイトルと更新時刻を`page/cards/_card`に渡す
    if (!this.$route.params.card) return {}

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        { hid: 'description', name: 'description', content: this.date },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.date
        }
      ]
    }
  }
})
</script>

<style lang="scss">
.DataView {
  @include card-container();

  height: 100%;

  .LegendStickyChart {
    margin: 16px 0;
    position: relative;
    overflow: hidden;
    .scrollable {
      overflow-x: scroll;
      &::-webkit-scrollbar {
        height: 4px;
        background-color: rgba(0, 0, 0, 0.01);
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.07);
      }
    }
    .sticky-legend {
      position: absolute;
      top: 0;
      pointer-events: none;
    }
  }

  &-Header {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    padding: 0 10px;

    @include largerThan($medium) {
      padding: 0 5px;
    }

    @include largerThan($large) {
      width: 100%;
      flex-flow: row;
      flex-wrap: wrap;
      padding: 0;
    }
  }

  &-DataInfo {
    &-summary {
      color: $gray-2;
      font-family: Hiragino Sans, sans-serif;
      font-style: normal;
      line-height: 30px;
      white-space: nowrap;
      @include font-size(30);

      &-unit {
        width: 100%;
        @include font-size(10);
      }
    }

    &-date {
      line-height: 12px;
      color: $gray-3;
      width: 100%;
      display: inline-block;
      @include font-size(12);
    }
  }

  &-Inner {
    display: flex;
    flex-flow: column;
    padding: 22px;
    height: 100%;
  }

  &-Title {
    width: 100%;
    margin-bottom: 10px;
    line-height: 1.5;
    font-weight: normal;
    color: $gray-2;
    @include font-size(20);

    @include largerThan($large) {
      margin-bottom: 0;
      &.with-infoPanel {
        width: 50%;
      }
    }
  }

  &-CardText {
    margin: 16px 0;
  }

  &-Description {
    margin: 10px 0 0;
    color: $gray-3;
    @include font-size(12);

    ul,
    ol {
      list-style-type: none;
      padding: 0;
    }
  }

  &-Details {
    margin: 10px 0;

    .v-data-table .text-end {
      text-align: right;
    }
  }

  &-DetailsSummary {
    @include font-size(14);

    color: $gray-2;
    cursor: pointer;
  }

  &-CardTextForXS {
    margin-bottom: 46px;
    margin-top: 70px;
  }

  &-Embed {
    background-color: $gray-5;
  }

  &-Footer {
    @include font-size(12);

    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    color: $gray-3 !important;
    text-align: right;
    background-color: $white !important;

    .Permalink {
      color: $gray-3 !important;
    }

    .OpenDataLink {
      text-decoration: none;

      .ExternalLinkIcon {
        vertical-align: text-bottom;
      }
    }

    .Footer-Left {
      text-align: left;
    }

    .Footer-Right {
      display: flex;
      align-items: flex-end;
    }
  }
}

.v-expansion-panel-header__icon {
  margin-left: -5px !important;

  & .v-icon--left {
    margin-right: 5px;
  }

  .v-expansion-panel--active & .v-icon {
    transform: rotate(90deg) !important;
  }
}

.expansion-panel-text {
  color: $gray-1;
  @include font-size(14);
}
</style>
