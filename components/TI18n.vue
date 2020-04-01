<template>
  <span v-if="locale === 'ja-basic'">
    <template v-for="(t, i) in rubyText">
      <ruby v-if="t.kana" :key="i">
        {{ t.ja }}
        <rp>(</rp>
        <rt>{{ t.kana }}</rt>
        <rp>)</rp>
      </ruby>
      <span v-else :key="i">{{ t.ja }}</span>
    </template>
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
      let match
      let prevIndex = 0
      const res: object[] = []
      const regp = new RegExp(/(\p{sc=Han}+?)（(.+?)）/, 'gu')
      while ((match = regp.exec(this.text)) !== null) {
        if (match.index > 0) {
          const ja = match.input.slice(prevIndex, match.index)
          res.push({ ja })
        }
        res.push({ ja: match[1], kana: match[2] })
        prevIndex = match.index + match[0].length
      }
      if (prevIndex < this.text.length)
        res.push({ ja: this.text.slice(prevIndex) })
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
