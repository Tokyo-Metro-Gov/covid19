/**
 * v-scroll-to完了時のcallback
 * ページ内リンクであることを前提に、URLにハッシュを付与する
 */
export const onDoneScroll = (element: Element) => {
  const elementHasId = typeof element.id !== 'undefined'
  if (elementHasId) {
    history.pushState(null, '', `#${element.id}`)
  }
}
