import { Middleware } from '@nuxt/types'

const redirect: Middleware = ({ route, redirect }) => {
  if (route.path.includes('flow')) {
    redirect(
      'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html'
    )
  }
}

export default redirect
