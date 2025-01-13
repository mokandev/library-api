import { useLoaderData } from 'react-router-dom';
import { getBooks, IGetBooks } from '../../services/api';
import { IBook } from '../../interfaces/book';
import { LibraryBookItem } from './LibraryBookItem';

export default function Library() {
  const { books } = useLoaderData<IGetBooks>();
  return (
    <div>
      <h2 className="mb-8 text-center text-xl font-semibold md:text-2xl">
        Library Book List
      </h2>
      <ul>
        {books.map((book: IBook) => (
          <LibraryBookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const books = await getBooks();
  return books;
}
