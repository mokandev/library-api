import { IBook } from "../interfaces/book"

interface IState {
  username: string
  books: IBook[]
  currentBookPage: number
  currentBookId: string
  currentBookTotalPages: number
}

export const initialState:IState  = {
  username: "",
  books: [],
  currentBookPage: 0,
  currentBookId: "",
  currentBookTotalPages: 0
}

export type ActionTypes = "user/create" | 'books/load' | "book/updateCurrentBook" | "book/updateCurrentBookPage" | "book/nextPage" | "book/previousPage"
interface IAction {
  type: ActionTypes
  payload?: string | IBook[] | number
}

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "user/create": {
      return {
        ...state, 
          username: action.payload as string
      }
    }

    case 'books/load': {
      const books = action.payload as IBook[]
      return {
        ...state, 
        books
      }
    }

    case "book/updateCurrentBook": {
      const bookId = action.payload as string
      const {total_pages: totalPages} = state.books.find((item) => item.id === bookId) as IBook
      return {
        ...state,
        currentBookId: bookId,
        currentBookPage: 0,
        currentBookTotalPages: totalPages
      }
    }

    case "book/updateCurrentBookPage": {
      return {
        ...state,
        currentBookPage: action.payload as number
      }
    }

    case "book/nextPage": {
      return {
        ...state,
        currentBookPage: state.currentBookPage + 1
      }
    }

    case "book/previousPage": {
      return {
        ...state,
        currentBookPage: state.currentBookPage - 1
      }
    }

    default:
      throw new Error("Unknown action type");
  }
}