<script lang="ts">
import Vue, { VNode } from 'vue'
import XRegExp from 'xregexp/'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type RubyText = {
  ja: string
  kana?: string
}
type Data = {
  locale: string
}
type Methods = {
  createRubyTexts: (text: string) => RubyText[]
}
type Computed = {}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  data() {
    return {
      locale: ''
    }
  },
  methods: {
    createRubyTexts(text) {
      let match: RegExpExecArray | null
      let lastText: string
      let pos = 0
      const texts: RubyText[] = []
      const regp = /([\p{sc=Han}|\s|・]+?)（([\p{sc=Hiragana}|\s|・]+?)）/gu

      // ふりがなを含んだ文字列をパースしてオブジェクトを生成
      while ((match = XRegExp.exec(text, regp, pos))) {
        if (match.index > 0) {
          texts.push({ ja: match.input.slice(pos, match.index) })
        }
        texts.push({ ja: match[1], kana: match[2] })
        pos = match.index + match[0].length
      }
      if ((lastText = text.slice(pos))) texts.push({ ja: lastText })
      return texts
    }
  },
  mounted() {
    this.locale = this.$i18n.locale
  },
  watch: {
    '$root.$i18n.locale'(newLocale) {
      this.locale = newLocale
    }
  },
  render(createElement): VNode {
    const slot = this.$slots.default ? this.$slots.default![0] : ''

    // slotがない場合は空の`span`を返す
    if (!slot) {
      return createElement('span', '')
    }

    // やさしい日本語以外の場合はslotの内容を返す
    if (this.locale !== 'ja-basic') {
      if (slot.text) return createElement('span', slot.data, slot.text)
      return createElement(slot.tag, slot.data, slot.children)
    }

    const createRubyNode = (texts: RubyText[]): VNode => {
      const rubyTexts = texts.map(t => {
        if (!t.kana) return t.ja
        return createElement('ruby', [
          t.ja,
          createElement('rp', '（'),
          createElement('rt', t.kana),
          createElement('rp', '）')
        ])
      })
      return createElement('span', rubyTexts)
    }

    const createVNode = (node: VNode): VNode => {
      if (node.text) {
        const texts = this.createRubyTexts(node.text)
        return createRubyNode(texts)
      }
      const vnodes = node.children!.map(node => createVNode(node))
      return createElement(node.tag, node.data, vnodes)
    }

    return createVNode(slot)
  }
}

export default Vue.extend(options)
</script>
