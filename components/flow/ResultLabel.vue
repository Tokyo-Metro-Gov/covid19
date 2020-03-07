<template>
  <div :class="[$style.ResultLabel, { [$style.positive]: isPositive }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isPositive: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style module lang="scss">
.ResultLabel {
  @include font-size(20);
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid $green-1;
  line-height: 1;
  padding: 0.7em 0;

  &.positive {
    background: $green-1;
    color: $white;
  }
}
</style>
