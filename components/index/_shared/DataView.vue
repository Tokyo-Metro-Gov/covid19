<template>
  <v-card class="DataView">
    <div class="DataView-Inner">
      <div
        class="DataView-Header"
        :class="{
          'with-dataSetPanel': !!$slots.dataSetPanel,
          'title-row': isSetTitleRow,
        }"
      >
        <h3
          class="DataView-Title"
          :class="
            !!$slots.infoPanel
              ? 'with-infoPanel'
              : !!$slots.dataSetPanel
              ? 'with-dataSetPanel'
              : ''
          "
        >
          {{ title }}
        </h3>
        <div v-if="!!$slots.infoPanel" class="DataView-InfoPanel">
          <slot name="infoPanel" />
        </div>
        <div v-if="!!$slots.dataSetPanel" class="DataView-DataSetPanel">
          <slot name="dataSetPanel" />
        </div>
      </div>

      <div v-if="$slots.attentionNote" class="DataView-AttentionNote">
        <slot name="attentionNote" />
      </div>

      <div v-if="$slots.description" class="DataView-Description">
        <slot name="description" />
      </div>

      <div>
        <slot name="button" />
      </div>

      <div class="DataView-Content">
        <slot />
      </div>

      <div
        :id="titleId + '--description'"
        ref="Description"
        class="DataView-Description"
        :class="{
          'DataView-Description--Minimized-Additional':
            !isAdditionalDescriptionExpanded && !isAlreadyShowingDescription,
        }"
      >
        <div class="DataView-Description--Inner">
          <slot name="additionalDescription" />
        </div>

        <button
          v-if="
            $slots.additionalDescription &&
            !$route.params.card &&
            !isAlreadyShowingDescription
          "
          :class="[
            'DataView-Description--Toggle',
            isAdditionalDescriptionExpanded ? 'expand' : '',
          ]"
          :aria-expanded="[isAdditionalDescriptionExpanded ? true : false]"
          :aria-controls="titleId + '--description'"
          @click="toggleDescription"
        >
          <span class="DataView-Description--Toggle__Icon">
            <v-icon
              :style="{
                transform: isAdditionalDescriptionExpanded
                  ? 'rotate(-90deg)'
                  : 'none',
              }"
              size="2.4rem"
              >{{ mdiChevronRight }}</v-icon
            >
          </span>
          <span
            v-if="isAdditionalDescriptionExpanded"
            class="DataView-Description--Toggle__Text"
          >
            {{ $t('注釈を折り畳む') }}
          </span>
          <span v-else class="DataView-Description--Toggle__Text">
            {{ $t('注釈を全て表示') }}
          </span>
        </button>
      </div>

      <expantion-panel
        v-if="$slots.dataTable"
        :id="titleId"
        class="DataView-ExpantionPanel"
      >
        <slot name="dataTable" />
      </expantion-panel>

      <div class="DataView-Space" />

      <div class="DataView-Footer">
        <div>
          <slot name="footer" />
          <div>
            <app-link class="Permalink" :to="permalink">
              <time :datetime="formattedDate">
                {{ $t('{date} 更新', { date: formattedDateForDisplay }) }}
              </time>
            </app-link>
          </div>
        </div>

        <share
          v-if="$route.query.embed !== 'true'"
          :title="title"
          :title-id="titleId"
          class="Footer-Right"
        />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import ExpantionPanel from '@/components/index/_shared/DataView/ExpantionPanel.vue'
