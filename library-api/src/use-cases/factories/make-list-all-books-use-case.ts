import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { ListBooksUseCase } from '../list-all-books'

export const makeListAllBooksUseCase = () => {
  const prismaBooksRepository = new PrismaBooksRepository()
  const listBooksUseCase = new ListBooksUseCase(prismaBooksRepository)
  return listBooksUseCase
}
