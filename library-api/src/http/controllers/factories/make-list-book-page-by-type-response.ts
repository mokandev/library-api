import { Page } from '@prisma/client'
export const makeListBookPageByTypeResponse = (
  page: Page,
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
