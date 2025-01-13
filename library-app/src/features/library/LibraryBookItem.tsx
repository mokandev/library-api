import { Link } from 'react-router-dom';
import { IBook } from '../../interfaces/book';

interface ILibraryBookItemProps {
  book: IBook;
}

export const LibraryBookItem: React.FC<ILibraryBookItemProps> = ({ book }) => {
  return (
    <li className="mb-2 py-2 text-xl">
      <Link className="capitalize" to={`/book/${book.id}`}>
        📖 {book.title}
      </Link>
    </li>
  );
};
