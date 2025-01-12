import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Library, {loader as libraryLoader} from './features/library/Library';
import BookDetail from './features/book/BookDetail';
import BookPage from './features/book/BookPage';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/library',
        element: <Library />,
        loader: libraryLoader
      },
      {
        path: '/book/:bookId',
        element: <BookDetail/>
      },
      {
        path: '/book/:bookId/page/:pageNumber',
        element: <BookPage />
      }
    ]
  }
	
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
