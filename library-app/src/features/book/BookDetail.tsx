import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { getBook, IGetBook } from '../../services/api';
import { formatDate } from '../../utils/helpers';
import { Button } from '../../ui/Button';

export default function BookDetail() {
  const { book } = useLoaderData<IGetBook>();
  const { title, author, total_pages: totalPages, published_at } = book;

  function handleClick() {}

  return (
    <div>
      <Link
        to="/library"
        className="test-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to Library
      </Link>
      <h1 className="mb-8 text-center text-xl font-semibold md:text-2xl">
        Book Detail
      </h1>
      <h2>Title: {title}</h2>
      <div>
        <h3>Author: {author}</h3>
        <p>Total Pages: {totalPages}</p>
        <p>Published At: {formatDate(published_at)}</p>
      </div>

      <Button text="Read it now!" handlerFunction={handleClick} />
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const book = await getBook(params.bookId as string);
  return book;
}
