import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { getBook, IGetBook } from '../../services/api';
import { formatDate, setLocalStorageCache } from '../../utils/helpers';
import { Button } from '../../ui/Button';
import { LinkButton } from '../../ui/LinkButton';
import { useEffect, useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import { useLibraryContext } from '../../context/LibraryContext';

type FormatType = 'plain' | 'html';

export default function BookDetail() {
  const {
    updateCurrentBook,
    currentBookPage,
    updateCurrentBookPage,
    currentBookId,
  } = useLibraryContext();
  const { book } = useLoaderData<IGetBook>();
  const { title, author, total_pages: totalPages, published_at } = book;
  const [format, setFormat] = useState<FormatType>('plain');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentBookId !== book.id) {
      updateCurrentBook(book.id);
    }
  }, [book, currentBookId, updateCurrentBook]);

  function handleClick() {
    const pageNumber = currentBookPage === 0 ? 1 : currentBookPage;
    updateCurrentBookPage('book/updateCurrentBookPage', pageNumber);
    navigate(`/book/${book.id}/page/${pageNumber}`);
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormat(event.target.value as FormatType);
    setLocalStorageCache('page-text-type', event.target.value);
  }

  return (
    <div className="mt-6 h-full">
      <div className="flex items-center justify-between">
        <LinkButton to="/library">&larr; Back to Library</LinkButton>
      </div>

      <div className="mb-6 mt-6 flex flex-col gap-2 font-normal">
        <PageTitle>Book Detail</PageTitle>
        <div className="mb-6 space-y-3 text-2xl text-stone-700">
          <p className="font-medium capitalize text-stone-600">
            Title: {title}
          </p>
          <p className="text-xl italic text-stone-500">Author: {author}</p>
          <p className="text-xl italic text-stone-500">
            Total Pages: {totalPages}
          </p>
          <p className="text-xl italic text-stone-500">
            Published At: {formatDate(published_at)}
          </p>
          <div className="flex items-center gap-5">
            <p className="text-xl text-stone-500">Which format?</p>
            <label className="text-xl italic" htmlFor="priority">
              Text
            </label>
            <input
              className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              type="checkbox"
              name="priority"
              id="priority"
              checked={format === 'plain'}
              value="plain"
              onChange={handleSelectChange}
            />

            <label className="text-xl italic" htmlFor="priority">
              HTML
            </label>
            <input
              className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              type="checkbox"
              name="priority"
              id="priority"
              checked={format === 'html'}
              value="html"
              onChange={handleSelectChange}
            />
          </div>
        </div>

        <Button
          type="primary"
          text="Read it now!"
          handlerFunction={handleClick}
        />
      </div>
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const book = await getBook(params.bookId as string);
  return book;
}
