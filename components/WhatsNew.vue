<template>
  <div class="WhatsNew">
    <div class="WhatsNew-heading">
      <h3 class="WhatsNew-title">
        <v-icon size="24" class="WhatsNew-title-icon">
          mdi-information
        </v-icon>
        {{ $t('最新のお知らせ') }}
      </h3>
      <span class="WhatsNew-link-to-emergency-page">
        <v-icon size="20" class="WhatsNew-link-to-emergency-page-icon">
          mdi-bullhorn
        </v-icon>
        <external-link
          url="https://www.bousai.metro.tokyo.lg.jp/1007617/index.html"
        >
          {{ $t('東京都緊急事態措置について') }}
        </external-link>
      </span>
    </div>
    <ul class="WhatsNew-list">
      <li v-for="(item, i) in items" :key="i" class="WhatsNew-list-item">
        <a
          class="WhatsNew-list-item-anchor"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time
            class="WhatsNew-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ formattedDateForDisplay(item.date) }}
          </time>
          <span class="WhatsNew-list-item-anchor-link">
            {{ item.text }}
            <v-icon
              v-if="!isInternalLink(item.url)"
              class="WhatsNew-item-ExternalLinkIcon"
              size="12"
            >
              mdi-open-in-new
            </v-icon>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '@/components/ExternalLink.vue'

import {
  convertDateByCountryPreferTimeFormat,
  convertDateToISO8601Format
} from '@/utils/formatDate'

export default Vue.extend({
  components: { ExternalLink },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    },
    formattedDateForDisplay(dateString: string) {
      return convertDateByCountryPreferTimeFormat(dateString, this.$i18n.locale)
    }
  }
})
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .WhatsNew-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .WhatsNew-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .WhatsNew-link-to-emergency-page {
      background-color: $emergency;
      border: 2px solid $emergency;
      color: $gray-2;
      border-radius: 4px;
      font-size: 1rem;
      padding: 4px 8px;

      &:hover {
        background-color: $white;
        border-radius: 4px;
      }

      .ExternalLink {
        color: $gray-2 !important;
        text-decoration: none;
      }

      > span {
        @include button-text('sm');
      }

      @include lessThan($small) {
        margin-top: 4px;
      }
    }
  }

  .WhatsNew-list {
    padding-left: 0;
    list-style-type: none;

    &-item {
      &-anchor {
        text-decoration: none;
        margin: 5px;
        font-size: 14px;

        @include lessThan($medium) {
          display: flex;
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
}
</style>
