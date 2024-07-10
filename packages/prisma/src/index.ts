// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from './generated/client'


const prisma = new PrismaClient();

export default prisma;
export * from '@prisma/client';

// export * from './next';
