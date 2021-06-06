import { NuxtConfig } from '@nuxt/types'

// eslint-disable-next-line no-restricted-imports
import i18n from './nuxt-i18n.config'
const environment = process.env.NODE_ENV || 'development'

const config: NuxtConfig = {
  // Since nuxt@2.14.5, there have been significant changes.
  // We dealt with typical two (2) out of them:
  // 1) The "mode:" directive got deprecated (seen right below);
  // 2) Autoprefixer has been included so that we can lessen upgrade burden.
  // mode: 'universal',
  target: 'static',
  components: [
    {
      path: '@/components/',
      extensions: ['vue'],
    },
    {
      path: '@/node_modules/vue-spinner/src/',
      pattern: 'ScaleLoader.vue',
    },
  ],
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
      src: '@/plugins/vue-chart',
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
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    'nuxt-svg-loader',
    'nuxt-webfontloader',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    ['nuxt-i18n', i18n],
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }],
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['@/assets/variables'],
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
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          // Built-in since nuxt@2.14.5
          grid: 'autoplace',
        },
      },
    },
    loaders: {
      sass: {
        sassOptions: {
          test: /\.(sa|s?c)ss$/,
          loader: 'regex-replace-loader',
          stages: [
            {
              // eslint-disable-next-line
              regex: '^@use[ ]+.sass:math.;?$',
              flags: 'g',
              value: '',
            },
            {
              // eslint-disable-next-line
              regex: '([$$0-9a-zA-Z_]+)[ ]*/[ ]*([$$0-9a-zA-Z_]+)',
              flags: 'g',
              value: 'div($1, $2)',
            },
          ],
        },
      },
      scss: {
        sassOptions: {
          additionalData: '@use "sass:math" as *;',
        },
      },
    },
    extend(config) {
      // default externals option is undefined
      config.externals = [
        {
          moment: 'moment',
        },
      ]
    },
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    // hardSource: process.env.NODE_ENV === 'development'
  },
  purgeCSS: {
    paths: [
      './node_modules/vuetify/dist/vuetify.js',
      './node_modules/vue-spinner/src/ScaleLoader.vue',
    ],
    whitelist: [
      'DataCard',
      'GraphLegend',
      'v-application',
      'v-application--wrap',
      'layout',
      'row',
      'col',
    ],
    whitelistPatterns: [
      /(col|row|v-window)/,
      /^v-((?!application).)*$/,
      /^theme--*/,
      /.*-transition/,
      /^justify-*/,
      /^p*-[0-9]/,
      /^m*-[0-9]/,
      /^text--*/,
      /--text$/,
      /^row-*/,
      /^col-*/,
      /^(blue|pink|lime|teal|purple|cyan|indigo|light-blue|orange|pink|amber|grey)$/,
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],
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
        '/cards/number-of-reports-to-tokyo-fever-consultation-center',
        '/cards/deaths-by-death-date',
        '/cards/variant',
        '/cards/vaccination',
      ]
      const localizedPages = locales
        .map((locale) => pages.map((page) => `/${locale}${page}`))
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
}

export default config
