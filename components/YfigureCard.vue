<template>
  <div>
    <StaticCard>
      <h3>{{ $t(title) }}</h3>
      <div class="y-figure">
        <img :src="imagePath" alt="" />
      </div>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    StaticCard
  },
  props: {
    imagePath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
.y-figure {
  margin: 0 20px;
  text-align: center;
  img {
    width: 50rem;
  }
}
</style>
