<template>
  <div v-if="!hideCards" class="DataBlock">
    <v-lazy
      v-for="(row, i) in rows"
      :key="i"
      v-intersect="handler"
      v-scroll="onScroll"
      :value="actives[i]"
      :options="{ threshold: 0 }"
      min-height="600"
      min-width="50%"
    >
      <card-row v-if="actives[i]">
        <component :is="component" v-for="(component, j) in row" :key="j" />
      </card-row>
    </v-lazy>
  </div>
  <div v-else class="DataBlock">
    <custom-expansion-panel id="hide-cards">
      <template #icon>
        <v-icon size="2.4rem">{{ mdiChevronRight }}</v-icon>
      </template>
      <template #title>
        <span class="expansion-panel-text">
          {{ $t('更新を終了したグラフ') }}
        </span>
      </template>
      <template #content>
        <v-lazy
          v-for="(row, i) in rows"
          :key="i"
          v-intersect="handler"
          :value="actives[i]"
          :options="{ threshold: 0 }"
          min-height="600"
          min-width="50%"
        >
          <card-row v-if="actives[i]">
            <component :is="component" v-for="(component, j) in row" :key="j" />
          </card-row>
        </v-lazy>
      </template>
    </custom-expansion-panel>
  </div>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import CustomExpansionPanel from '@/components/_shared/CustomExpansionPanel.vue'
import CardRow from '@/components/index/_shared/CardRow.vue'

type Data = {
  actives: boolean[]
  scroll: boolean
  mdiChevronRight: string
}
type Methods = {
  handler: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    isIntersecting: boolean
  ) => void
  onScroll: () => void
}
type Computed = {}
type Props = {
  rows: Vue[][]
  hideCards: boolean
}
export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    CardRow,
    CustomExpansionPanel,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    hideCards: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      actives: Array.from({ length: this.rows.length }, () => false),
      scroll: false,
      mdiChevronRight,
    }
  },
  methods: {
    handler(_entries, _observer, isIntersecting) {
      if (!isIntersecting) return
      this.$set(this.actives, this.actives.indexOf(false), true)
    },
    onScroll() {
      if (this.scroll) return
      this.scroll = true
      this.$set(this.actives, 0, true)
      this.$set(this.actives, 1, true)
    },
  },
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin-top: 20px;

  .DataCard {
    margin: 8px 0;
  }
}

.expansion-panel-text {
  color: $gray-1;

  @include font-size(16);
}
</style>
