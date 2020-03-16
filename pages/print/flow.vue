<template>
  <flow-pc />
</template>

<script>
import FlowPc from '@/components/flow/FlowPc.vue'
export default {
  components: {
    FlowPc
  },
  layout: 'print',
  head() {
    return {
      title: this.$t('新型コロナウイルス感染症にかかる相談窓口について')
    }
  }
}
</script>
