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
