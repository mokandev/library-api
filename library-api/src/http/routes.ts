import { IncomingMessage, ServerResponse } from 'http'
import { listBooks } from './controllers/list-books'
import { listBookDetails } from './controllers/list-book-details'
import { listBookPageByType } from './controllers/list-book-page-by-type'
import { setupCors } from './middlewares/cors'

export async function appRoutes(req: IncomingMessage, res: ServerResponse) {
  setupCors(req, res)
  const { method } = req
  const baseURL = `http://${req.headers.host}`
  const parsedUrl = new URL(req.url || '', baseURL)
  const { pathname } = parsedUrl
  const [
    apiSegment,
    v1Segment,
    booksSegment,
    bookId,
    pageSegment,
    pageNumber,
    pageType,
  ] = parsedUrl.pathname.split('/').filter(Boolean)

  const bookDetailsRouteCondition =
    req.method === 'GET' &&
    apiSegment === 'api' &&
    v1Segment === 'v1' &&
    booksSegment === 'books' &&
    !pageSegment &&
    bookId

  const bookPageByTypeRouteCondition =
    req.method === 'GET' &&
    apiSegment === 'api' &&
    v1Segment === 'v1' &&
    booksSegment === 'books' &&
    pageSegment === 'page' &&
    bookId &&
    pageNumber &&
    pageType

  if (pathname === '/api/v1/books' && method === 'GET') {
    await listBooks(req, res)
  } else if (bookDetailsRouteCondition) {
    await listBookDetails(req, res, bookId)
  } else if (bookPageByTypeRouteCondition) {
    await listBookPageByType(req, res, bookId, pageNumber, pageType)
  } else {
    res.writeHead(400)
    return res.end(JSON.stringify({ message: 'Bad Request' }))
  }
}
