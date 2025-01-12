import { PageWithBook } from '@/repositories/pages-repository'

export const makeListBookPageByTypeResponse = (
  page: PageWithBook,
  pageNumber: number,
  pageType: 'html' | 'plain',
) => {
  if (pageType === 'html') {
    return {
      status: 'fail',
      message: 'Not implemented yet',
    }
  } else {
    return {
      status: 'success',
      pageNumber,
      data: {
        pageContent: page,
      },
    }
  }
}
