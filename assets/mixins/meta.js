export default {
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.meta.title }
      ]
    }
  }
}
