import { IncomingMessage, ServerResponse } from 'http'
import { listBooks } from './controllers/list-books'
import { listBookDetails } from './controllers/list-book-details'

export async function appRoutes(req: IncomingMessage, res: ServerResponse) {
  const { method } = req
  const baseURL = `http://${req.headers.host}`
  const parsedUrl = new URL(req.url || '', baseURL)
  const { pathname } = parsedUrl
  const [apiSegment, v1Segment, booksSegment, bookId] = parsedUrl.pathname
    .split('/')
    .filter(Boolean)

  if (pathname === '/api/v1/books' && method === 'GET') {
    await listBooks(req, res)
  } else if (
    req.method === 'GET' &&
    apiSegment === 'api' &&
    v1Segment === 'v1' &&
    booksSegment === 'books' &&
    bookId
  ) {
    await listBookDetails(req, res, bookId)
  } else {
    res.writeHead(404)
    return res.end(JSON.stringify('Resource Not Found'))
  }
}
