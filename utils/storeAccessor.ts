import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import News from '~/store/news'

/* eslint-disable import/no-mutable-exports */
let newsStore: News
/* eslint-enable */

function initialiseStores(store: Store<any>): void {
  newsStore = getModule(News, store)
}

export { initialiseStores, newsStore }
