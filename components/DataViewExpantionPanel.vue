<template>
  <div>
    <v-expansion-panels v-if="showDetails" flat>
      <v-expansion-panel>
        <v-expansion-panel-header
          :hide-actions="true"
          :style="{ transition: 'none' }"
          @click="toggleDetails"
        >
          <div class="v-expansion-panel-header__icon">
            <v-icon left size="2.4rem">{{ mdiChevronRight }}</v-icon>
          </div>
          <span class="expansion-panel-text">{{ $t('テーブルを表示') }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <slot />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import { EventBus, TOGGLE_EVENT } from '@/utils/card-event-bus'

export default Vue.extend({
  data() {
    return {
      showDetails: false,
      mdiChevronRight,
    }
  },
  mounted() {
    this.showDetails = true
  },
  methods: {
    toggleDetails() {
      EventBus.$emit(TOGGLE_EVENT, { dataView: this.$parent })
    },
  },
})
</script>

<style lang="scss">
.v-expansion-panel-header__icon {
  margin-left: -5px !important;

  & .v-icon--left {
    margin-right: 5px;
  }

  .v-expansion-panel--active & .v-icon {
    transform: rotate(90deg) !important;
  }
}

.expansion-panel-text {
  color: $gray-1;
  @include font-size(14);
}
</style>
