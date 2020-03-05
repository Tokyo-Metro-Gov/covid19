<template>
  <data-view :title="title" :date="date">
    <img class="CardImg" :src="srcUrl" />
  </data-view>
</template>

<style lang="scss">
.CardImg {
  width: 100%;
}
</style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    srcUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
