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

<style>
.TheNumber {
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 90px;
  /* identical to box height */

  text-align: center;

  /* gray/2 */

  color: #4d4d4d;
}
.TheUnit {
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 90px;
  /* identical to box height */

  text-align: center;

  /* gray/2 */

  color: #4d4d4d;
}
</style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: ['title', 'number', 'unit']
}
</script>
