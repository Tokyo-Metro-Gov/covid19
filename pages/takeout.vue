<template>
  <div class="Takeout">
    <h2 class="Takeout-Heading">
      {{ $t('県内のテイクアウト情報') }}
    </h2>
    <TextCard v-for="(takeoutItem, i) in takeoutItems" :key="i">
      <h3 class="Takeout-Area-heading">
        {{ takeoutItem.title }}
      </h3>
      <ul class="Takeout-Area-list">
        <li
          v-for="(item, j) in takeoutItem.items"
          :key="j"
          class="Takeout-Area-list-item"
        >
          <span
            v-if="item.author !== null"
            class="Takeout-Area-list-item-anchor-author px-2"
          >
            {{ item.author }}
          </span>
          <a
            class="Takeout-Area-list-item-anchor"
            :href="item.url"
            target="_blank"
            rel="noopener"
          >
            <span class="Takeout-Area-list-item-anchor-link">
              {{ item.text }}
              <v-icon
                v-if="!isInternalLink(item.url)"
                class="Takeout-item-ExternalLinkIcon"
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
import TakeoutInfo from '@/data/takeout_info.json'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      takeoutItems: TakeoutInfo.takeoutItems
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    },
    head() {
      return {
        title: this.$t('県内のテイクアウト情報')
      }
    }
  }
}
</script>

<style lang="scss">
.Takeout {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  &-Area {
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

          &-author {
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
