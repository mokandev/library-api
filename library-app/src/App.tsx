import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Library, { loader as libraryLoader } from './features/library/Library';
import BookDetail, { loader as bookLoader } from './features/book/BookDetail';
import BookPage, { loader as bookPageLoader } from './features/book/BookPage';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { LibraryProvider } from './context/LibraryContext';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/library',
        element: <Library />,
        loader: libraryLoader,
        errorElement: <Error />,
      },
      {
        path: '/book/:bookId',
        element: <BookDetail />,
        loader: bookLoader,
        errorElement: <Error />,
      },
      {
        path: '/book/:bookId/page/:pageNumber',
        element: <BookPage />,
        loader: bookPageLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <LibraryProvider>
      <RouterProvider router={router} />
    </LibraryProvider>
  );
}

export default App;
