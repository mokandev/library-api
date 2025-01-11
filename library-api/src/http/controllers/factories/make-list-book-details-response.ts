import { Book } from '@prisma/client'
export const makeListBookDetailsResponse = (book: Book) => {
  return {
    status: 'success',
    data: {
      book,
    },
  }
}
