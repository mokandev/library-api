import { useLoaderData } from 'react-router-dom';
import { getBooks, IGetBooks } from '../../services/api';
import { IBook } from '../../interfaces/book';
import { LibraryBookItem } from './LibraryBookItem';

export default function Library() {
	const { books } = useLoaderData<IGetBooks>();
	return (
		<div>
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
