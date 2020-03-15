import { getLatestNews } from './repository'
import { getDateOfLatestItem, saveNewData } from './data'
;(async () => {
  const dateOfLatestItem = await getDateOfLatestItem()

  const latestNews = await getLatestNews({ from: dateOfLatestItem })
  if (latestNews.length === 0) return

  await saveNewData(latestNews)
})()
