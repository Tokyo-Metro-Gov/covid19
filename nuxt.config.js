/* eslint-disable */
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: '東京都 新型コロナウイルス感染症対策本部',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '東京都 新型コロナウイルス感染症対策本部'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: '東京都 新型コロナウイルス感染症対策本部' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://stopcovid19.metro.tokyo.lg.jp' },
      { hid: 'og:title', property: 'og:title', content: '東京都 新型コロナウイルス感染症対策本部' },
      { hid: 'og:description', property: 'og:description', content: '東京都 新型コロナウイルス感染症対策本部' },
      { hid: 'og:image', property: 'og:image', content: 'https://stopcovid19.metro.tokyo.lg.jp/ogp.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png'}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.js',
      ssr: true
    },
    '@/plugins/datetime-formatter.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build'],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['@nuxtjs/moment', ['ja']],
    'nuxt-svg-loader'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {}
  }
  // /*
  // ** Build configuration
  // */
  // build: {
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend (config, ctx) {
  //   }
  // },
}
