import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users
  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {},
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: 'password-sabin',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'alex@ruheni.com' },
    update: {},
    create: {
      email: 'alex@ruheni.com',
      name: 'Alex Ruheni',
      password: 'password-alex',
    },
  });

  const book1 = await prisma.book.upsert({
    where: { bar_code: '1' },
    update: {},
    create: {
      bar_code: '1',
      description: 'Description1',
      title: 'Title1',
      authorId: user1.id,
    },
  });

  const book2 = await prisma.book.upsert({
    where: { bar_code: '2' },
    update: {},
    create: {
      bar_code: '2',
      description: 'Description2',
      title: 'Title2',
      authorId: user2.id,
    },
  });

  const book3 = await prisma.book.upsert({
    where: { bar_code: '3' },
    update: {},
    create: {
      bar_code: '3',
      description: 'Description3',
      title: 'Title3',
      authorId: user2.id,
    },
  });

  console.log({ user1, user2, book1, book2, book3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
