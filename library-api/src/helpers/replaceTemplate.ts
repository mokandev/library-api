import { PageWithBook } from '@/repositories/pages-repository'
import { promises as fs } from 'fs'
import path from 'path'

export const replaceTemplate = async (page: PageWithBook) => {
  const { number: pageNumber, content, book} = page
  const {title, total_pages} = book
  try {
    const filePath = path.join(
      __dirname,
      '..',
      'templates',
      'template-book-page.html',
    )
    let output = await fs.readFile(filePath, 'utf-8')
    output = output.replace("{%BOOKTITLE%}", title)
    output = output.replace("{%PAGECONTENT%}", content)
    output = output.replace("{%BOOKPAGE%}", String(pageNumber))
    output = output.replace("{%TOTALPAGES%}", String(total_pages))
    return output
  } catch (error) {
    console.error(error)
    throw error
  }
}
