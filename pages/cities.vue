<template>
  <div class="Cities">
    <h2 class="Cities-Heading">
      {{ $t('新潟県内 各市町村のコロナウイルス感染症情報') }}
    </h2>
    <TextCard v-for="(citiesItem, i) in citiesItems" :key="i">
      <ul class="Cities-Corp-list">
        <a
          class="Cities-Corp-list-citiesItem-anchor"
          :href="citiesItem.url"
          target="_blank"
          rel="noopener"
        >
          <span class="Cities-Corp-list-citiesItem-anchor-link">
            {{ citiesItem.text }}
            <v-icon
              v-if="!isInternalLink(citiesItem.url)"
              class="Cities-citiesItem-ExternalLinkIcon"
              size="12"
            >
              mdi-open-in-new
            </v-icon>
          </span>
        </a>
      </ul>
    </TextCard>
  </div>
</template>

<script>
import TextCard from '@/components/TextCard.vue'
import CitiesItem from '@/data/cities_item.json'
import { convertDateToISO8601Format } from '@/utils/formatDate'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      citiesItems: CitiesItem.citiesItems
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
        title: this.$t('新潟県内 各市町村のコロナウイルス感染症情報')
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
