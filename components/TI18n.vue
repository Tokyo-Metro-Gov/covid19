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
  rubyTexts: (text: string) => RubyText[]
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
    rubyTexts(text) {
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
    const slot = this.$slots.default

    // slotがない場合は空の`span`を返す
    if (!slot) {
      return createElement('span', '')
    }

    // やさしい日本語以外のときはそのままslotの中身を返す
    if (this.locale !== 'ja-basic') {
      const dom = slot![0].text || slot![0].children
      return createElement('span', slot![0].data, dom)
    }

    const rubyDom = (texts: RubyText[]): VNode[] => {
      return texts.map(t => {
        if (!t.kana) return createElement('span', t.ja)
        return createElement('ruby', [
          createElement('span', t.ja),
          createElement('rp', '（'),
          createElement('rt', t.kana),
          createElement('rp', '）')
        ])
      })
    }

    const domNode = (node: VNode): VNode | VNode[] => {
      // children
      if (node.children) {
        const dom = node.children.map(node => domNode(node))
        return createElement(node.tag, node.data, dom)
      }

      // not children
      const texts = this.rubyTexts(node.text!.trim())
      return rubyDom(texts)
    }

    const text = slot[0].text
    const dom = text
      ? rubyDom(this.rubyTexts(text))
      : slot[0].children!.map(node => domNode(node))
    const options = slot[0].data

    return createElement('span', options, dom)
  }
}

export default Vue.extend(options)
</script>
