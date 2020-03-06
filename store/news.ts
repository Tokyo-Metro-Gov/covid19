import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
const News = require('@/data/news.json')

type NewsType = {
  date: string
  url: string
  text: string
}

@Module({
  name: 'news',
  stateFactory: true,
  namespaced: true
})
export default class NewsModule extends VuexModule {
  private _items: NewsType[] = []

  @Mutation
  setItems(items: NewsType[]) {
    this._items = items
  }

  @Action({})
  fetchItems() {
    const items = News.newsItems as NewsType[]
    this.setItems(items)
  }

  get items(): NewsType[] {
    return this._items
  }
}
