import XRegExp from 'xregexp'
import Vue from 'vue'
import { ChartTooltipModel } from 'chart.js'

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

interface TooltipModel extends ChartTooltipModel {
  title?: string
}

interface ChartObject extends Vue {
  chartId: string
}

export const customTooltip = (
  self: ChartObject,
  tooltipModel: TooltipModel
) => {
  // Tooltip Element
  let tooltipEl: HTMLElement | null = document.querySelector('#chartjs-tooltip')
  let titleEl: HTMLElement | null
  let bodyEl: HTMLElement | null

  // Create tooltip element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'chartjs-tooltip'
    document.body.appendChild(tooltipEl)
  }

  // Hide if no tooltip
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = '0'
    return
  } else {
    tooltipEl.style.opacity = '1'
  }

  // Create title element on first render
  if ((titleEl = tooltipEl.querySelector('.chartjs-tooltip-title'))) {
    titleEl!.textContent = ''
  } else {
    titleEl = document.createElement('div')
    titleEl.classList.add('chartjs-tooltip-title')
    titleEl.style.fontFamily = tooltipModel._titleFontFamily
    titleEl.style.fontSize = tooltipModel.titleFontSize + 'px'
    titleEl.style.fontWeight = tooltipModel._titleFontStyle
    tooltipEl.appendChild(titleEl)
  }

  // Create body element on first render
  if ((bodyEl = tooltipEl.querySelector('.chartjs-tooltip-body'))) {
    bodyEl!.textContent = ''
  } else {
    bodyEl = document.createElement('div')
    bodyEl.classList.add('chartjs-tooltip-body')
    bodyEl.style.fontFamily = tooltipModel._bodyFontFamily
    bodyEl.style.fontSize = tooltipModel.bodyFontSize + 'px'
    bodyEl.style.fontWeight = tooltipModel._bodyFontStyle
    tooltipEl.appendChild(bodyEl)
  }

  // Appned ruby texts to title
  const title = tooltipModel.title && tooltipModel.title[0]
  if (title) {
    createRubyObject(title).forEach(text => {
      const dom = createDom(text)
      titleEl!.appendChild(dom)
    })
  }

  // Appned ruby texts to body
  const bodyLines = tooltipModel.body.map(b => b.lines).join()
  if (bodyLines) {
    createRubyObject(bodyLines).forEach(text => {
      const dom = createDom(text)
      bodyEl!.appendChild(dom)
    })
  }

  // base styles
  tooltipEl.style.position = 'absolute'
  tooltipEl.style.color = tooltipModel.titleFontColor
  tooltipEl.style.padding =
    tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px'
  tooltipEl.style.pointerEvents = 'none'
  tooltipEl.style.backgroundColor = tooltipModel.backgroundColor
  tooltipEl.style.borderRadius = tooltipModel.cornerRadius + 'px'

  // tooltip position
  const canvas = (() => {
    const chart = self.$refs.barChart as Vue
    const el = chart.$el
    const canvas = el.querySelector('canvas')
    return canvas!.getBoundingClientRect()
  })()

  const baseLeft = canvas.left + tooltipModel.caretX
  const baseTop = canvas.top + window.pageYOffset + tooltipModel.caretY
  const borderSize = 5 // caret border-size defined by css

  const align = (() => {
    const rightSide = baseLeft + borderSize + tooltipEl.offsetWidth
    const isRightSideOver = rightSide > canvas.right
    const yAlign = tooltipModel.yAlign === 'center' ? '' : tooltipModel.yAlign
    return yAlign || (isRightSideOver ? 'left' : 'right')
  })()

  switch (align) {
    case 'top':
      tooltipEl.style.top = baseTop + borderSize + 'px'
      tooltipEl.style.left =
        baseLeft - tooltipEl.offsetWidth / 2 - borderSize / 2 + 'px'
      break
    case 'bottom':
      tooltipEl.style.top = baseTop - tooltipEl.offsetHeight - borderSize + 'px'
      tooltipEl.style.left =
        baseLeft - tooltipEl.offsetWidth / 2 - borderSize / 2 + 'px'
      break
    case 'right':
      tooltipEl.style.top =
        baseTop - tooltipEl.offsetHeight / 2 + borderSize / 2 + 'px'
      tooltipEl.style.left = baseLeft + borderSize + 'px'
      break
    case 'left':
      tooltipEl.style.top =
        baseTop - tooltipEl.offsetHeight / 2 + borderSize / 2 + 'px'
      tooltipEl.style.left =
        baseLeft - tooltipEl.offsetWidth - borderSize + 'px'
      break
  }

  // fade animation
  if (tooltipEl.dataset.chartId === self.chartId) {
    tooltipEl.style.transition = 'all 0.3s ease'
  } else {
    tooltipEl.style.transition = 'opacity 0.3s ease'
    tooltipEl.dataset.chartId = self.chartId
  }

  // css class for caret
  tooltipEl.className = ''
  tooltipEl.classList.add(align)
}

function createDom(text: RubyText) {
  let dom: HTMLElement
  if (!text.kana) {
    dom = document.createElement('span')
    dom.textContent = text.ja
  } else {
    dom = document.createElement('ruby')
    const rt = document.createElement('rt')
    rt.textContent = text.kana || ''
    dom.textContent = text.ja
    dom.appendChild(rt)
  }
  return dom
}
