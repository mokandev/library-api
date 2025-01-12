import { useLoaderData } from "react-router-dom";
import { getBooks } from "../../services/api";

export default function Library() {
  const {books} =  useLoaderData()
  console.log('booksList',books)
  return (
    <div>
     <ul>
      {books.map((book) => <li key={book.id}>{book.title}</li>)}
     </ul>
    </div>
  )
}

export async function loader() {
	const menu = await getBooks();
	return menu;
}