import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { getBook, IGetBook } from '../../services/api';
import { formatDate } from '../../utils/helpers';

export default function BookDetail() {
  const {book} = useLoaderData<IGetBook>()
  const {title, author, total_pages: totalPages, published_at} = book
 
	return (
		<div>
			<h1>Title: {title}</h1>
      <div>
        <h3>Author: {author}</h3>
        <p>Total Pages: {totalPages}</p>
        <p>Published At: {formatDate(published_at)}</p>
      </div>
		</div>
	);
}

export async function loader({ params }: LoaderFunctionArgs) {
	const book = await getBook(params.bookId as string);
	return book;
}
