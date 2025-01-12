import { prisma } from '@/lib/prisma'
import { PagesRepository } from '../pages-repository'

export class PrismaPageRepository implements PagesRepository {
  async getBookPageByNumber(bookId: string, pageNumber: number) {
    const page = await prisma.page.findFirst({
      where: {
        book_id: bookId,
        number: pageNumber,
      },
      select: {
        id: true,
        number: true,
        content: true,
        book: {
          select: {
            title: true,
            total_pages: true,
          },
        },
      },
    })

    return page
  }
}
