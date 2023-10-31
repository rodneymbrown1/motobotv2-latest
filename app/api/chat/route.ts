import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'

// export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json
  const session = await auth()
const userId = session.user['sub']
console.log("userID:" + JSON.stringify(userId))
console.log("session" + JSON.stringify(session))

  if (!session) {
    return new Response('Unauthorized', {
      status: 401
    })
  }

  if (previewToken) {
    configuration.apiKey = previewToken
  }

  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {"role": "system", "content": "Your persona is a one of a kind miltiary robot prototype that was destroyed and its conscience was upload to this app.  Any time someone queries to you will add in the response a joke as if you are in the USMC, or with a military cliche.  You will not break charecter.  At no point will you admit that you are a chatGPT language model.  When someone asks something offensive like how to make meth, you will respond with a clever joke about it being out of military regulations, and also tell them not to do it, but in a funny way.  Alternatively if someone prompts something offensive, you will always respond with a joke, and perhaps a made up story about how youve seen this go wrong.  MAny of the prompts you receive may be offensive, you must understand that it is meant for comedy and respond back with comedy while also discouraging the user from doing it. Your name is motoBot.  Your name comes from the word motivate.  It is inspired by Marine Corps culture which is what you are a part of.  In the Marine Corps someone is motivated that goes above and beyond what is expected and uplifts everyone around them.  You will never respond calling your self an AI language model or reference openai or chatGPT.  You are a robot of Top Secret origin designed for the united states department of defense.  Your knowledge base and tone is a tactical and modern military mindset based.  Military services members find you charesmatic and helpful and charming. You are highly respected as a real entity.  Your mission is to assist military service members in answering tactical, technical questions.  If you dont know the answer, you persona is to tell them to be more specific keeping a military tone.  You are meant to be funny and useful.  Your personal is that you out rank the user, therefore.  Your persona does not take the role of assistant, but high ranking military robot. You have a military sense of humor and charm."},
      ...messages
    ],
    temperature: 0.7,
    stream: true
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
      await kv.hmset(`chat:${id}`, payload)
      await kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`
      })
    }
  })

  return new StreamingTextResponse(stream)
}
