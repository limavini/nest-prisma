import { Module } from '@nestjs/common';
import { PrismaService } from './database/PrismaService';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [BookModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
