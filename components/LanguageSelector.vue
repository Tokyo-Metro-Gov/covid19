<template>
  <div class="SelectLanguage">
    <div class="SelectLanguage-Menu">
      <select v-model="currentLocaleCode" @change="navigate()">
        <option
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :value="locale.code"
        >
          {{ locale.name }}
        </option>
      </select>
    </div>
    <div class="SelectLanguage-Background">
      <EarthIcon class="EarthIcon" />
      <SelectMenuIcon class="SelectMenuIcon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EarthIcon from '@/static/earth.svg'
import SelectMenuIcon from '@/static/selectmenu.svg'

@Component({
  components: { EarthIcon, SelectMenuIcon }
})
export default class LanguageSelector extends Vue {
  currentLocaleCode: string = this.$root.$i18n.locale

  navigate() {
    this.$root.$i18n.setLocale(this.currentLocaleCode)
  }
}
</script>

<style lang="scss">
.SelectLanguage {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  &-Menu {
    width: 100%;
    z-index: 1;
    select {
      width: 100%;
      height: 28px;
      background: transparent;
      padding-left: 76px;
      color: #333;
      font-size: 16px;
      transform: scale(0.75);
      transform-origin: center left;
      box-sizing: border-box;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  &-Background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .EarthIcon {
      position: absolute;
      left: 6px;
      height: 28px;
    }
    .SelectMenuIcon {
      position: absolute;
      right: 6px;
      height: 28px;
    }
    &:before {
      content: 'Lang:';
      display: inline-block;
      position: absolute;
      left: 24px;
      color: #333;
      font-size: 12px;
      line-height: 28px;
    }
  }
}
</style>
