import { BooksRepository } from '@/repositories/books-repository'
import { Book } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface ListBookDetailsUseCaseRequest {
  id: string
}

interface IListBookDetails {
  run(params: ListBookDetailsUseCaseRequest): Promise<Book>
}

export class ListBookDetailsUseCase implements IListBookDetails {
  constructor(private booksRepository: BooksRepository) {}

  async run({ id }: ListBookDetailsUseCaseRequest) {
    const book = await this.booksRepository.getBookById(id)
    if (!book) {
      throw new ResourceNotFoundError()
    }
    return book
  }
}
