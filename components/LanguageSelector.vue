<template>
  <div class="SelectLanguages mb-3 clearfix">
    <div class="SelectLanguages__inner">
      <div>{{ currentLocale.name }}</div>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="SelectLanguage"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale)
    },
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss">
.SelectLanguages {
  font-size: 12px;
  .SelectLanguages__inner {
    float: right;
    .SelectLanguage {
      + .SelectLanguage {
        margin-left: 5px;
        padding-left: 5px;
      }
    }
  }
}
</style>
