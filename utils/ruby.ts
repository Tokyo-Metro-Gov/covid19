import XRegExp from 'xregexp/'

export type RubyText = {
  ja: string
  kana?: string
}

export const createRubyObject = (text: string) => {
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

export const customTooltip = (self: any, tooltipModel: any) => {
  // Tooltip Element
  let tooltipEl = document.getElementById('chartjs-tooltip')
  let titleEl = tooltipEl?.querySelector('.chartjs-tooltip-title')
  let bodyEl = tooltipEl?.querySelector('.chartjs-tooltip-body')

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'chartjs-tooltip'
    document.body.appendChild(tooltipEl)
  }

  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0
    return
  }

  if (!titleEl) {
    titleEl = document.createElement('div')
    titleEl.classList.add('chartjs-tooltip-title')
    titleEl.style.fontFamily = tooltipModel._titleFontFamily
    titleEl.style.fontSize = tooltipModel.titleFontSize + 'px'
    titleEl.style.fontStyle = tooltipModel._titleFontStyle
    tooltipEl.appendChild(titleEl)
  } else {
    titleEl.textContent = ''
  }

  if (!bodyEl) {
    bodyEl = document.createElement('div')
    bodyEl.classList.add('chartjs-tooltip-body')
    bodyEl.style.fontFamily = tooltipModel._bodyFontFamily
    bodyEl.style.fontSize = tooltipModel.bodyFontSize + 'px'
    bodyEl.style.fontStyle = tooltipModel._bodyFontStyle
  } else {
    bodyEl.textContent = ''
  }

  const title = tooltipModel.title && tooltipModel.title[0]
  if (!title) return
  const t = createRubyObject(title as string)

  t.forEach(a => {
    let dom: HTMLElement
    if (!a.kana) {
      dom = document.createElement('span')
      dom.textContent = a.ja
    } else {
      dom = document.createElement('ruby')
      const rt = document.createElement('rt')
      rt.textContent = a.kana || ''
      dom.textContent = a.ja
      dom.appendChild(rt)
    }
    titleEl.appendChild(dom)
  })

  const bodyLines = tooltipModel.body.map(b => b.lines).join()
  const b = createRubyObject(bodyLines as string)

  b.forEach(a => {
    let dom: HTMLElement
    if (!a.kana) {
      dom = document.createElement('span')
      dom.textContent = a.ja
    } else {
      dom = document.createElement('ruby')
      const rt = document.createElement('rt')
      rt.textContent = a.kana || ''
      dom.textContent = a.ja
      dom.appendChild(rt)
    }
    bodyEl!.appendChild(dom)
  })
  tooltipEl.appendChild(bodyEl)

  const chart = self.$refs.barChart as Vue
  const el = chart.$el
  const canvas = el.querySelector('canvas')
  const position = canvas.getBoundingClientRect()

  tooltipEl.style.opacity = '1'
  tooltipEl.style.position = 'absolute'
  tooltipEl.style.left =
    position.left + window.pageXOffset + tooltipModel.caretX + 'px'

  tooltipEl.style.top =
    position.top + window.pageYOffset + tooltipModel.caretY + 'px'
  tooltipEl.style.color = tooltipModel.titleFontColor
  tooltipEl.style.padding =
    tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px'
  tooltipEl.style.pointerEvents = 'none'
  tooltipEl.style.backgroundColor = tooltipModel.backgroundColor
  tooltipEl.style.borderRadius = tooltipModel.cornerRadius + 'px'
}
