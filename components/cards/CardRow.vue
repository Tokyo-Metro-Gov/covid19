<template>
  <v-row>
    <slot />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { EventBus, TOGGLE_EVENT } from '@/utils/details-event-bus'

const cardClassName = '.DataCard'

type Data = {
  payload: Payload | {}
}
type Methods = {
  handleCardHeight: () => void
  alignHeight: () => void
}
type Computed = {
  cardElements: (HTMLElement | null)[]
}
type Props = {}
type Payload = {
  dataView: Vue
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  data() {
    return {
      payload: {}
    }
  },
  methods: {
    handleCardHeight() {
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
        self.style.height === `auto` ? `${self.dataset.height}px` : 'auto'
      side.style.height =
        side.style.height === 'auto' ? 'auto' : `${side.dataset.height}px`
    }
  },
  computed: {
    cardElements() {
      const parent = this.$el.children
      const payload = this.payload as Payload
      const child = payload.dataView.$el.parentElement

      const index = Array.prototype.indexOf.call(parent, child) + 1
      const sideIndex = index % 2 === 0 ? index - 1 : index + 1

      const self = document.querySelector(
        `${cardClassName}:nth-child(${index}`
      ) as HTMLElement
      const side = document.querySelector(
        `${cardClassName}:nth-child(${sideIndex}`
      ) as HTMLElement
      return [self, side]
    }
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
  }
}

export default Vue.extend(options)
</script>
