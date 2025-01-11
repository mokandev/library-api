import { prisma } from '@/lib/prisma'
import { PagesRepository } from '../pages-repository'

export class PrismaPageRepository implements PagesRepository {
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
