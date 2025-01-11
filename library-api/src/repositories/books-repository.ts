import { Book, Page } from '@prisma/client'

export interface BooksRepository {
  getAllBooks(): Promise<Book[] | null>
  getBookById(bookId: string): Promise<Book | null>
  getBookPageByNumber(bookId: string, pageNumber: number): Promise<Page | null>
}
