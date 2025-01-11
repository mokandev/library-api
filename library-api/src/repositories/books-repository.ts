import { Book } from '@prisma/client'

export interface BooksRepository {
  getAllBooks(): Promise<Book[] | null>
  getBookById(bookId: string): Promise<Book | null>
}
