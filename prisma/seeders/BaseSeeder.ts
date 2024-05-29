import { PrismaClient } from '@prisma/client';

abstract class BaseSeeder {
  prisma = new PrismaClient();
  abstract handler();
  async seed() {
    await this.prisma.$connect();
    try {
      await this.handler();
    } catch (exception) {
      throw exception;
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default BaseSeeder;
