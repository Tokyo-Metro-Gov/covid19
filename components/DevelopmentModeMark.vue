<template>
  <div v-if="isDevelopmentMode" class="DevelopmentModeMark">
    開発中（development mode）
    <app-link to="https://stopcovid19.metro.tokyo.lg.jp/">
      公開サイトへ
    </app-link>
  </div>
</template>

<style lang="scss">
.DevelopmentModeMark {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 20px;
  text-align: center;
  background-color: #ffe200;
  color: #4d4d4d;
  line-height: 20px;
  opacity: 0.9;
  @include font-size(12);

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
import AppLink from '@/components/AppLink.vue'

export default {
  name: 'DevelopmentModeMark',
  components: {
    AppLink,
  },
  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    isDevelopmentMode: () => {
      if (process && process.env && process.env.GENERATE_ENV) {
        return process.env.GENERATE_ENV === 'development'
      }
      return false
    },
  },
}
</script>
