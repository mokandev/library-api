import { PrismaPageRepository } from '@/repositories/prisma/prisma-page-repository'
import { ListBookPageByTypeUseCase } from '../list-book-page-by-type'

export const makeListBookPageByTypeUseCase = () => {
  const prismaPagesRepository = new PrismaPageRepository()
  const listBookPageByTypeUseCase = new ListBookPageByTypeUseCase(
    prismaPagesRepository,
  )
  return listBookPageByTypeUseCase
}
