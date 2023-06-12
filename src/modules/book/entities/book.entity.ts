import { ApiProperty } from '@nestjs/swagger';
import { Book } from '@prisma/client';
export class BookEntity implements Book {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  bar_code: string;
}
