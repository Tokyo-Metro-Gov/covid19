// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return { selector: to.hash }
  }

  if (!to.meta.tabs) {
    return { x: 0, y: 0 }
  }

  const element = document.querySelector('[id^="cardTab"]')
  if (!element) {
    return { x: 0, y: 0 }
  }

  const elementTop = element.getBoundingClientRect().top + window.pageYOffset

  if (!window.$nuxt.context.$vuetify.breakpoint.xsOnly) {
    return { x: 0, y: elementTop }
  }

  const naviContainer = document.querySelector('.naviContainer')
  if (!naviContainer) {
    return { x: 0, y: elementTop }
  }

  return { x: 0, y: elementTop - naviContainer.scrollHeight }
}
