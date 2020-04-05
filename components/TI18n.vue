<script lang="ts">
import Vue, { VNode } from 'vue'
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
      locale: this.$i18n.locale
    }
  },
  methods: {
    createRubyTexts(text) {
      let match: RegExpExecArray | null
      let lastText: string
      let prevIndex = 0
      const texts: RubyText[] = []
      const regp = new RegExp(/(\p{sc=Han}+?)（(.+?)）/, 'gu')
      while ((match = regp.exec(text)) !== null) {
        if (match.index > 0) {
          texts.push({ ja: match.input.slice(prevIndex, match.index) })
        }
        texts.push({ ja: match[1], kana: match[2] })
        prevIndex = match.index + match[0].length
      }
      if ((lastText = text.slice(prevIndex))) texts.push({ ja: lastText })
      return texts
    }
  },
  watch: {
    '$root.$i18n.locale'(newLocale) {
      this.locale = newLocale
    }
  },
  render(createElement): VNode {
    const slot = this.$slots.default![0]

    // slotがない場合は空の`span`を返す
    if (!slot) {
      return createElement('span', '')
    }

    // やさしい日本語以外のときはそのままslotの中身を返す
    if (this.locale !== 'ja-basic') {
      const dom = slot.text || slot.children
      return createElement('span', slot.data, dom)
    }

    const createRubyNodes = (texts: RubyText[]): (VNode | string)[] => {
      return texts.map(t => {
        if (!t.kana) return t.ja
        return createElement('ruby', [
          t.ja,
          createElement('rp', '（'),
          createElement('rt', t.kana),
          createElement('rp', '）')
        ])
      })
    }

    const createVNode = (node: VNode): VNode => {
      if (node.text) {
        const texts = this.createRubyTexts(node.text!.trim())
        return createElement('span', createRubyNodes(texts))
      }
      const vnode = node.children!.map(node => createVNode(node))
      return createElement(node.tag, node.data, vnode)
    }

    return createVNode(slot)
  }
}

export default Vue.extend(options)
</script>
