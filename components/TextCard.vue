<template>
  <div class="TextCard">
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class TextCard extends Vue {
  @Prop({
    required: true
  })
  title!: string
}
</script>

<style lang="scss">
.TextCard {
  @include card-container();
}
</style>
