import RssParser from 'rss-parser'
import { ISO8601JST, ISO8601UTC, NewsItem } from '../types'

type RssNewsItemResponse = {
  creator: string
  date: ISO8601JST
  title: string
  link: string
  'dc:creator': string
  'dc:date': ISO8601JST
  content: ''
  contentSnippet: ''
  isoDate: ISO8601UTC
}

const PressReleaseFromChibaPrefectureUrl =
  'https://www.pref.chiba.lg.jp/homepage/shinchaku/shinchaku.xml'

const parser = new RssParser()
const convertRssItemToNewsItem = (
  responses: RssNewsItemResponse
): NewsItem => ({
  date: responses.date,
  link: responses.link,
  title: responses.title
})

const checkItemRelatedToCovid19 = (item: RssNewsItemResponse): boolean => {
  return item.title.includes('コロナウイルス')
}

export const getNewsFromPressReleaseFromChibaPrefecture = async (): Promise<NewsItem[]> => {
  const rssResponse = await parser.parseURL(PressReleaseFromChibaPrefectureUrl)
  return (rssResponse.items as RssNewsItemResponse[])
    .filter(checkItemRelatedToCovid19)
    .map(convertRssItemToNewsItem)
}
