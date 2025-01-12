import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Library from './features/library/Library';
import BookDetail from './features/book/BookDetail';
import BookPage from './features/book/BookPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/library',
		element: <Library />,
	},
  {
    path: '/book/:bookId',
    element: <BookDetail/>
  },
  {
    path: '/book/:bookId/page/:pageNumber',
    element: <BookPage />
  }
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
