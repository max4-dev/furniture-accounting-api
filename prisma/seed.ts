import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const workshops = [
    {
      name: 'Распиловочный цех',
      type: 'CUTTING',
      numberWorkers: 5,
    },
    {
      name: 'Сборочный цех',
      type: 'ASSEMBLY',
      numberWorkers: 12,
    },
    {
      name: 'Покрасочный цех',
      type: 'PAINTING',
      numberWorkers: 8,
    },
    {
      name: 'Упаковочный цех',
      type: 'PACKAGING',
      numberWorkers: 4,
    },
  ];

  for (const workshop of workshops) {
    await prisma.workshop.create({
      data: workshop,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
