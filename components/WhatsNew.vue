<template>
  <div class="WhatsNew" :class="{ expanded }">
    <div class="WhatsNew-wrapper">
      <div class="WhatsNew-head">
        <div>
          <h3 class="WhatsNew-heading">
            <v-icon size="24" class="WhatsNew-heading-icon">
              mdi-information
            </v-icon>
            最新のお知らせ
          </h3>
          <div>
            <nuxt-link class="WhatsNew-archive" :to="localePath('/news')">
              {{ $t('過去のお知らせを見る') }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <ul class="WhatsNew-list">
        <li v-for="(item, i) in items" :key="i" class="WhatsNew-list-item">
          <a
            class="WhatsNew-list-item-anchor"
            :href="item.link"
            target="_blank"
            rel="noopener"
          >
            <time
              class="WhatsNew-list-item-anchor-time px-2"
              :datetime="item.date"
            >
              {{ item.date | convertDateToDisplayText }}
            </time>
            <span class="WhatsNew-list-item-anchor-link">
              {{ item.title }}
              <v-icon
                v-if="!isInternalLink(item.link)"
                class="WhatsNew-item-ExternalLinkIcon"
                size="12"
                aria-label="別タブで開く"
                role="img"
                :aria-hidden="false"
              >
                mdi-open-in-new
              </v-icon>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { convertDateToDisplayText } from '@/utils/formatDate'
import { NewsItem } from '@/tool/news-updater/types'

export default Vue.extend({
  filters: {
    convertDateToDisplayText
  },
  data: () => ({ expanded: false }),
  props: {
    items: {
      type: Array,
      required: true
    } as PropOptions<NewsItem[]>
  },
  methods: {
    isInternalLink(path: string) {
      return !/^https?:\/\//.test(path)
    }
  }
})
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();
  margin-bottom: 20px;
  &-wrapper {
    padding: 10px;
    position: relative;
  }
}

.WhatsNew-heading {
  display: flex;
  align-items: center;
  @include card-h2();
  color: $gray-2;

  &-icon {
    margin: 3px;
  }
}

.WhatsNew-head {
  overflow: hidden;
  margin-bottom: 12px;
  margin-left: 12px;

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(6px / 2 * -1);
  }

  & > * > * {
    margin: calc(6px / 2);
    flex-grow: 1;
  }

  & > * > :first-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - 6px);
  }
}

.WhatsNew .WhatsNew-list {
  padding-left: 0px;
  list-style-type: none;

  &-item {
    &-anchor {
      display: flex;
      text-decoration: none;
      margin: 5px;
      font-size: 14px;

      @include lessThan($medium) {
        flex-wrap: wrap;
      }

      &-time {
        flex: 0 0 90px;
        @include lessThan($medium) {
          flex: 0 0 100%;
        }
        color: $gray-1;
      }

      &-link {
        flex: 0 1 auto;
        @include text-link();
        @include lessThan($medium) {
          padding-left: 8px;
        }
      }

      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $gray-3 !important;
      }
    }
  }
}

.v-application .WhatsNew-archive {
  @include button-text('md');
  padding: 3px 12px;
  color: $green-1;
  text-decoration: none;
  display: inline-block;
}
</style>
