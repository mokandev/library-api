import { Page } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { PagesRepository } from '@/repositories/pages-repository'

interface ListBookPageByTypeUseCaseRequest {
  id: string
  pgNumber: number
}

interface IListBookPageByType {
  run(params: ListBookPageByTypeUseCaseRequest): Promise<Page>
}

export class ListBookPageByTypeUseCase implements IListBookPageByType {
  constructor(private pagesRepository: PagesRepository) {}

  async run({ id, pgNumber }: ListBookPageByTypeUseCaseRequest) {
    const page = await this.pagesRepository.getBookPageByNumber(id, pgNumber)
    if (!page) {
      throw new ResourceNotFoundError()
    }
    return page
  }
}
