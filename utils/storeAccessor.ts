import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

/* eslint-disable import/no-mutable-exports */
let newsStore
/* eslint-enable */

function initialiseStores(store: Store<any>): void {
  newsStore = getModule({}, store)
}

export { initialiseStores, newsStore }
