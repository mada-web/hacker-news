import { getIds } from '../utils/getIds'
import Item from '../components/NewsItems'
import { useEffect, useState } from 'react'

export const TopNews = () => {
  const [newsList, setNewsList] = useState('')

  useEffect(() => {
    ;(async () => {
      const data = await getIds()

      setNewsList(data)
    })()
  }, [])

  if (!newsList) {
    return <span>Loading...</span>
  }

  return newsList.map((news) => <Item news={news} />)
}
