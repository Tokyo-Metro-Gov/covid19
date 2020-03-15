<template>
  <div v-if="isDevelopmentMode" class="DevelopmentModeMark">
    開発中（development mode）
    <a
      href="https://stopcovid19.metro.tokyo.lg.jp/"
      target="_blank"
      rel="noopener"
    >
      公開サイトへ
    </a>
  </div>
</template>

<style lang="scss">
.DevelopmentModeMark {
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 12px;
  z-index: 1000;
  width: 100%;
  height: 20px;
  text-align: center;
  background-color: #ffe200;
  color: #4d4d4d;
  line-height: 20px;
  opacity: 0.9;

  // mobile view
  @include lessThan($small) {
    height: 40px;
    a {
      display: block;
    }
  }
}
</style>

<script>
export default {
  name: 'DevelopmentModeMark',
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    // NODE_ENV による本番・開発環境の切り替えができるようになったらこのメソッドを有効化・ひとつ後ろのメソッドを破棄
    //  isDevelopmentMode: () => {
    //         if (process && process.env && process.env.NODE_ENV) {
    //     return process.env.NODE_ENV === 'development'
    //   }
    //   return false
    // },
    isDevelopmentMode: () => {
      const releaseUrl = 'https://stopcovid19.metro.tokyo.lg.jp'
      const regex = new RegExp(
        '^' + releaseUrl.replace(/\//g, '\\/').replace(/\./g, '\\.')
      )
      if (process.browser) {
        return location.href.match(regex) === null
      }
      return true
    }
  }
}
</script>
