import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import { useEffect } from 'react';
import { useLibraryContext } from '../context/LibraryContext';
import { getLocalStorageCache, setLocalStorageCache } from '../utils/helpers';

export default function AppLayout() {
  const { updateUser, loadBooks } = useLibraryContext();
  const navigation = useNavigation();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      updateUser('');
      setLocalStorageCache('libraryBooks', []);
    } else if (location.pathname === '/library') {
      const data = getLocalStorageCache('libraryBooks');
      if (data.length > 0) {
        loadBooks(data);
      }
    }
  }, [location]);

  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
