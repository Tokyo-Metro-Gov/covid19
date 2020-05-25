<template>
  <v-card class="DataView" :loading="loading">
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

      <data-view-table v-if="this.$slots.dataTable" class="DataView-Details">
        <slot name="dataTable" />
      </data-view-table>

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
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import DataViewTable from '@/components/DataViewTable.vue'
import DataViewShare from '@/components/DataViewShare.vue'

export default Vue.extend({
  components: { DataViewTable, DataViewShare },
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
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    },
    permalink(): string {
      const permalink = '/cards/' + this.titleId
      return this.localePath(permalink)
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
</style>
