<template>
  <div>
    <custom-expansion-panel v-if="showDetails" :id="id" @click="toggleDetails">
      <template #icon>
        <v-icon size="2.4rem">{{ mdiChevronRight }}</v-icon>
      </template>
      <template #title>
        <span class="expansion-panel-text">{{ $t('テーブルを表示') }}</span>
      </template>
      <template #content>
        <slot />
      </template>
    </custom-expansion-panel>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import CustomExpansionPanel from '@/components/_shared/CustomExpansionPanel.vue'
import { EventBus, TOGGLE_EVENT } from '@/utils/card-event-bus'

export default Vue.extend({
  components: { CustomExpansionPanel },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
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
      EventBus.$emit(TOGGLE_EVENT, {
        dataView: this.$parent.$el,
        item: 'details',
      })
    },
  },
})
</script>

<style lang="scss">
.expansion-panel-text {
  color: $gray-1;
  @include font-size(14);
}
</style>
