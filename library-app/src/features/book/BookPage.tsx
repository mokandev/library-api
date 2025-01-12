import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getBookPage } from "../../services/api";
import { IPage } from "../../interfaces/page";

export default function BookPage() {

  const {content} =  useLoaderData<IPage>()
  return (
    <div>
      <p>{content}</p>
    </div>
  )
}


export async function loader({params}: LoaderFunctionArgs) {
  const bookPage = await getBookPage(params.bookId as string, Number(params.pageNumber), 'plain')
  return bookPage
}