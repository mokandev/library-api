import { useLoaderData } from 'react-router-dom';
import { getBooks, IGetBooks } from '../../services/api';
import { IBook } from '../../interfaces/book';
import { LibraryBookItem } from './LibraryBookItem';
import { PageTitle } from '../../ui/PageTitle';

export default function Library() {
  const { books } = useLoaderData<IGetBooks>();
  return (
    <div>
      <PageTitle>Library Book List</PageTitle>
      <ul className="divide-y divide-stone-200 px-2 border-b">
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
