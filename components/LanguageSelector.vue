<template>
  <div class="SelectLanguage">
    <EarthIcon class="EarthIcon" />
    <div class="SelectLanguageMenu">
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
    <SelectMenuIcon class="SelectMenuIcon" />
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
  navigate(locale: string) {
    const matches = this.$router.currentRoute.path.match(/.*(\/.*)/)
    if (matches === null) {
      return
    }
    const path = locale === 'ja' ? matches[1] : '/' + locale + matches[1]
    this.$router.push(path)
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
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: -1;
  }
  .SelectLanguageMenu {
    width: 100%;
    select {
      width: 100%;
      background: transparent;
      padding: 5px 0 5px 55px;
      font-size: 12px;
      line-height: 18px;
      box-sizing: border-box;
      color: #333;
      z-index: 1;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    &:before {
      content: 'Lang:';
      display: inline-block;
      position: absolute;
      left: 24px;
      font-size: 12px;
      line-height: 28px;
      z-index: -1;
    }
  }
  .EarthIcon {
    position: absolute;
    left: 6px;
    z-index: 0;
  }
  .SelectMenuIcon {
    position: absolute;
    right: 6px;
    margin-left: auto;
    z-index: 0;
  }
}
</style>
