import { prisma } from '@/lib/prisma'

async function main() {
  // ─────────────────────────────────────────────────────────────────
  // 1) The Secret Universe, por John A. Contreras
  // ─────────────────────────────────────────────────────────────────
  const pagesDataSecrevUniverse = [
    {
      number: 1,
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus convallis ex vitae quam hendrerit, a sagittis diam sagittis. 
        Nunc maximus tortor vel massa luctus, a tincidunt massa consectetur.
      `,
    },
    {
      number: 2,
      content: `
        Duis tristique, odio non dictum feugiat, leo elit feugiat risus, 
        sed dignissim odio mauris quis sapien. Maecenas id sapien finibus, 
        dignissim nulla ac, ornare neque. Fusce vehicula, neque quis fermentum interdum, 
        orci risus pellentesque massa, in luctus nibh odio ac ante.
      `,
    },
    {
      number: 3,
      content: `
        Aenean id odio lorem. Quisque vitae enim lorem. 
        Nulla nunc diam, scelerisque ac elit ac, interdum porttitor diam. 
        Morbi euismod purus id quam facilisis facilisis. 
        Pellentesque interdum sem non erat venenatis, quis tempus nulla pretium.
      `,
    },
  ]

  await prisma.book.create({
    data: {
      title: 'The Secret Universe',
      author: 'John A. Contreras',
      publishedAt: new Date('2027-03-15'),
      total_pages: pagesDataSecrevUniverse.length,
      pages: {
        create: pagesDataSecrevUniverse,
      },
    },
  })

  // ─────────────────────────────────────────────────────────────────
  // 2) Painted Skies, por Aurora Sun
  // ─────────────────────────────────────────────────────────────────

  const pagesDataPaintedSkies = [
    {
      number: 1,
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
        posuere cubilia curae; Sed tristique metus neque, a commodo nulla malesuada ac.
      `,
    },
    {
      number: 2,
      content: `
        Nulla vestibulum egestas placerat. Mauris id dolor libero. 
        Aliquam erat volutpat. Praesent bibendum tellus eget dui pulvinar, 
        sed placerat tortor hendrerit.
      `,
    },
    {
      number: 3,
      content: `
        Suspendisse efficitur dapibus tincidunt. Praesent at lectus imperdiet, 
        faucibus mi eu, tristique tellus. Aenean a felis et justo vehicula viverra.
      `,
    },
  ]

  await prisma.book.create({
    data: {
      title: 'Painted Skies',
      author: 'Aurora Sun',
      publishedAt: new Date('2030-01-20'),
      total_pages: pagesDataPaintedSkies.length,
      pages: {
        create: pagesDataPaintedSkies,
      },
    },
  })

  // ─────────────────────────────────────────────────────────────────
  // 3) Tides of Tomorrow, por R. J. Nielsen
  // ─────────────────────────────────────────────────────────────────

  const pagesDataTidesOfTomorrow = [
    {
      number: 1,
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut vel tortor enim. Mauris in finibus libero, sed posuere magna. 
        Pellentesque at est vel nunc luctus pulvinar in vitae mi.
      `,
    },
    {
      number: 2,
      content: `
        Aliquam fermentum metus quis ipsum tempus, nec pulvinar ante accumsan. 
        Suspendisse potenti. Cras sed sodales lorem. Suspendisse sit amet eros magna.
      `,
    },
    {
      number: 3,
      content: `
        Integer rutrum maximus dignissim. Etiam fermentum dignissim nibh, 
        at aliquam ante tempus at. Suspendisse varius sollicitudin orci, 
        non fringilla lectus pulvinar a.
      `,
    },
  ]

  await prisma.book.create({
    data: {
      title: 'Tides of Tomorrow',
      author: 'R. J. Nielsen',
      publishedAt: new Date('2042-07-11'),
      total_pages: pagesDataTidesOfTomorrow.length,
      pages: {
        create: pagesDataTidesOfTomorrow,
      },
    },
  })

  // ─────────────────────────────────────────────────────────────────
  // 4) Journey to the Hidden Valley, por Fiona Cho
  // ─────────────────────────────────────────────────────────────────
  const pagesDataJournetToHiddenValley = [
    {
      number: 1,
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        In eu risus eget quam maximus iaculis. Nulla sed pulvinar enim. 
        Suspendisse pharetra metus nec congue egestas.
      `,
    },
    {
      number: 2,
      content: `
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
        turpis egestas. Fusce tristique, erat sed facilisis luctus, 
        enim sapien posuere ipsum, in pellentesque massa ante sed enim.
      `,
    },
    {
      number: 3,
      content: `
        Morbi venenatis molestie eros id iaculis. Donec tristique sem sit amet 
        sapien cursus lobortis. Vestibulum dignissim suscipit sapien vitae mattis.
      `,
    },
  ]

  await prisma.book.create({
    data: {
      title: 'Journey to the Hidden Valley',
      author: 'Fiona Cho',
      publishedAt: new Date('2029-11-05'),
      total_pages: pagesDataJournetToHiddenValley.length,
      pages: {
        create: pagesDataJournetToHiddenValley,
      },
    },
  })

  // ─────────────────────────────────────────────────────────────────
  // 5) The Crimson Moon, por M. Kazumori
  // ─────────────────────────────────────────────────────────────────

  const pagesDataTheCrimsonMoon = [
    {
      number: 1,
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus congue, dui a congue laoreet, dolor nisl pharetra ex, ac convallis massa 
        nibh et metus. Quisque vehicula sed turpis eget auctor.
      `,
    },
    {
      number: 2,
      content: `
        Pellentesque in suscipit quam. Nulla id dolor sit amet nisi placerat 
        rhoncus. In hac habitasse platea dictumst. Pellentesque porttitor ex vel 
        libero bibendum, sed fermentum mi ornare.
      `,
    },
    {
      number: 3,
      content: `
        Sed fermentum nisi arcu, quis convallis elit fermentum et. 
        Sed at arcu luctus, lacinia diam sed, faucibus orci. Maecenas bibendum, 
        tortor vitae ultricies tincidunt, elit diam feugiat nisi, a ultricies erat 
        purus id orci.
      `,
    },
  ]

  await prisma.book.create({
    data: {
      title: 'The Crimson Moon',
      author: 'M. Kazumori',
      publishedAt: new Date('2055-10-22'),
      total_pages: pagesDataTheCrimsonMoon.length,
      pages: {
        create: pagesDataTheCrimsonMoon,
      },
    },
  })

  // ─────────────────────────────────────────────────────────────────
  // 6) Forest of Echoes, por Ingrid Delgado
  // (Exemplo adicional com mais páginas)
  // ─────────────────────────────────────────────────────────────────

  const pagesDataForestOfEchoes = [
    {
      number: 1,
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse vitae molestie lorem. 
        Proin et massa auctor, elementum nibh eu, feugiat massa.
      `,
    },
    {
      number: 2,
      content: `
        Ut vestibulum viverra turpis, non molestie enim ullamcorper quis. 
        Quisque pharetra suscipit magna a scelerisque. Pellentesque nec diam sem.
      `,
    },
    {
      number: 3,
      content: `
        Vestibulum ac dui dui. In at justo non metus convallis pulvinar. 
        Nulla quis urna eget est fermentum tincidunt nec non ante.
      `,
    },
    {
      number: 4,
      content: `
        Sed nunc nisi, cursus at nunc non, fringilla porta turpis. 
        Etiam dapibus mauris et hendrerit fringilla. Sed quis magna vel nunc mollis 
        gravida eu eget lectus.
      `,
    },
  ]

  await prisma.book.create({
    data: {
      title: 'Forest of Echoes',
      author: 'Ingrid Delgado',
      publishedAt: new Date('2033-04-28'),
      total_pages: pagesDataForestOfEchoes.length,
      pages: {
        create: pagesDataForestOfEchoes,
      },
    },
  })

  console.log('Seed data created successfully!')
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
