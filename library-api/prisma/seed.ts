import { prisma } from '@/lib/prisma'
import { faker } from '@faker-js/faker'

const TOTAL_BOOKS = 6

async function main() {
  for (let i = 1; i <= TOTAL_BOOKS; i++) {
    const title = faker.lorem.words(3)
    const author = faker.person.fullName()
    const publishedAt = faker.date.future()

    const numberOfPages = faker.number.int({ min: 1, max: 6 })

    const pagesData = Array.from({ length: numberOfPages }, (_, idx) => ({
      number: idx + 1,
      content: faker.lorem.paragraphs({
        min: 2,
        max: 5,
      }),
    }))

    await prisma.book.create({
      data: {
        title,
        author,
        published_at: publishedAt,
        total_pages: numberOfPages,
        pages: {
          create: pagesData,
        },
      },
    })
  }

  console.log('Seed data created successfully using Faker!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error('Error seeding data:', err)
    await prisma.$disconnect()
    process.exit(1)
  })
