// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return { selector: to.hash }
  }

  if (to.meta.tabs) {
    const element = document.querySelector('[id^="cardTab"]')
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset
      return { x: 0, y }
    }
  }

  return { x: 0, y: 0 }
}
