<template>
  <data-view :title="title">
    <div style="text-align: center;">
      <span class="TheNumber">
        {{ `${number}` }}
      </span>
      <span class="TheUnit">
        {{ `${unit}` }}
      </span>
    </div>
  </data-view>
</template>

<style lang="scss" scoped>
.TheNumber {
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 90px;
  /* identical to box height */

  text-align: center;
  color: $gray-2;
}
.TheUnit {
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 90px;
  /* identical to box height */

  text-align: center;
  color: $gray-2;
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'

export default Vue.extend({
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    number: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    }
  }
})
</script>
