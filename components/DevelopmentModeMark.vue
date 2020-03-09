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
    // TODO 本来は開発環境か否かの判定は当コンポーネントの読み込みの外で用意し
    // 当コンポーネントの出力判定に用いるべき
    isDevelopmentMode: () => {
      // 暫定的にURLの正規表現を公開状態の判定に用いている
      // 可能であれば環境変数から状態を判定したい
      const url = 'https://stopcovid19.metro.tokyo.lg.jp'
      const regex = url.replace(/\//g, '/').replace(/\./g, '.')
      return location.href.match(new RegExp(regex)) === null
    }
  }
}
</script>
