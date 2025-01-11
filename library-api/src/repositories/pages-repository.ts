import { Page } from '@prisma/client'

export interface PagesRepository {
  getBookPageByNumber(bookId: string, pageNumber: number): Promise<Page | null>
}
