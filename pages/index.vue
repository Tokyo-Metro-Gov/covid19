<template>
  <div>
    <site-top-upper />
    <v-lazy v-intersect="onIntersect">
      <lazy-cards-tab v-if="showCardsTab" />
    </v-lazy>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  showCardsTab: boolean
}
type Methods = {
  onIntersect: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    isIntersecting: boolean
  ) => void
}
type Computed = {}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  data() {
    return {
      showCardsTab: false,
    }
  },
  methods: {
    onIntersect(_entries, _observer, isIntersect) {
      if (isIntersect) this.showCardsTab = true
    },
  },
}

export default options
</script>
