import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)


const handler = async (event) => {
  try {
    const response = await openai.createCompletion({
        model: 'davinci:ft-personal-2023-05-19-18-56-04',
        prompt: event.body,
        max_tokens: 100,
        temperature: 0.1,
        stop: ['\n','->']
    }) 
    //const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ 
         reply: response.data
       }),
    }
  } catch (error) {
      return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
