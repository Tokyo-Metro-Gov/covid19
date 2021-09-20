// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return { selector: to.hash }
  }

  if (from.meta.tabs && to.meta.tabs) {
    return
  }

  return { x: 0, y: 0 }
}
