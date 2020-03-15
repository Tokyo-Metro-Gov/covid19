import { parseISO, compareDesc, isAfter } from 'date-fns'

import { NewsItem } from '../types'
import { getNewsFromPressReleaseFromChibaPrefecture } from './pressReleaseFromChibaPref'

export const getLatestNews = async ({
  from = undefined
}: {
  from: Date | undefined
}): Promise<NewsItem[]> => {
  const news = [...(await getNewsFromPressReleaseFromChibaPrefecture())]
  const sortedNews = news.sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date))
  )
  const filteredNews =
    from !== undefined
      ? sortedNews.filter(item => isAfter(parseISO(item.date), from))
      : sortedNews

  return filteredNews
}
