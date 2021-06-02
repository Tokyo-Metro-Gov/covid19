import NuxtI18nHeadOptions from 'nuxt-i18n'

declare module 'vue/types/vue' {
  interface Vue {
    $nuxtI18nHead(): typeof NuxtI18nHeadOptions
    $style: { [key: string]: string }
  }
}
