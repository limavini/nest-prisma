import { ApiProperty } from '@nestjs/swagger';
import { Book } from '@prisma/client';
import { UserEntity } from 'src/modules/user/entities/user.entity';
export class BookEntity implements Book {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  bar_code: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty({ type: UserEntity })
  author?: UserEntity;

  constructor({ author, ...data }: Partial<BookEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }
}
