import { Book } from '@prisma/client'

export const makeListBooksResponse = (books: Book[]) => {
  return {
    status: 'success',
    results: books?.length || 0,
    data: {
      books,
    },
  }
}
