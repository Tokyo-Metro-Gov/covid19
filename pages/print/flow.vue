<template>
  <flow />
</template>

<script>
import Flow from '@/pages/flow.vue'
export default {
  components: {
    Flow
  },
  layout: 'print',
  head() {
    return {
      title: this.$t('新型コロナウイルス感染症にかかる相談窓口について')
    }
  }
}
</script>
