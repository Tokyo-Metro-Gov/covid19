import { convertDateToISO8601Format } from '@/utils/formatDate'

const FINAL_FALLBACK_LANG = 'ja'

export function formatDate(datestr: string, locale: string): string {
  const ld = new Date(convertDateToISO8601Format(datestr)).toLocaleDateString(
    locale
  )
  if (locale !== 'ja-basic') return ld
  const ldp = ld.split(/[/年月日]/)
  return `${ldp[0]}ねん ${ldp[1]}がつ ${ldp[2]}にち`
}

export function getLocalizedProp(
  obj: any,
  locale: string,
  fallbackLocale?: string
): string | any {
  if (typeof obj !== 'object') return obj
  const langKeys = Object.keys(obj)
  console.log(langKeys)
  const tries = [locale]
  if (fallbackLocale) tries.push(fallbackLocale)
  tries.push(locale.toString().split('-')[0])
  if (fallbackLocale) tries.push(fallbackLocale.toString().split('-')[0])
  tries.push(FINAL_FALLBACK_LANG)
  for (const l of tries) {
    if (langKeys.indexOf(l) > 0) return obj[l]
  }
  // Give up! Returns first one.
  return Object.values(obj)[0]
}

export function getTitle(newsItem: newsItem, locale: string): string {
  if (!newsItem || !newsItem.title) return ''
  if (typeof newsItem.title === 'string') {
    return newsItem.title
  } else if (newsItem.title[locale]) {
    return newsItem.title[locale]
  } else if (newsItem.primaryLang && newsItem.title[newsItem.primaryLang]) {
    return newsItem.title[newsItem.primaryLang]
  } else {
    return newsItem.title.ja
  }
}

export function localize(news: Array<newsItem>, locale: string) {
  console.log(locale)
  return news.map(o => {
    const n = Object.assign({}, o)
    const fl = n.primaryLang
    n.title = getLocalizedProp(n.title, locale, fl)
    n.url = getLocalizedProp(n.url, locale, fl)
    return n
  })
}
