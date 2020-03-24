<template>
  <div>
    <ul class="clearfix">
      <li v-for="item in legendData" :key="item.valueFrom">
        <span
          class="LegendBlock"
          :style="
            `background-color: ${item.color}; border: 1px solid ${item.borderColor}`
          "
        />
        {{ `${item.valueFrom}〜${item.valueTo !== null ? item.valueTo : ''}` }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.LegendBlock {
  width: 16px;
  height: 16px;
  display: inline-block;
  opacity: 0.5;
}
li {
  list-style: none;
  float: left;
  font-size: 14px;
  padding-right: 4px;
}
li:last-child {
  padding-right: 0;
}
ul {
  margin: 0;
  padding: 0;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
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
