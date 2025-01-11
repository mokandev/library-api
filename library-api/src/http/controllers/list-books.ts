import { makeListAllBooksUseCase } from '@/use-cases/factories/make-list-all-books-use-case'
import { IncomingMessage, ServerResponse } from 'http'

export const listBooks = async (req: IncomingMessage, res: ServerResponse) => {
  const listBooksUseCase = makeListAllBooksUseCase()
  const books = await listBooksUseCase.run()
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(books))
}
