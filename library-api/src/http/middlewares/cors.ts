import { env } from '@/env'
import { IncomingMessage, ServerResponse } from 'http'

export const setupCors = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    `${env.CLIENT_URL}:${env.CLIENT_PORT}`,
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    return res.end()
  }
}
