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

      <div class="DataView-Content">
        <slot />
      </div>

      <div class="DataView-Description">
        <slot name="additionalDescription" />
      </div>

      <data-view-table v-if="this.$slots.dataTable" class="DataView-Table">
        <slot name="dataTable" />
      </data-view-table>

      <div class="DataView-Space" />

      <div class="DataView-Footer">
        <div>
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
  height: 100%;
  @include card-container();

  &-Header {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    padding: 0 10px;

    @include largerThan($medium) {
      padding: 0 5px;
    }

    @include largerThan($large) {
      flex-flow: row;
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

  &-Content {
    margin: 16px 0;
  }

  &-Space {
    margin-top: 10px;
  }

  &-Description {
    margin-top: 10px;
    color: $gray-3;
    @include font-size(12);

    ul,
    ol {
      list-style-type: none;
      padding: 0;
    }
  }

  &-Table {
    margin: 10px 0;
  }

  &-Footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    color: $gray-3;
    @include font-size(12);

    .Permalink {
      color: $gray-3 !important;
    }

    .Footer-Right {
      display: flex;
      align-items: flex-end;
    }
  }

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
}
</style>
