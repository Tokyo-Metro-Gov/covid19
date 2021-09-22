<template>
  <v-row>
    <slot />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import { EventBus, TOGGLE_EVENT } from '@/utils/card-event-bus'

const cardClassName = '.DataCard'

type Payload = {
  dataView?: Vue
  item: string
}
type Data = {
  payload: Payload
  item: string
  className: string
}
type Methods = {
  handleCardHeight: () => void
  alignHeight: (item: string) => void
}
type Computed = {
  cardElements: (HTMLElement | null)[]
}
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
      payload: {},
      item: '',
      className: '',
    }
  },
  methods: {
    handleCardHeight() {
      if (!this.payload.dataView) return

      const [self, side] = this.cardElements
      if (self) {
        self.style.maxHeight = ''
        self.dataset.height = `${self.offsetHeight}`
      }
      if (side) {
        side.style.maxHeight = ''
        side.dataset.height = `${side.offsetHeight}`
      }
    },
    alignHeight(item: string) {
      const [self, side] = this.cardElements

      if (!self || !side) return

      const selfHeight = self.dataset.height || `${self.offsetHeight}`
      const sideHeight = side.dataset.height || `${side.offsetHeight}`

      self.style.maxHeight =
        self.style.maxHeight === '100%' &&
        this.item !== item &&
        this.className !== self.className
          ? `${selfHeight}px`
          : '100%'
      side.style.maxHeight =
        side.style.maxHeight === '100%' &&
        this.item !== item &&
        this.className !== self.className
          ? '100%'
          : `${sideHeight}px`

      this.item = item
      this.className = self.className
    },
  },
  computed: {
    cardElements() {
      if (!this.payload.dataView) return [null, null]

      const cards = this.$el.children
      const self = this.payload.dataView.parentElement
      const index = Array.prototype.indexOf.call(cards, self) + 1
      if (index === 0) return [null, null]

      const sideIndex = index % 2 === 0 ? index - 1 : index + 1
      const side = this.$el.querySelector(
        `${cardClassName}:nth-child(${sideIndex}`
      ) as HTMLElement
      return [self, side]
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleCardHeight)
    EventBus.$on(TOGGLE_EVENT, (payload: Payload) => {
      this.payload = payload
      this.alignHeight(this.payload.item)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleCardHeight)
    EventBus.$off(TOGGLE_EVENT)
  },
}

export default Vue.extend(options)
</script>

<style lang="scss">
.DataCard {
  transition: max-height 0.3s;
}
</style>
