import { IBook } from "../interfaces/book"
import { IPage, PageType } from "../interfaces/page"

const {VITE_API_URL} = import.meta.env

export interface IGetBooks {
  books: IBook[]
}

export interface IGetBook {
  book: IBook
}

export async function getBooks(): Promise<IGetBooks> {
  const res = await fetch(`${VITE_API_URL}/books`)
  const { data } = await res.json()
  return data
}

export async function getBook(bookId: string): Promise<IGetBook | undefined> {
  const res = await fetch(`${VITE_API_URL}/books/${bookId}`)
  if (!res.ok) throw Error("Couldn't find this book");
  const { data } = await res.json()
  return data
}

export async function getBookPage(bookId: string, pageNumber: number, textType: PageType ): Promise<IPage | undefined> {
  const res = await fetch(`${VITE_API_URL}/books/${bookId}/page/${pageNumber}/${textType}`)
  if (!res.ok) throw Error("Couldn't find this page");
  const { data } = await res.json()
  return data
}