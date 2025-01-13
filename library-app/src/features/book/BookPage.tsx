import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { getBookPage } from '../../services/api';
import { IPage } from '../../interfaces/page';
import { Button } from '../../ui/Button';

export default function BookPage() {
  const { content } = useLoaderData<IPage>();

  function handleNextPageClick() {
    console.log('handleNextPageClick');
  }

  function handlePreviousPageClick() {
    console.log('handlePreviousPageClick');
  }

  return (
    <div>
      <p>{content}</p>
      <div>
        <Button text="Previous Page" handlerFunction={handleNextPageClick} />
        <Button text="Next Page" handlerFunction={handlePreviousPageClick} />
      </div>
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const bookPage = await getBookPage(
    params.bookId as string,
    Number(params.pageNumber),
    'plain',
  );
  return bookPage;
}
