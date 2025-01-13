import { IBook } from "../interfaces/book";

export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
  }).format(new Date(dateStr));
}


export function setLocalStorageCache(key: string, data: IBook[] | IBook) {
  localStorage.setItem(`${key}`, JSON.stringify(data));
}

export function getLocalStorageCache(key: string) {
  const cachedData = localStorage.getItem(`${key}`) as string;
  return JSON.parse(cachedData)
}
