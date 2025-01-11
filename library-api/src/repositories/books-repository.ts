import { Book } from '@prisma/client'

export interface BooksRepository {
  getAllBooks(): Promise<Book[] | null>
  getBookDetails(bookId: string): Promise<Book | null>
}
