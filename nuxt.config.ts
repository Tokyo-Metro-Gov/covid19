/* eslint-disable simple-import-sort/imports -- `@nuxt/types` import should occur after import of `path` */
import 'regenerator-runtime/runtime'
import 'core-js/stable'
import fs, {
  readFileSync /* eslint-disable-line @typescript-eslint/no-unused-vars */,
} from 'fs'
import path, {
  resolve /* eslint-disable-line @typescript-eslint/no-unused-vars */,
} from 'path'
import { NuxtConfig } from '@nuxt/types'
import i18n from './nuxt-i18n.config' /* eslint-disable-line no-restricted-imports */
// @ts-ignore
import { Settings } from '@/types/cardRoutesSettings'
import __webpack_require__ from  'webpack' /* eslint-disable-line no-restricted-imports */
const environment = process.env.NODE_ENV || 'development'
const cardData = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, 'assets/json/cardRoutesSettings.json'),
    'utf8'
  )
)

const options: NuxtConfig = {
  target: 'static',
  components: true,
  moduleId: 'covid19',
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
      {
        name: 'tabs',
        content: 'no',
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
  ** Global CSS/SCSS/SASS
  */
  styleResources: {
    css: [
      '~/assets/global.scss',
      '~/assets/_variables.scss',
      '~/assets/_monitoringItemsTableCommon.scss',
    ],
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
    '@nuxtjs/pwa',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    'nuxt-svg-loader',
    'nuxt-webfontloader',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    ['@nuxtjs/i18n', i18n],
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }],
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['@/assets/_variables'],
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
    loaders: {
      sass: {
        sassOptions:{
          test: /^[^(vuetify)]*\.(s[ac]ss|vue)$/i,
          use: [
            'vue-loader',
            'stylus-loader',
            'css-loader',
            'sass-loader',
            {
              sassOptions: {
                prependData: [ 
                  '@use "~assets/variables"',
                  '@use "~assets/global"',
                ],
                hoistUseStatements: true,
              },
            },
          ],
          define: function (moduleId: string) {
            return { 
              moduleId: 'covid19',
              target: 'node',
              __webpack_require__ () {},
              function () {},
            }
          },
        },
      },
    },
    babel: {
      presets() {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: {
                version: 3,
                useBuiltins: 'entry',
              },
            },
          ],
        ]
      },
    },
    postcss: {
      preset: {
        autoprefixer: {
          grid: 'autoplace',
        },
      },
    },
    extend(config) {
      // default externals option is undefined
      config.externals = [{ moment: 'moment' }]
      config.output = {
        hashFunction: 'rmd160',
      }
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
    scope: '/',
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
    extendRoutes(routes: any) {
      routes.forEach((route: any) => {
        return (route.meta = {
          tabs: {
            type: Boolean,
            default:
              route.name === 'index' ||
              route.name === 'monitoring' ||
              route.name === 'reference',
          },
        })
      })
    },
  },
}

export default options
