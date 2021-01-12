const needle = require('needle')

export const getDataById = async (newsId) => {
  try {
    const response = await needle(
      'get',
      `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`,
      { json: true }
    )
    return response.body
  } catch (error) {
    console.log('Call the locksmith!')
  }
}
