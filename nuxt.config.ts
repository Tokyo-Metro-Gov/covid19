/* eslint-disable simple-import-sort/imports -- `@nuxt/types` import should occur after import of `path` */
import fs from 'fs'
import path from 'path'
import { NuxtConfig } from '@nuxt/types'
// eslint-disable-next-line no-restricted-imports
import i18n from './nuxt-i18n.config'
// @ts-ignore
import { Settings } from '@/types/cardRoutesSettings'
const environment = process.env.NODE_ENV || 'development'
const cardData = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, 'assets/json/cardRoutesSettings.json'),
    'utf8'
  )
)

const config: NuxtConfig = {
  // Since nuxt@2.14.5, there have been significant changes.
  // We dealt with typical two (2) out of them:
  // 1) The "mode:" directive got deprecated (seen right below);
  // 2) Autoprefixer has been included so that we can lessen upgrade burden.
  // mode: 'universal',
  target: 'static',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://stopcovid19.metro.tokyo.lg.jp',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@tokyo_bousai',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@tokyo_bousai',
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '2879625188795443',
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' },
    ],
    script: [
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
        defer: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.ts',
      ssr: true,
    },
    {
      src: '@/plugins/axe',
      ssr: true,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    [
      '@nuxt/typescript-build',
      {
        typeCheck: {
          async: true,
          typescript: {
            enable: true,
            memoryLimit: 4096,
          },
        },
      },
    ],
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
    'nuxt-purgecss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    ['@nuxtjs/i18n', i18n],
    'nuxt-svg-loader',
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }],
    'nuxt-webfontloader',
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    optionsPath: './plugins/vuetify.options.ts',
    treeShake: true,
    defaultAssets: false,
  },
  /*
   * Webfontloader
   * https://github.com/Developmint/nuxt-webfontloader
   */
  webfontloader: {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // .env.production などに設定してください。
  },
  /*
   ** @nuxtjs/gtm config
   */
  gtm: {
    id: process.env.GTM_CONTAINER_ID,
    pageTracking: true,
    enabled: true,
  },
  /*
   * nuxt-i18n による自動リダイレクトを停止したためコメントアウト
   * @todo 「Cookieがあるときのみ、その言語にリダイレクトする」を実装する場合は復活させる
   * 実装しない場合は以下の記述を完全に削除する
   */
  /* optionalCookies: [
    {
      name: 'i18n_redirected',
      label: 'i18n Redirection Cookie',
      description:
        'For automatically switching UI languages in accordance with locale preferences in the web browser configuration.',
      cookies: ['i18n_redirected']
    }
  ], */
  build: {
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    },
    babel: {
      presets() {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: '3.19' },
            },
          ],
        ]
      },
    },
    postcss: {
      preset: {
        autoprefixer: {
          // Built-in since nuxt@2.14.5
          grid: 'autoplace',
        },
      },
    },
    extend(config) {
      // default externals option is undefined
      config.externals = [{ moment: 'moment' }]
    },
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    // hardSource: process.env.NODE_ENV === 'development'
  },
  purgeCSS: {
    paths: [
      './node_modules/vuetify/dist/vuetify.js',
      './node_modules/vue-spinner/src/ScaleLoader.vue',
    ],
    whitelist: ['DataCard', 'GraphLegend'],
    whitelistPatterns: [/(col|row|v-window)/],
  },
  manifest: {
    name: '東京都 新型コロナウイルス感染症対策サイト',
    theme_color: '#00a040',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null,
  },
  generate: {
    fallback: true,
    routes() {
      const locales = ['en', 'zh-cn', 'zh-tw', 'ko', 'ja-basic']
      const pages = cardData.map((v: Settings) => {
        return v.path
      })
      const localizedPages = locales
        .map((locale) => pages.map((page: string) => `/${locale}${page}`))
        .reduce((a, b) => [...a, ...b], [])
      return [...pages, ...localizedPages]
    },
  },
  /*
   * PWA - Workbox configuration
   * https://pwa.nuxtjs.org/workbox
   */
  pwa: {
    workbox: {
      enabled: false,
    },
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true,
    },
  },
  router: {
    extendRoutes(routes) {
      routes.forEach((route) => {
        if (
          route.name === 'index' ||
          route.name === 'monitoring' ||
          route.name === 'reference'
        ) {
          route.meta = { tabs: true }
        }
      })
    },
  },
}

export default config
