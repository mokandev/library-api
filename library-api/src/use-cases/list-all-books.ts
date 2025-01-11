import { BooksRepository } from '@/repositories/books-repository'

export class ListBooksUseCase {
  constructor(private booksRepository: BooksRepository) {}

  async run() {
    const books = await this.booksRepository.getAllBooks()
    return books
  }
}
