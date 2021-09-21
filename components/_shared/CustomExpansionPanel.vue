<template>
  <div>
    <button
      type="button"
      class="custom-expansion-panel-button"
      :aria-expanded="`${isOpen}`"
      :aria-controls="`${id}-content`"
      @click="clickButton"
    >
      <span
        class="custom-expansion-panel-icon"
        :class="{ 'with-content-open': isOpen }"
      >
        <slot name="icon" />
      </span>
      <slot name="title" />
    </button>
    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div
        v-show="isOpen"
        :id="`${id}-content`"
        class="custom-expansion-panel-content"
      >
        <div class="custom-expansion-panel-content__wrap">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    this.isOpen = this.$props.defaultOpen
  },
  methods: {
    clickButton($event) {
      this.isOpen = !this.isOpen
      this.$emit('click', $event)
    },
    enter(element: Element) {
      element.style.width = getComputedStyle(element).width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = getComputedStyle(element).height

      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      requestAnimationFrame(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
    leave(element) {
      element.style.height = getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = 0
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.2s ease;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
.custom-expansion-panel-button {
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 0;
  margin-bottom: 4px;
}
.custom-expansion-panel-icon {
  display: inline-block;
  margin-right: 4px;
  transform: rotate(0);
  transition: all 0.2s;
  &.with-content-open {
    transform: rotate(90deg);
  }
}
.custom-expansion-panel-content {
  display: flex;
  &__wrap {
    flex: 1 1 auto;
    max-width: 100%;
  }
}
</style>
