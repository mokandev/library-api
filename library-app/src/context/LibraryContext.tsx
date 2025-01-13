import { createContext, useContext, ReactNode, useReducer } from 'react';
import { ActionTypes, initialState, reducer } from '../reducers/libraryReducer';
import { IBook } from '../interfaces/book';

interface ILibraryContext {
  username: string;
  updateUser: (username: string) => void;
  loadBooks: (books: IBook[]) => void;
  books: IBook[];
  currentBookId: string;
  currentBookPage: number;
  updateCurrentBook: (bookId: string) => void;
  updateCurrentBookPage: (type: ActionTypes, pageNumber?: number) => void;
  currentBookTotalPages: number
}

const defaultContextValue: ILibraryContext = {
  username: '',
  updateUser: () => {},
  loadBooks: () => {},
  books: [],
  currentBookPage: 0,
  currentBookId: '',
  updateCurrentBook: () => {},
  updateCurrentBookPage: () => {},
  currentBookTotalPages: 0
};

const LibraryContext = createContext<ILibraryContext | undefined>(
  defaultContextValue,
);

function LibraryProvider({ children }: { children: ReactNode }) {
  const [{ username, books, currentBookPage, currentBookId, currentBookTotalPages }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const updateUser = (username: string) => {
    dispatch({ type: 'user/create', payload: username });
  };

  const loadBooks = (books: IBook[]) => {
    dispatch({ type: 'books/load', payload: books });
  };

  const updateCurrentBook = (bookId: string) => {
    dispatch({ type: 'book/updateCurrentBook', payload: bookId });
  };

  const updateCurrentBookPage = (type: ActionTypes, pageNumber?: number) => {
    dispatch({ type , payload: pageNumber });
  };

  return (
    <LibraryContext.Provider
      value={{
        username,
        updateUser,
        books,
        loadBooks,
        currentBookPage,
        updateCurrentBook,
        updateCurrentBookPage,
        currentBookId,
        currentBookTotalPages
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

function useLibraryContext() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('LibraryContext was used outside of LibraryProvider');
  }
  return context;
}

export { useLibraryContext, LibraryProvider };
