<template>
  <div class="LauguageSelector">
    <div class="LauguageSelector-Background">
      <EarthIcon class="EarthIcon" aria-hidden="true" />
      <SelectMenuIcon class="SelectMenuIcon" aria-hidden="true" />
    </div>
    <select
      id="LanguageSelector"
      v-model="currentLocaleCode"
      class="LauguageSelector-Menu"
      @change="handleChangeLanguage"
    >
      <option
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :value="locale.code"
        :title="'Switch to ' + locale.description"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EarthIcon from '@/static/earth.svg'
import SelectMenuIcon from '@/static/selectmenu.svg'

type LocalData = {
  currentLocaleCode: string
}

export default Vue.extend({
  components: {
    EarthIcon,
    SelectMenuIcon
  },
  data(): LocalData {
    return {
      currentLocaleCode: this.$root.$i18n.locale
    }
  },
  methods: {
    handleChangeLanguage() {
      this.$root.$i18n.setLocale(this.currentLocaleCode)
    }
  }
})
</script>

<style lang="scss" scoped>
.LauguageSelector {
  position: relative;
}

.LauguageSelector-Background {
  display: flex;
  align-items: center;
  padding: 0 6px;
  border-radius: 4px;
  height: 28px;

  .EarthIcon {
    order: -1;
  }

  .SelectMenuIcon {
    margin-left: auto;
  }

  &::before {
    content: 'Lang:';
    margin-left: 4px;
    color: $gray-1;
    font-size: 12px;
  }
}

.LauguageSelector-Menu {
  // select 要素のリセット
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  // IEで矢印ボタンを消す
  &::-ms-expand {
    display: none;
  }

  border: 1px solid $gray-4;

  // 背景に被せて位置など調整
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 60px;
  width: 100%;
  height: 28px;
  font-size: 12px;
  line-height: 28px;

  &:focus {
    border: 1px dotted $gray-3;
    outline: none;
  }
}
</style>
