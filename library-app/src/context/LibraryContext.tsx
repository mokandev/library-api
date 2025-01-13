import { createContext, useContext, ReactNode, useReducer } from 'react';
import { initialState, reducer } from '../reducers/libraryReducer';
import { IBook } from '../interfaces/book';

interface ILibraryContext {
  username: string;
  updateUser: (username: string) => void;
  loadBooks: (books: IBook[]) => void;
  books: IBook[];
}

const defaultContextValue: ILibraryContext = {
  username: '',
  updateUser: () => {},
  loadBooks: () => {},
  books: [],
};

const LibraryContext = createContext<ILibraryContext | undefined>(
  defaultContextValue,
);

function LibraryProvider({ children }: { children: ReactNode }) {
  const [{ username, books }, dispatch] = useReducer(reducer, initialState);

  const updateUser = (username: string) => {
    dispatch({ type: 'user/create', payload: username });
  };

  const loadBooks = (books: IBook[]) => {
    dispatch({ type: 'books/load', payload: books });
  };

  return (
    <LibraryContext.Provider value={{ username, updateUser, books, loadBooks }}>
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
