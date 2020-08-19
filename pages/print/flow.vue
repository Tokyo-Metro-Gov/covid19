<template>
  <flow />
</template>

<script>
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'
const Flow = () => import('@/pages/flow.vue')
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
