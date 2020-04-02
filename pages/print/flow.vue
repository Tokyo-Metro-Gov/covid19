<template>
  <flow-print />
</template>

<script>
import FlowPrint from '@/components/flow/FlowPrint.vue'
export default {
  components: {
    FlowPrint
  },
  layout: 'print',
  head() {
    return {
      title: this.$t('新型コロナウイルス感染症にかかる相談窓口について')
    }
  }
}
</script>
