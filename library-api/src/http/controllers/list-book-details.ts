import { IncomingMessage, ServerResponse } from 'http'
import { Book } from '@prisma/client'
import { makeListBookDetailsUseCase } from '@/use-cases/factories/make-list-book-details-use-case'
import { makeListBookDetailsResponse } from './factories/make-list-book-details-response'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { z } from 'zod'

export const listBookDetails = async (
  req: IncomingMessage,
  res: ServerResponse,
  bookId: string,
) => {
  const validateListBookDetailsParamsSchema = z.object({
    id: z.string().uuid(),
  })
  const listBookDetailsUseCase = makeListBookDetailsUseCase()

  try {
    const { id } = validateListBookDetailsParamsSchema.parse({ id: bookId })
    const book = await listBookDetailsUseCase.run({ id })
    const response = makeListBookDetailsResponse(book as Book)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(response))
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Not Found' }))
    }
    throw error
  }
}
