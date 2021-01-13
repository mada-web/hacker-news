import { getDataById } from './getDataById'

const needle = require('needle')

export const getIds = async () => {
  try {
    const responseId = await needle(
      'get',
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
      { json: true }
    )
    const getDataPromises = responseId.body
      .slice(0, 30)
      .map((el) => getDataById(el))
    const newsData = await Promise.all(getDataPromises)
    console.log('🚀 ~ file: getIds.js ~ line 16 ~ getIds ~ newsData', newsData)

    return newsData
  } catch (error) {
    console.log('Call the locksmith!')
  }
}
