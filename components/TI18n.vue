<template>
  <span v-if="locale === 'ja-basic'">
    <span v-for="(t, i) in rubyText" :key="i">
      <ruby v-if="t.kana">
        {{ t.ja }}
        <rp>(</rp><rt>{{ t.kana }}</rt
        ><rp>)</rp>
      </ruby>
      <template v-else>{{ t.ja }}</template>
    </span>
  </span>
  <span v-else>{{ text }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  locale: string
}
type Methods = {}
type Computed = {
  rubyText: object[]
}
type Props = {
  text: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    text: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      locale: this.$i18n.locale
    }
  },
  computed: {
    rubyText() {
      let match: any
      const res: object[] = []
      const regp = new RegExp(/(\p{sc=Han}+?)（(.+?)）/, 'gu')
      let previndex = 0
      while ((match = regp.exec(this.text)) !== null) {
        if (match.index > 0) {
          const ja = match.input.slice(previndex, match.index)
          res.push({ ja })
        }
        res.push({ ja: match[1], kana: match[2] })
        previndex = match.index + match[0].length
      }
      res.push({ ja: this.text.slice(previndex) })
      return res
    }
  },
  watch: {
    text() {
      this.locale = this.$i18n.locale
    }
  }
}

export default Vue.extend(options)
</script>
