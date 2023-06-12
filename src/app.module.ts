import { Module } from '@nestjs/common';
import { PrismaService } from './database/PrismaService';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
