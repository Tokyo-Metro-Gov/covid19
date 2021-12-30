/* eslint-disable simple-import-sort/imports -- `@nuxt/types` import should occur after import of `path` */
import fs from 'fs'
import path from 'path'
import Vue, { defineNuxtConfig } from '@nuxt/bridge'
import defineConfig from '@vitejs/plugin-vue'
// eslint-disable-next-line no-restricted-imports
import i18n from './nuxt-i18n.config'
// @ts-ignore
import { Settings } from '@/types/cardRoutesSettings'
const environment = process.env['NODE_ENV'] || process.env['C'] || 'development'
const cardData = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, 'assets/json/cardRoutesSettings.json'),
    'utf8'
  )
)

const vite = defineConfig, {
  plugins: [
    {
      legacy: <default>{ Vue }</default>
    }
  ]
}

const config = defineNuxtConfig({
  // Since nuxt@2.14.5, there have been significant changes.
  // We dealt with typical two (2) out of them:
  // 1) The "mode:" directive got deprecated (seen right below);
  // 2) Autoprefixer has been included so that we can lessen upgrade burden.
  // mode: 'universal',
  target: 'static',
  components: true,
  vite: vite,
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
      src: '@/plugins/vue-chart',
      mode: 'server',
    },
    {
      src: '@/plugins/axe',
      mode: 'server',
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/vuetify',
    /* Went to webpack plugin area
    [
      '@nuxt/typescript-build',
      {
        ForkTsCheckerWebpackPlugin: {
          typescript: {
            config: {
              extensions: [
                'vue',
                'js',
                'jsx',
                'ts',
                'tsx',
                'sass',
                'scss',
                'json',
              ],
              memoryLimit: 2048,
            },
          },
        },
      },
    ],
    */
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
    id: process.env['GOOGLE_ANALYTICS_ID'], // .env.production などに設定してください。
  },
  /*
   ** @nuxtjs/gtm config
   */
  gtm: {
    id: process.env['GTM_CONTAINER_ID'],
    pageTracking: true,
    enabled: true,
  },
  build: {
    loaders: {
      scss: {
        sassOptions: {
          file: '@/assets/global.scss',
          additionalData: '@use "sass:math" as math;',
        },
      },
    },
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    },
    babel: {
      presets() {
        return [
          [
            '@babel/preset-typescript',
            {
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
    autoprefixer: {
      // Built-in since nuxt@2.14.5
      grid: 'autoplace',
    },
    extend(config) {
      // default externals option is undefined
      config = {
        externals: [{ moment: 'moment' }],
        plugins: [
          {
            'fork-ts-config-webpack-plugin': {
              typescript: {
                config: {
                  extensions: [
                    'vue',
                    'js',
                    'jsx',
                    'ts',
                    'tsx',
                    'sass',
                    'scss',
                    'json',
                  ],
                  memoryLimit: 4096,
                },
              },
            },
          },
          {
            'await-event-emitter': {
              EventEmitter: {
                defaultMaxListeners: 32,
              },
            },
          },
        ],
      }
    },
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    // hardSource: process.env.NODE_ENV === 'development'
  },
  purgeCSS: {
    paths: ['vuetify/dist/vuetify.js', 'vue-spinner/src/ScaleLoader.vue'],
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
    fallback: 'true',
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
})

export default config
