import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import { useEffect } from 'react';
import { useLibraryContext } from '../context/LibraryContext';

export default function AppLayout() {
  const { createUser } = useLibraryContext();
  const navigation = useNavigation();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      createUser('');
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
