import { useEffect, useState } from 'react'
import { getIds } from '../utils/getIds'
import Item from '../components/StoryItem'
import { Loader } from '../components/Preloader'

export const Stories = (props) => {
  const { find } = props
  const [newsList, setNewsList] = useState(null)

  useEffect(() => {
    ;(async () => {
      const data = await getIds(find)

      setNewsList(data)
    })()
  }, [find])

  if (!newsList) {
    return <Loader />
  }
  return (
    <div className="story_container">
      {newsList.map((news) => (
        <Item news={news} key={news.id} />
      ))}
    </div>
  )
}
