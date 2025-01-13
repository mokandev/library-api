import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { getBookPage } from '../../services/api';
import { IPage } from '../../interfaces/page';
import { Button } from '../../ui/Button';
import { LinkButton } from '../../ui/LinkButton';
import { PageTitle } from '../../ui/PageTitle';

export default function BookPage() {
  const { content } = useLoaderData<IPage>();

  function handleNextPageClick() {
    console.log('handleNextPageClick');
  }

  function handlePreviousPageClick() {
    console.log('handlePreviousPageClick');
  }

  return (
    <div className="mt-6 h-full">
      <div className="flex items-center justify-between">
        <LinkButton to="/library">&larr; Back to Library</LinkButton>
        <p className="font-light text-stone-900"> 1/5</p>
      </div>
      <PageTitle>Book Page</PageTitle>

      <p className="px-10 py-10">{content}</p>

      <div className="flex items-center justify-between">
        <Button
          type="secondary"
          text="Previous Page"
          handlerFunction={handleNextPageClick}
        />
        <Button
          type="secondary"
          text="Next Page"
          handlerFunction={handlePreviousPageClick}
        />
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
