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
      <card-row v-show="actives[i]">
        <component :is="component" v-for="(component, j) in row" :key="j" />
      </card-row>
    </v-lazy>
  </div>
  <div v-else class="DataBlock">
    <v-expansion-panels flat>
      <v-expansion-panel class="expansion-panel">
        <v-expansion-panel-header
          :hide-actions="true"
          :style="{ transition: 'none' }"
        >
          <div class="v-expansion-panel-header__icon">
            <v-icon left size="2.4rem">{{ mdiChevronRight }}</v-icon>
          </div>
          <span class="expansion-panel-text">{{
            $t('更新を終了したグラフ')
          }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
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
              <component
                :is="component"
                v-for="(component, j) in row"
                :key="j"
              />
            </card-row>
          </v-lazy>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import { NuxtAppOptions, NuxtConfig } from '@nuxt/types'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import CardRow from '@/components/index/_shared/CardRow.vue'

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
type Methods = {
  handler: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    isIntersecting: boolean
  ) => void
  onScroll: () => void
}

@Component({
  components: {
    CardRow,
    mdiChevronRight,
  },
})
export default class CardsLazyRow
  extends Vue
  implements NuxtConfig, NuxtAppOptions
{
  @Prop({ type: Array as T, required: true }) rows: ArrayLike<T>

  @Prop({
    default() {
      const CardRow = () => this.CardRow
      return Array(CardRow as Vue[]).flatMap((row) =>
        row.length > 0 ? [true] : [false]
      )
    },
  })
  actives: Array

  @Prop({ default: false }) hideCards: Boolean

  handler(_entries, _observer, isIntersecting) {
    if (isIntersecting) {
      this.$set(this.actives, this.actives.indexOf(false), true)
    }
  }

  onScroll() {
    this.$set(this.actives, 0, true)
    this.$set(this.actives, 1, true)
  }
}
</script>

<style lang="scss" scoped>
.DataBlock {
  margin-top: 20px;

  .DataCard {
    margin: 8px 0;
  }
}

.expansion-panel {
  background-color: transparent !important;
}

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
  @include font-size(16);
}
</style>
