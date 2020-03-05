<template>
  <v-app class="app-print">
    <div v-if="loading" class="loader">
      <img src="/logo.svg" alt="東京都" />
      <scale-loader color="#00A040" />
    </div>
    <v-container v-else>
      <nuxt />
    </v-container>
  </v-app>
</template>
<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
export default {
  components: {
    ScaleLoader
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loading = false
    window.print()
  },
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://stopcovid19.metro.tokyo.lg.jp${this.$route.path}`
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.app-print {
  margin: 0 auto;
  background-color: inherit !important;
}
.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  img {
    display: block;
    margin: 0 auto 20px;
  }
}
</style>
