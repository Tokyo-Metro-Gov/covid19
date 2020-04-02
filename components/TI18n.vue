<template>
  <span v-if="locale === 'ja-basic'">
    <template v-for="(t, i) in rubyTexts">
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

type RubyText = {
  ja: string
  kana?: string
}
type Data = {
  locale: string
}
type Methods = {}
type Computed = {
  rubyTexts: RubyText[]
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
      required: true
    }
  },
  data() {
    return {
      locale: this.$i18n.locale
    }
  },
  computed: {
    rubyTexts() {
      let match: RegExpExecArray | null
      let lastText: string
      let prevIndex = 0
      const texts: RubyText[] = []
      const regp = new RegExp(/(\p{sc=Han}+?)（(.+?)）/, 'gu')
      while ((match = regp.exec(this.text)) !== null) {
        if (match.index > 0) {
          texts.push({ ja: match.input.slice(prevIndex, match.index) })
        }
        texts.push({ ja: match[1], kana: match[2] })
        prevIndex = match.index + match[0].length
      }
      if ((lastText = this.text.slice(prevIndex))) texts.push({ ja: lastText })
      return texts
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
