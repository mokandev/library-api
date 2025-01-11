import { makeListAllBooksUseCase } from '@/use-cases/factories/make-list-all-books-use-case'
import { IncomingMessage, ServerResponse } from 'http'
import { makeListBooksResponse } from './factories/make-list-books-response'
import { Book } from '@prisma/client'

export const listBooks = async (req: IncomingMessage, res: ServerResponse) => {
  const listBooksUseCase = makeListAllBooksUseCase()
  const books = await listBooksUseCase.run()
  const response = makeListBooksResponse(books as Book[])
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(response))
}
