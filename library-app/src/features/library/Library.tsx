import { getBooks } from '../../services/api';
import { IBook } from '../../interfaces/book';
import { LibraryBookItem } from './LibraryBookItem';
import { PageTitle } from '../../ui/PageTitle';
import {
  getLocalStorageCache,
  setLocalStorageCache,
} from '../../utils/helpers';
import { useLibraryContext } from '../../context/LibraryContext';

export default function Library() {
  const { books } = useLibraryContext();
  return (
    <div>
      <PageTitle>Library Book List</PageTitle>
      <ul className="divide-y divide-stone-200 border-b px-2">
        {books.map((book: IBook) => (
          <LibraryBookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const cachedBooksData = getLocalStorageCache('libraryBooks');
  if (cachedBooksData?.length > 0) {
    return { books: cachedBooksData };
  } else {
    const data = await getBooks();
    const { books } = data;
    setLocalStorageCache('libraryBooks', books);
    setLocalStorageCache('page-text-type', 'plain');
    return data;
  }
}
