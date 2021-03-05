import { Query, Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './schemas/book.schema';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post('/api/books')
  async create(@Body() createBookDto: CreateBookDto) {
    await this.booksService.create(createBookDto);
  }

  @Get('/api/books')
  async findBooks(@Query() query): Promise<Book[]> {
    return this.booksService.findBooks(+query.limit, +query.start);
  }
}
