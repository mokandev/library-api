import { LoaderFunctionArgs, useLoaderData, useNavigate } from 'react-router-dom';
import { getBookPage } from '../../services/api';
import { IPage } from '../../interfaces/page';
import { Button } from '../../ui/Button';
import { LinkButton } from '../../ui/LinkButton';
import { PageTitle } from '../../ui/PageTitle';
import { useLibraryContext } from '../../context/LibraryContext';
import { getLocalStorageCache } from '../../utils/helpers';

export default function BookPage() {
  const {currentBookPage, updateCurrentBookPage, currentBookTotalPages, currentBookId} = useLibraryContext()
  const { content } = useLoaderData<IPage>();
  const navigate = useNavigate()

  function handleNextPageClick() {
    if(currentBookPage === currentBookTotalPages) return
    updateCurrentBookPage('book/nextPage')
    navigate(`/book/${currentBookId}/page/${currentBookPage + 1}`)
  }

  function handlePreviousPageClick() {
    if(currentBookPage === 1) return
    updateCurrentBookPage('book/previousPage')
    navigate(`/book/${currentBookId}/page/${currentBookPage - 1}`)
  }

  return (
    <div className="mt-6 h-full">
      <div className="flex items-center justify-between">
        <LinkButton to="/library">&larr; Back to Library</LinkButton>
        <p className="font-light text-stone-900"> {currentBookPage}/{currentBookTotalPages}</p>
      </div>
      <PageTitle>Book Page</PageTitle>

      <p className="px-10 py-10">{content}</p>

      <div className="flex items-center justify-between">
        <Button
          type="secondary"
          text="Previous Page"
          handlerFunction={handlePreviousPageClick}
          disabled={currentBookPage === 1}
        />
        <Button
          type="secondary"
          text="Next Page"
          handlerFunction={handleNextPageClick}
          disabled={currentBookPage === currentBookTotalPages}
        />
      </div>
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const textType = getLocalStorageCache('page-text-type')
  const bookPage = await getBookPage(
    params.bookId as string,
    Number(params.pageNumber),
    textType,
  );
  return bookPage;
}
