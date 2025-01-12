import { useLoaderData } from 'react-router-dom';
import { getBooks, IGetBooks } from '../../services/api';
import { IBook } from '../../interfaces/book';

export default function Library() {
	const { books } = useLoaderData<IGetBooks>();
	return (
		<div>
			<ul>{books.map((book: IBook) => <li key={book.id}>{book.title}</li>)}</ul>
		</div>
	);
}

export async function loader() {
	const books = await getBooks();
	return books;
}
