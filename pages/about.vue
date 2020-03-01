<template>
  <div>
    <h1 class="About-Heading">
      このサイトについて
    </h1>
    <TextCard title="このサイトについて" />
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include card-h1();
  }
}
</style>
