import { getDataById } from './getDataById'

const needle = require('needle')

export const getIds = async (stories) => {
  try {
    const responseId = await needle(
      'get',
      `https://hacker-news.firebaseio.com/v0/${stories}.json?print=pretty`,
      { json: true }
    )
    const getDataPromises = responseId.body
      .slice(0, 25)
      .map((el) => getDataById(el))
    const newsData = await Promise.all(getDataPromises)

    return newsData
  } catch (error) {
    console.log('Call the locksmith!')
  }
}
