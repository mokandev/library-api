import { Link } from "react-router-dom"
import { IBook } from "../../interfaces/book"

interface ILibraryBookItemProps {
  book: IBook;
}



export const LibraryBookItem: React.FC<ILibraryBookItemProps> = ({ book })  => {
  return (
    <li>
      <Link to={`/book/${book.id}`}>{book.title}</Link>
    </li>
  )
}
