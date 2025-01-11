import { prisma } from '@/lib/prisma'
import { BooksRepository } from '../books-repository'

export class PrismaBooksRepository implements BooksRepository {
  async getAllBooks() {
    const books = await prisma.book.findMany()
    return books
  }

  async getBookById(bookId: string) {
    const book = prisma.book.findUnique({
      where: {
        id: bookId,
      },
    })

    return book
  }

  async getBookPageByNumber(bookId: string, pageNumber: number) {
    const page = await prisma.page.findFirst({
      where: {
        book_id: bookId,
        number: pageNumber,
      },
    })

    return page
  }
}
