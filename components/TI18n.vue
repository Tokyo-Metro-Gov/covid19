<script lang="ts">
import Vue, { VNode } from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { createRubyObject, RubyText } from '@/utils/ruby'

type Data = {
  locale: string
}
type Methods = {}
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
  mounted() {
    this.locale = this.$i18n.locale
  },
  watch: {
    '$root.$i18n.locale'(newLocale) {
      this.locale = newLocale
    }
  },
  render(createElement): VNode {
    let elem: VNode

    if (this.$slots.default) {
      elem = createElement('span', this.$slots.default)
    } else {
      // slotがない場合は空の`span`を返す
      elem = createElement('span', '')
    }

    // やさしい日本語以外の場合はslotの内容を返す
    if (this.locale !== 'ja-basic') {
      return elem
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
        const texts = createRubyObject(node.text)
        return createRubyNode(texts)
      }
      if (node.children) {
        const vnodes = node.children.map(node => createVNode(node))
        return createElement(node.tag, node.data, vnodes)
      }
      return node
    }

    return createVNode(elem)
  }
}

export default Vue.extend(options)
</script>
