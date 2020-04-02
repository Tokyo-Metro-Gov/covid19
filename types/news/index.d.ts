interface newsItem {
  title?: string | { [key: string]: string }
  link?: string | URL | { [key: string]: string | URL }
  primaryLang?: string
}
declare module '*/data/news.json' {
  interface news {
    newsItems: Array<newsItem>
  }
  const value: news
  export = value
}
