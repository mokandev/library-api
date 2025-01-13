import { IBook } from "../interfaces/book"

interface IState {
  username: string
  books: IBook[]
}

export const initialState:IState  = {
  username: "",
  books: []
}

interface IAction {
  type: "user/create" | 'books/load'
  payload?: string | IBook[]
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

    default:
      throw new Error("Unknown action type");
  }
}