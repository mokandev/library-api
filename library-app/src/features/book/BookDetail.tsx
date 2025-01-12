import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { getBook, IGetBook } from '../../services/api';

export default function BookDetail() {
  const {book} = useLoaderData<IGetBook>()
 
	return (
		<div>
			<h1>BookDetail</h1>
		</div>
	);
}

export async function loader({ params }: LoaderFunctionArgs) {
	const book = await getBook(params.bookId as string);
	return book;
}
