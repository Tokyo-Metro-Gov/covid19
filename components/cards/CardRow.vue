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
}
type Data = {
  payload: Payload
}
type Methods = {
  handleCardHeight: () => void
  alignHeight: () => void
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
    }
  },
  methods: {
    handleCardHeight() {
      if (!this.payload.dataView) return

      const [self, side] = this.cardElements
      if (self) {
        self.style.height = ''
        self.dataset.height = `${self.offsetHeight}`
      }
      if (side) {
        side.style.height = ''
        side.dataset.height = `${side.offsetHeight}`
      }
    },
    alignHeight() {
      const [self, side] = this.cardElements

      if (!self || !side) return

      self.dataset.height = self.dataset.height || `${self.offsetHeight}`
      side.dataset.height = side.dataset.height || `${side.offsetHeight}`

      self.style.height =
        self.style.height === 'auto' ? `${self.dataset.height}px` : 'auto'
      side.style.height =
        side.style.height === 'auto' ? 'auto' : `${side.dataset.height}px`
    },
  },
  computed: {
    cardElements() {
      if (!this.payload.dataView) return [null, null]

      const cards = this.$el.children
      const self = this.payload.dataView.$el.parentElement
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
      this.alignHeight()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleCardHeight)
    EventBus.$off(TOGGLE_EVENT)
  },
}

export default Vue.extend(options)
</script>
