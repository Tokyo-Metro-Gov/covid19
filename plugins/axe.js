import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  const AXE_LOCALE_JA = require('axe-core/locales/ja.json')

  Vue.use(VueAxe, {
    config: {
      locale: AXE_LOCALE_JA
    },
    clearConsoleOnUpdate: false
  })
}
