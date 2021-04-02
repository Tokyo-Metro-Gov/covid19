<template>
  <div class="StaticInfo">
    <span>{{ text }}</span>
    <div v-if="btnText" class="StaticInfo-Button">
      <app-link :to="url" class="StaticInfo">
        {{ btnText }}
      </app-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'

export default Vue.extend({
  components: { AppLink },
  props: {
    url: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.StaticInfo {
  @include card-container();

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  span {
    white-space: pre-wrap;
    font-weight: 600;
  }

  @include font-size(12);

  &-Button {
    flex: 1 0 auto;
    text-align: right;
    display: inline-block;

    > a {
      text-decoration: none;
      color: $green-1 !important;
      @include button-text('sm');

      &:hover {
        color: $white !important;
      }
    }

    @include lessThan($small) {
      margin-top: 4px;
    }
  }
}
</style>
