import path from 'path'
import { promises as fs } from 'fs'
import { compareDesc, parseISO } from 'date-fns'
import beautify from 'json-beautify'
import { NewsItem } from './types'

type NewsData = {
  newsItems: NewsItem[]
}

const newsDataPath = path.join(__dirname, '../../data/news.json')

const readData = async (): Promise<NewsData> => {
  const data = (await fs.readFile(newsDataPath)).toString()
  try {
    const parsedData: NewsData = JSON.parse(data)
    return parsedData
  } catch (error) {
    throw new Error('Fail to parse news data.')
  }
}

export const getDateOfLatestItem = async (): Promise<Date> => {
  const existsData = (await readData()).newsItems
  const sortedExistsData = existsData.sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date))
  )
  return sortedExistsData.length === 0
    ? new Date(0)
    : parseISO(sortedExistsData[0].date)
}

export const saveNewData = async (newItems: NewsItem[]) => {
  const existsData: NewsData = await readData()
  const newData: NewsData = {
    ...existsData,
    newsItems: [...existsData.newsItems, ...newItems].sort((a, b) =>
      compareDesc(parseISO(a.date), parseISO(b.date))
    )
  }

  const jsonString = `${beautify(newData, (null as any) as any[], 2, 100)}\n` // 本家の型定義が間違っているので無理やり通す

  await fs.writeFile(newsDataPath, jsonString)
}
