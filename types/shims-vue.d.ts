import Vue from 'vue'
import { NuxtI18nSeo } from 'nuxt-i18n/types/nuxt-i18n'

declare module 'vue/types/vue' {
  interface Vue {
    $nuxtI18nSeo(): NuxtI18nSeo
    $style: { [key: string]: string }
  }
}
