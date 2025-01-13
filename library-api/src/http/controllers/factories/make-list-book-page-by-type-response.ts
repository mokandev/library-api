import { replaceTemplate } from '@/helpers/replaceTemplate'
import { PageWithBook } from '@/repositories/pages-repository'

export const makeListBookPageByTypeResponse = async (
  page: PageWithBook,
  pageType: 'html' | 'plain',
) => {
  if (pageType === 'html') {
    const html = await replaceTemplate(page)
    return {
      status: 'success',
      data: {
        content: html,
      },
    }
  } else {
    return {
      status: 'success',
      data: {
        content: page.content,
      },
    }
  }
}
