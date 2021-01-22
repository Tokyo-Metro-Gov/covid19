<template>
  <flow />
</template>

<script>
import Flow from '@/pages/flow.vue'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'
export default {
  components: {
    Flow,
  },
  layout: 'print',
  head() {
    return {
      title: this.$t('新型コロナウイルス感染症にかかる相談窓口について'),
      link: [
        ...getLinksLanguageAlternative(
          'print/flow',
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ),
      ],
    }
  },
}
</script>
