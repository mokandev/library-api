const {VITE_API_URL} = import.meta.env


export async function getBooks() {
  const res = await fetch(`${VITE_API_URL}/books`)
  const { data } = await res.json()
  return data
}