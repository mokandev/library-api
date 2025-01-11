import { IncomingMessage, ServerResponse } from 'http'
import { listBooks } from './controllers/list-books'

export async function appRoutes(req: IncomingMessage, res: ServerResponse) {
  const { method } = req
  const baseURL = `http://${req.headers.host}`
  const { pathname } = new URL(req.url || '', baseURL)

  if (pathname === '/api/v1/books' && method === 'GET') {
    await listBooks(req, res)
  } else {
    res.writeHead(404)
    res.end(JSON.stringify('Resource Not Found'))
  }
}
