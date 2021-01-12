// import { getDataById } from '../utils/getDataById'
import { getIds } from '../utils/getIds'
import { useEffect, useState } from 'react'

export const TopNews = () => {
  const [news, setNews] = useState('')

  useEffect(() => {
    ;(async () => {
      const {
        by,
        descendants,
        id,
        kids,
        score,
        time,
        title,
        type,
        url,
      } = await getIds()

      const updateNews = {
        by,
        descendants,
        id,
        kids,
        score,
        time,
        title,
        type,
        url,
      }

      setNews(updateNews)
      console.log(
        '🚀 ~ file: TopNews.js ~ line 34 ~ ; ~ updateNews',
        updateNews
      )
    })()
  }, [])

  if (!news) {
    return <span>Loading...</span>
  }
  return 'data'
}
