import { prisma } from '@/lib/prisma'
import { BooksRepository } from '../books-repository'

export class PrismaBooksRepository implements BooksRepository {
  async getAllBooks() {
    const books = await prisma.book.findMany()
    return books
  }
}
