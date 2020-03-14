<template>
  <div>
    <ul>
      <li v-for="item in legendData" :key="item.valueFrom">
        <span class="LegendBlock" :style="`background-color: ${item.color}`" />
        {{ `${item.valueFrom} 〜 ${item.valueTo}` }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.LegendBlock {
  width: 16px;
  height: 16px;
  display: inline-block;
}
</style>

<script>
export default {
  props: {
    legendData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
