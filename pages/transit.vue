<template>
  <div class="Transit">
    <h2 class="Transit-Heading">
      {{ $t('新型コロナウイルスの影響による公共交通機関への影響') }}
    </h2>
    <TextCard v-for="(transitItem, i) in transitItems" :key="i">
      <h3 class="Transit-Corp-heading">
        {{ transitItem.title }}
      </h3>
      <ul class="Transit-Corp-list">
        <li
          v-for="(item, j) in transitItem.items"
          :key="j"
          class="Transit-Corp-list-item"
        >
          <time
            v-if="item.date !== null"
            class="Transit-Corp-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ item.date }}
          </time>
          <a
            class="Transit-Corp-list-item-anchor"
            :href="item.url"
            target="_blank"
            rel="noopener"
          >
            <span class="Transit-Corp-list-item-anchor-link">
              {{ item.text }}
              <v-icon
                v-if="!isInternalLink(item.url)"
                class="Transit-item-ExternalLinkIcon"
                size="12"
              >
                mdi-open-in-new
              </v-icon>
            </span>
          </a>
        </li>
      </ul>
    </TextCard>
  </div>
</template>

<script>
import TextCard from '@/components/TextCard.vue'
import TransitInfo from '@/data/transit_info.json'
import { convertDateToISO8601Format } from '@/utils/formatDate'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      transitItems: TransitInfo.transitItems
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString) {
      return convertDateToISO8601Format(dateString)
    },
    head() {
      return {
        title: this.$t('新型コロナウイルスの影響による公共交通機関への影響')
      }
    }
  }
}
</script>

<style lang="scss">
.Transit {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  &-Corp {
    &-heading {
      display: flex;
      align-items: center;
      @include card-h2();
      margin-bottom: 12px;
      color: $gray-2;
      margin-left: 12px;
    }

    &-list {
      padding-left: 0px;
      list-style-type: none;

      &-item {
        &-anchor {
          display: inline-block;
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
        }
      }
    }
  }
  &-item-ExternalLinkIcon {
    margin-left: 2px;
    color: $gray-3 !important;
  }
}
</style>
