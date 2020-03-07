<template>
  <div class="WhatsNew">
    <h2 class="WhatsNew-heading">
      <v-icon size="24" class="WhatsNew-heading-icon">
        mdi-information
      </v-icon>
      最新のお知らせ
    </h2>
    <ul style="">
      <li v-for="(item, i) in items" :key="i" class="WhatsNew-list">
        <a
          class="WhatsNew-list-item"
          :href="item.url"
          target="_blank"
          rel="noopener"
        >
          <time class="WhatsNew-list-item-time px-2">{{ item.date }}</time>
          <span class="WhatsNew-list-item-link">
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

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    }
  }
}
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();
  padding: 10px;
  margin-bottom: 20px;
}

.WhatsNew-heading {
  display: flex;
  align-items: center;
  @include card-h2();
  margin-bottom: 12px;
  color: $gray-2;
  margin-left: 12px;

  &-icon {
    margin: 3px;
  }
}

.WhatsNew ul {
  padding-left: 0px;
}

.WhatsNew-list {
  list-style-type: none;

  &-item {
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
</style>