import Share from '@/components/index/_shared/DataView/Share.vue'
import { EventBus, TOGGLE_EVENT } from '@/utils/card-event-bus'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: { ExpantionPanel, Share, AppLink },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    headTitle: {
      type: String,
      default: '',
    },
    isSetTitleRow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mdiChevronRight,
      isAdditionalDescriptionExpanded: !!this.$route.params.card,
      isAlreadyShowingDescription: true,
    }
  },
  head(): MetaInfo {
    // カードの個別ページの場合は、タイトルと更新時刻を`page/cards/_card`に渡す
    if (!this.$route.params.card) return {}

    return {
      title: this.headTitle ? this.headTitle : this.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.headTitle ? this.headTitle : this.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.formattedDateForDisplay,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.formattedDateForDisplay,
        },
      ],
    }
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    },
    formattedDateForDisplay(): string {
      return this.date !== '' ? this.$d(new Date(this.date), 'dateTime') : ''
    },
    permalink(): string {
      const permalink = `/cards/${this.titleId}`
      return this.localePath(permalink)
    },
  },
  mounted() {
    const $Description = this.$refs.Description as HTMLElement
    this.isAlreadyShowingDescription = $Description.clientHeight <= 70
  },
  methods: {
    toggleDescription() {
      this.isAdditionalDescriptionExpanded =
        !this.isAdditionalDescriptionExpanded
      EventBus.$emit(TOGGLE_EVENT, {
        dataView: this.$el,
        item: 'description',
      })
    },
  },
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

      &.title-row {
        justify-content: space-between;
        flex-flow: row;
      }
    }

    @include largerThan($large) {
      justify-content: space-between;
      flex-flow: row;
      padding: 0;

      &.with-dataSetPanel {
        flex-flow: column;
      }
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

    &.with-dataSetPanel {
      margin-bottom: 0;
    }

    @include largerThan($large) {
      margin-bottom: 0;

      &.with-infoPanel {
        flex: 1 1 50%;
        margin-right: 24px;
      }
    }

    span {
      display: inline-block;
    }
  }

  &-InfoPanel {
    flex: 1 1 50%;
  }

  &-DataSetPanel {
    flex: 1 0 auto;
    width: 100%;
  }

  &-Content {
    margin: 16px 0;
  }

  &-Space {
    margin-top: 10px;
  }

  &-Description {
    position: relative;
    margin: 10px 0;
    color: $gray-3;

    @include font-size(12);

    ul,
    ol {
      list-style: disc inside;
      padding-left: 1em;

      li {
        margin-left: 1.5em;
        text-indent: -1.5em;
      }
    }

    .ListStyleNone {
      list-style: none;
      padding-left: 0;

      li {
        margin-left: 0;
        text-indent: 0;
      }
    }

    &--Inner {
      padding: 4px 4px 20px;
    }

    &--Minimized-Additional {
      position: relative;
      height: 100px;
      overflow: hidden;

      &::after {
        position: absolute;
        z-index: 1;
        bottom: 0;
        content: '';
        display: block;
        width: 100%;
        height: 70px;
        background: linear-gradient(
          to bottom,
          rgba(250, 252, 252, 0) 0%,
          rgba(255, 255, 255, 1) 80%
        );
      }
    }

    &--Toggle {
      position: absolute;
      z-index: 2;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      display: inline-flex;
      align-items: center;
      border-radius: 4px;
      padding: 5px 8px;
      background-color: $gray-3;
      align-self: center;
      cursor: pointer;
      outline-offset: 2px;

      &.expand {
        position: relative;
      }

      &__Icon {
        margin-left: -5px;

        .v-icon {
          color: $white;
        }
      }

      &__Text {
        color: $white;

        @include font-size(14);
      }
    }
  }

  &-Details {
    margin: 10px 0;

    .v-data-table {
      .text-end {
        text-align: right;
      }

      .text-nowrap {
        white-space: nowrap;
      }
    }
  }

  &-ExpantionPanel {
    margin-bottom: 10px;
  }

  &-Footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    color: $gray-3;

    @include font-size(12);

    ul,
    ol {
      list-style-type: none;
      padding: 0;
    }

    .Permalink {
      color: $gray-3 !important;
    }

    .Footer-Right {
      display: flex;
      align-items: flex-end;
    }
  }

  &-AttentionNote {
    margin: 10px 0;
    padding: 12px;
    background-color: $notice;
    border-radius: 4px;
    color: $gray-2;

    @include font-size(12);

    p {
      margin: 0;
    }
  }
}
</style>
