<template>
  <div class="SelectLanguages mb-3 clearfix">
    <div class="SelectLanguages__inner">
      <div style="background: #eee; padding: 20px;">
        <label>言語設定：</label>
        <select v-model="$i18n.locale" @change="navigate($i18n.locale)">
          <option
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :value="locale.code"
          >
            {{ locale.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(locale) {
      const path = locale === 'ja' ? '/' : '/' + locale
      this.$router.push(path)
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
