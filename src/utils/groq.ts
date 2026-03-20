import fetch from 'node-fetch'

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'
const GROQ_API_KEY = process.env.GROQ_API_KEY || ''

export interface GroqMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface GroqResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

export const callGroqAPI = async (
  messages: GroqMessage[],
  model: string = 'mixtral-8x7b-32768'
): Promise<string> => {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    })

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.statusText}`)
    }

    const data = (await response.json()) as GroqResponse
    return data.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Groq API error:', error)
    throw error
  }
}

export const summarizeText = async (text: string): Promise<string> => {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: 'You are a helpful assistant that creates concise, clear summaries of text. Keep summaries to 2-3 sentences.',
    },
    {
      role: 'user',
      content: `Please summarize the following text:\n\n${text}`,
    },
  ]

  return callGroqAPI(messages)
}

export const extractKeyPoints = async (text: string): Promise<string[]> => {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: 'You are a helpful assistant that extracts key points from text. Return only the key points as a numbered list.',
    },
    {
      role: 'user',
      content: `Extract key points from the following text:\n\n${text}`,
    },
  ]

  const response = await callGroqAPI(messages)
  return response.split('\n').filter((line) => line.trim().length > 0)
}

export const generateInsights = async (data: string): Promise<string> => {
  const messages: GroqMessage[] = [
    {
      role: 'system',
      content: 'You are a business intelligence assistant. Provide actionable insights based on the provided data.',
    },
    {
      role: 'user',
      content: `Analyze this business data and provide insights:\n\n${data}`,
    },
  ]

  return callGroqAPI(messages)
}
