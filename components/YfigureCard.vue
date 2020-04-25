<template>
  <div>
    <StaticCard>
      <h3>{{ $t('緊急事態宣言について') }}</h3>
      <div class="y-figure">
        <img src="/y_figures/covid19_1.png" alt="" />
      </div>
    </StaticCard>
    <StaticCard>
      <h3>
        {{ $t('新型コロナウイルスの感染が疑われる人がいる場合の注意点') }}
      </h3>
      <div class="y-figure">
        <img src="/y_figures/covid19_3.png" alt="" />
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
