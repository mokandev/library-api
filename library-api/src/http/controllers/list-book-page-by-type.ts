import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeListBookPageByTypeUseCase } from '@/use-cases/factories/make-list-book-page-by-type-use-case'
import { z } from 'zod'
import { makeListBookPageByTypeResponse } from './factories/make-list-book-page-by-type-response'
import { IncomingMessage, ServerResponse } from 'http'

export const listBookPageByType = async (
  req: IncomingMessage,
  res: ServerResponse,
  bookId: string,
  pageNumber: string,
  pageType: string,
) => {
  const validateListBookDetailsParamsSchema = z.object({
    bookId: z.string().uuid(),
    pageNumber: z.coerce.number(),
    pageType: z.enum(['plain', 'html']).default('plain'),
  })

  const listBookPageByTypeUseCase = makeListBookPageByTypeUseCase()

  try {
    const {
      bookId: id,
      pageNumber: pgNumber,
      pageType: pgType,
    } = validateListBookDetailsParamsSchema.parse({
      bookId,
      pageNumber,
      pageType,
    })
    const page = await listBookPageByTypeUseCase.run({ id, pgNumber })
    const response = makeListBookPageByTypeResponse(page, pgNumber, pgType)
    pgType === 'html'
      ? res.writeHead(406, { 'Content-Type': 'application/json' })
      : res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(response))
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify({ message: 'Not Found' }))
    }
    throw error
  }
}
