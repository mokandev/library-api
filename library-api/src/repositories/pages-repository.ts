export interface PageWithBook {
  id: string
  number: number
  content: string
  book: {
    title: string
    total_pages: number
  }
}

export interface PagesRepository {
  getBookPageByNumber(
    bookId: string,
    pageNumber: number,
  ): Promise<PageWithBook | null>
}
