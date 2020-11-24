import Vue from 'vue'
const VueAxe = () => import('vue-axe')
const AXE_LOCALE_JA = () => import('axe-core/locales/ja.json')

const NODE_ENV = process.env.NODE_ENV
const VUE_AXE = process.env.VUE_AXE

if (NODE_ENV === 'development' && VUE_AXE === 'true') {
  Vue.use(VueAxe, {
    config: {
      locale: AXE_LOCALE_JA,
      rules: [
        {
          // 色コントラストの検査を無効化する。
          // Node数の多い環境で検査コストが高いため。
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
    clearConsoleOnUpdate: false,
  })
}
