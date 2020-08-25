import { NuxtConfig } from '@nuxt/types'
import i18n from './nuxt-i18n.config'
const environment = process.env.NODE_ENV || 'development'
// import zlib from 'zlib'

const config: NuxtConfig = {
  mode: 'universal',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
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
    {
      src: '@/plugins/vuetify.ts',
      ssr: true,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    // 通常は dotenv-expand を使用する（nuxt）。process.env は引き続き使用可能。(Aug. 2020)
    // ['@nuxtjs/dotenv', { filename: `.env.${environment}`, }],
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    ['nuxt-i18n', i18n],
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }],
    // 'nuxt-purgecss',
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      icons: {
        iconFont: 'mdiSvg',
      },
    },
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // .env.production などに設定してください。
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
    postcss: {
      plugins: {
        autoprefixer: {
          grid: 'autoplace',
        },
      },
    },
    extend(config) {
      // default externals option is undefined
      config.externals = {
        moment: 'moment',
      }
    },
  },
  purgeCSS: {
    mode: 'postcss',
    options: {
      dev: environment.includes('dev'),
    },
    plugins: [
      'nuxt-purgecss',
      {
        content: [
          '@/pages/**/*.vue',
          '@/layouts/**/*.vue',
          '@/components/**/*.vue',
          'vuetify/dist/vuetify.js',
          'vue-spinner/src/ScaleLoader.vue',
        ],
        whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
        whitelistPatterns: [/(col|row)/],
      },
    ],
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
      const pages = [
        '/cards/details-of-confirmed-cases',
        '/cards/number-of-confirmed-cases',
        '/cards/number-of-confirmed-cases-by-municipalities',
        '/cards/attributes-of-confirmed-cases',
        '/cards/number-of-tested',
        '/cards/number-of-reports-to-covid19-telephone-advisory-center',
        '/cards/predicted-number-of-toei-subway-passengers',
        '/cards/agency',
        '/cards/positive-rate',
        '/cards/positive-number-by-diagnosed-date',
        '/cards/monitoring-number-of-confirmed-cases',
        '/cards/untracked-rate',
        '/cards/positive-status-severe-case',
        '/cards/number-of-hospitalized',
        '/cards/monitoring-number-of-reports-to-covid19-consultation-desk',
        '/cards/monitoring-status-overview',
        '/cards/number-of-reports-to-consultations-about-fever-in-7119',
        '/cards/number-of-tokyo-rules-applied',
        '/cards/monitoring-items-overview',
        '/cards/positive-number-by-developed-date',
      ]
      const localizedPages = locales
        .map((locale) => pages.map((page) => `/${locale}${page}`))
        .reduce((a, b) => [...a, ...b], [])
      return [...pages, ...localizedPages]
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
  /*
  render: {
    compressor: {
      gzip:{
        cache: true,
      },
      brotli: {
        threshold: 10240,
      },
      algorithm(
        buf: zlib.InputType,
        options: zlib.BrotliOptions,
        callback: zlib.CompressCallback,
      ) {
        return zlib.brotliCompress (buf, options, callback, )
      },
      test: /\.(ts|js|json|css|vue|html?|png|jpe?g|gif|svg|eot|ttf|woff2?|pdf|txt|csv|xlsx?)/i,
    },
  },
  */
}

export default config
