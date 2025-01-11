import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { ListBookDetailsUseCase } from '../list-book-details'

export const makeListBookDetailsUseCase = () => {
  const prismaBooksRepository = new PrismaBooksRepository()
  const listBookDetailsUseCase = new ListBookDetailsUseCase(
    prismaBooksRepository,
  )
  return listBookDetailsUseCase
}
