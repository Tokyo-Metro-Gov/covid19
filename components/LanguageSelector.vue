<template>
  <div class="SelectLanguages mb-3">
    <div class="SelectLanguages__inner">
      <div class="SelectLanguage">
        <EarthIcon class="EarthIcon" />
        <label>Lang:</label>
        <select v-model="$i18n.locale" @change="navigate($i18n.locale)">
          <option
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :value="locale.code"
          >
            {{ locale.name }}
          </option>
        </select>
        <SelectMenuIcon class="SelectMenuIcon" />
      </div>
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
  navigate(locale: string) {
    const path = locale === 'ja' ? '/' : '/' + locale
    this.$router.push(path)
  }
}
</script>

<style lang="scss">
.SelectLanguages {
  padding: 0 20px;
  .SelectLanguages__inner {
    .SelectLanguage {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 100%;
      padding: 0 8px;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      cursor: pointer;
      label {
        padding: 5px 0;
        margin-right: 5px;
        font-size: 12px;
        line-height: 18px;
        cursor: pointer;
      }
      select {
        padding: 5px 0;
        font-size: 12px;
        line-height: 18px;
        box-sizing: border-box;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
      .EarthIcon {
        width: 14px;
        margin-right: 5px;
      }
      .SelectMenuIcon {
        width: 12px;
        margin-left: auto;
      }
    }
  }
}
</style>
