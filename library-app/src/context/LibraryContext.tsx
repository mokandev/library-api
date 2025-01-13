import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
} from 'react';
import { initialState, reducer } from '../reducers/libraryReducer';

interface ILibraryContext {
  username: string;
  createUser: (username: string) => void;
}

const defaultContextValue: ILibraryContext = {
  username: '',
  createUser: () => {},
};

const LibraryContext = createContext<ILibraryContext | undefined>(
  defaultContextValue,
);

function LibraryProvider({ children }: { children: ReactNode }) {
  const [{ username }, dispatch] = useReducer(reducer, initialState);

  const createUser = (username: string) => {
    console.log('Chegou createUser', username);
    dispatch({ type: 'user/create', payload: username });
  };

  return (
    <LibraryContext.Provider value={{ username, createUser }}>
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
