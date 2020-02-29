<template>
<data-view :title="title">
  {{ `${number} ${unit}` }}
</data-view>
</template>

<style>
</style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: ['title', 'number', 'unit']
}
</script>
