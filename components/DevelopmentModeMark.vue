<template>
  <div v-if="isDevelopmentMode" class="DevelopmentModeMark">
    開発中（development mode）
    <a
      href="https://covid19-aomori.info/"
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
  z-index: 1;
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
    isDevelopmentMode: () => {
      if (process && process.env && process.env.GENERATE_ENV) {
        return process.env.GENERATE_ENV === 'development'
      }
      return false
    }
  }
}
</script>
