import XRegExp from 'xregexp/'
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
  let tooltipEl = document.getElementById('chartjs-tooltip')
  let titleEl: HTMLElement | null
  let bodyEl: HTMLElement | null

  // Create element on first render
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
    const chart = self.$refs.barChart as Vue
    const el = chart.$el
    const canvas = el.querySelector('canvas')
    const position = canvas!.getBoundingClientRect()

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
    tooltipEl.style.opacity = '1'
  }

  if (tooltipEl.dataset.chartId === self.chartId) {
    tooltipEl.style.transition = 'all 0.3s ease'
  } else {
    tooltipEl.style.transition = 'opacity 0.3s ease'
    tooltipEl.dataset.chartId = self.chartId
  }

  if ((titleEl = tooltipEl.querySelector('.chartjs-tooltip-title'))) {
    titleEl!.textContent = ''
  } else {
    titleEl = document.createElement('div')
    titleEl.classList.add('chartjs-tooltip-title')
    titleEl.style.fontFamily = tooltipModel._titleFontFamily
    titleEl.style.fontSize = tooltipModel.titleFontSize + 'px'
    titleEl.style.fontStyle = tooltipModel._titleFontStyle
    tooltipEl.appendChild(titleEl)
  }

  if ((bodyEl = tooltipEl.querySelector('.chartjs-tooltip-body'))) {
    bodyEl!.textContent = ''
  } else {
    bodyEl = document.createElement('div')
    bodyEl.classList.add('chartjs-tooltip-body')
    bodyEl.style.fontFamily = tooltipModel._bodyFontFamily
    bodyEl.style.fontSize = tooltipModel.bodyFontSize + 'px'
    bodyEl.style.fontStyle = tooltipModel._bodyFontStyle
    tooltipEl.appendChild(bodyEl)
  }

  // titie
  const title = tooltipModel.title && tooltipModel.title[0]

  if (title) {
    createRubyObject(title).forEach(text => {
      const dom = createDom(text)
      titleEl!.appendChild(dom)
    })
  }

  // body
  const bodyLines = tooltipModel.body.map(b => b.lines).join()

  if (bodyLines) {
    createRubyObject(bodyLines).forEach(text => {
      const dom = createDom(text)
      bodyEl!.appendChild(dom)
    })
  }
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
