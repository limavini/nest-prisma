import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookEntity } from './entities/book.entity';

@Controller('book')
@ApiTags('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiCreatedResponse({ type: BookEntity })
  async create(@Body() createBookDto: CreateBookDto) {
    return new BookEntity(await this.bookService.create(createBookDto));
  }

  @Get()
  @ApiOkResponse({ type: BookEntity, isArray: true })
  async findAll() {
    return (await this.bookService.findAll()).map((b) => new BookEntity(b));
  }

  @Get(':id')
  @ApiOkResponse({ type: BookEntity })
  async findOne(@Param('id') id: string) {
    const book = await this.bookService.findOne(id);

    if (!book) {
      throw new NotFoundException(`Book with id ${id} does not exist.`);
    }

    return new BookEntity(book);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BookEntity })
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return new BookEntity(await this.bookService.update(id, updateBookDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: BookEntity })
  async remove(@Param('id') id: string) {
    return new BookEntity(await this.bookService.remove(id));
  }
}
